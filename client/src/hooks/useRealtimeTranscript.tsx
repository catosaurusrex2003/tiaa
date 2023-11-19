"use client";
import { useState, useRef } from "react";

const useRealtimeTranscription = () => {
  const [status, setStatus] = useState<"RECORDING" | "PAUSED" | "STOPPED">(
    "STOPPED"
  );
  const [streamText, setStreamText] = useState<string>("");
  const [recorder, setRecorder] = useState<any | null>(null);
  const socket = useRef<WebSocket | null>(null);

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
    }
  };

  const run = async () => {
    if (status != "RECORDING") {
      const { default: RecordRTC, StereoAudioRecorder } = await import(
        "recordrtc"
      );

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
          console.log(res);
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

  //   const getColor = () => {
  //     switch (status) {
  //       case "RECORDING":
  //         return "bg-emerald-600";
  //       case "STOPPED":
  //         return "bg-red-600";
  //       case "PAUSED":
  //         return "bg-orange-500";
  //       default:
  //         return "";
  //     }
  //   };

  return { streamText, status, start: run, pause };
};

export default useRealtimeTranscription;
