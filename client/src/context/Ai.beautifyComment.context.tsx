"use client";
import { ChatRequestOptions } from "ai";
import { type Message, useChat, CreateMessage } from "ai/react";
import { useContext, createContext, useState } from "react";

type IContext = {
  messages: Message[];
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => Promise<string | null | undefined>;
  isLoading: boolean;
  setMessages: (messages: Message[]) => void;
};

const AiBeautifyCommentContext = createContext<IContext>({
  messages: [],
  append: () => Promise.resolve(null),
  isLoading: false,
  setMessages: () => {},
});

export const AiBeautifyCommentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { append, messages, isLoading, setMessages } = useChat({
    api: "/api/beautifyComment",
  });
  return (
    <AiBeautifyCommentContext.Provider
      value={{
        messages,
        append,
        isLoading,
        setMessages,
      }}
    >
      {children}
    </AiBeautifyCommentContext.Provider>
  );
};
export const useBeautifyCommentAi = () => useContext(AiBeautifyCommentContext);
