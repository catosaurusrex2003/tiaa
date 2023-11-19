"use client";
import { AiBeautifyCommentContextProvider } from "@/context/Ai.beautifyComment.context";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AiBeautifyCommentContextProvider>
      {children}
    </AiBeautifyCommentContextProvider>
  );
}

export default Layout;
