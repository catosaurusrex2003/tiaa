"use client";
import PenSVG from "@/assets/PenSVG";
import { useAuth } from "@/context/supabase-auth-provider";
import React from "react";

type Props = {};

export default function CreatePost({}: Props) {
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  return (
    <div className="absolute bottom-0 left-0 border px-4 flex items-center bg-blue-800 text-white py-3 rounded-xl border-zinc-500 mb-2 ml-2 cursor-pointer">
      <PenSVG className="w-5 h-5 mr-2" />
      <span>Create Post</span>
    </div>
  );
}
