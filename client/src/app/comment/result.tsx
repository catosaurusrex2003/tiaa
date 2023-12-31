"use client";
import React, { useRef, useEffect } from "react";
import { useBeautifyCommentAi } from "@/context/Ai.beautifyComment.context";

type Props = {};

export default function Result({}: Props) {
  const { messages } = useBeautifyCommentAi();
  //   console.log(messages);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length === 0) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="max-w-2xl px-5 pb-10 mx-auto flex flex-col-reverse scroll-auto"
      id="content"
    >
      {messages.map((message, index) => {
        if (message.role === "user") return;
        if (index !== messages.length - 1) return;
        return (
          <div className="" key={Math.random()}>
            <p className="text-gray-700 whitespace-pre-wrap">
              {message.content}
            </p>
          </div>
        );
      })}
      <div ref={bottomRef} className="" />
    </div>
  );
}
