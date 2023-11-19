"use client";
import { useBeautifyCommentAi } from "@/context/Ai.beautifyComment.context";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";
import LoadingSpinner from "./loadingSpinner";

type props = {
  postComment: (str: string) => void;
};

const RealTimeTranscription = ({ postComment }: props) => {
  const [status, setStatus] = useState<"RECORDING" | "PAUSED" | "STOPPED">(
    "STOPPED"
  );
  const [recorder, setRecorder] = useState<RecordRTC | null>(null);
  const [streamText, setStreamText] = useState<string>("");
  const socket = useRef<WebSocket | null>(null);

  const { append, isLoading, messages } = useBeautifyCommentAi();

  const beautifyComment = async () => {
    await append({
      content: streamText,
      role: "user",
    });
  };

  const pause = () => {
    console.log("pausing");
    if (status == "RECORDING") {
      if (socket) {
        socket.current?.send(JSON.stringify({ terminate_session: true }));
        socket.current?.close();
        console.log("SETTING SOCKET TO NULL 1");
        socket.current = null;
      }
      if (recorder) {
        recorder.pauseRecording();
        setRecorder(null);
      }
      setStatus("PAUSED");
      // setFinalText(streamText);
    }
  };

  const run = async () => {
    if (status != "RECORDING") {
      // existing setup logic
      try {
        const response = await fetch("/api/getToken");
        const data = await response.json();

        if (data.error) {
          alert(data.error);
          return;
        }

        const { token } = data;
        const newSocket = new WebSocket(
          `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`
        );

        socket.current = newSocket;

        // handle incoming messages to display transcription to the DOM
        const texts: Record<string, string> = {};
        newSocket.onmessage = (message) => {
          let msg = "";
          const res = JSON.parse(message.data);
          texts[res.audio_start] = res.text;
          const keys = Object.keys(texts);
          keys.sort((a: any, b: any) => a - b);
          for (const key of keys) {
            if (texts[key]) {
              msg += ` ${texts[key]}`;
            }
          }
          setStreamText(msg);
        };
        newSocket.onerror = (event) => {
          console.error(event);
          socket.current?.close();
        };

        newSocket.onclose = (event) => {
          console.log("SETTING SOCKET TO NULL 2 ", event);
          socket.current = null;
        };
        newSocket.onopen = () => {
          // once socket is open, begin recording
          setStreamText("");
          // setFinalText("");
          navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
              const localRecorder = new RecordRTC(stream, {
                type: "audio",
                mimeType: "audio/webm;codecs=pcm", // endpoint requires 16bit PCM audio
                recorderType: StereoAudioRecorder,
                timeSlice: 250, // set 250 ms intervals of data that sends to AAI
                desiredSampRate: 16000,
                numberOfAudioChannels: 1, // real-time requires only one channel
                bufferSize: 16384,
                audioBitsPerSecond: 128000,
                ondataavailable: (blob: Blob) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const base64data = reader.result as string;
                    // audio data must be sent as a base64 encoded string
                    if (socket) {
                      if (typeof base64data == "string") {
                        socket.current?.send(
                          JSON.stringify({
                            audio_data: base64data?.split("base64,")[1],
                          })
                        );
                      }
                    }
                  };
                  reader.readAsDataURL(blob);
                },
              });
              setRecorder(localRecorder);
              localRecorder.startRecording();
            })
            .catch((err) => console.error(err));
        };
        setStatus("RECORDING");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getColor = () => {
    switch (status) {
      case "RECORDING":
        return "bg-emerald-600";
      case "STOPPED":
        return "bg-red-600";
      case "PAUSED":
        return "bg-orange-500";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.content) {
      const finalMessage = messages[messages.length - 1].content;
      console.log("finalMessage", finalMessage);
      setStreamText(finalMessage);
      // setFinalText(finalMessage);
    }
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 w-3/4 mt-10 px-4 py-7 border-[1px] border-border-color rounded-lg shadow-custom bg-white">
      <div className="flex w-full gap-5 justify-between">
        <textarea
          className="border-2 py-1 px-2 w-full rounded-md "
          value={streamText}
          onChange={(e) => {
            setStreamText(e.target.value);
            // setFinalText(e.target.value);
          }}
          placeholder="comment.."
        />
        <div className="flex flex-col items-center gap-3">
          <div className="">
            {status == "RECORDING" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-red-700 cursor-pointer"
                onClick={pause}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-green-700 cursor-pointer"
                onClick={run}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            )}
          </div>
          <div>
            {isLoading ? (
              <LoadingSpinner size={24} />
            ) : (
              <Image
                className=" cursor-pointer"
                onClick={beautifyComment}
                src="/sparkle-blue.svg"
                height={25}
                width={25}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        className="bg-blue-600 active:bg-blue-700 px-3 py-2 rounded-md font-semibold text-white"
        onClick={()=>postComment(streamText)}
      >
        Post
      </button>
    </div>
  );
};

export default RealTimeTranscription;
