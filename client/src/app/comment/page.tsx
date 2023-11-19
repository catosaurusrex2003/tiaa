"use client";
import { useBeautifyCommentAi } from "@/context/Ai.beautifyComment.context";
// import useRealtimeTranscription from "@/hooks/useRealtimeTranscript";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

function Page() {
  const RealTimeTranscript = dynamic(
    () => import("@/components/realTimeTranscription"),
    { ssr: false }
  );

  const postComment = (str: string) => {
    console.log("YE FUNCTION KHUD SE LIKH", str);
  };

  return (
    <div className="flex justify-center">
      <RealTimeTranscript postComment={postComment} />
    </div>
  );
}

export default Page;
