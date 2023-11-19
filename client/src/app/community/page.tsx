"use client";
import React from "react";
import Post from "@/components/ui/Post";
import { usePosts } from "@/context/Posts.context";

type Props = {};

export default function Page({}: Props) {
  const { posts } = usePosts();

  const postsJSX = posts.map((post) => <Post key={post.id} post={post} />);
  // console.log("--------",posts);

  if (posts.length === 0)
    return (
      <div className="w-full flex flex-col gap-4 overflow-y-scroll max-w-xl border-r py-4 px-4 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-xl font-medium">No posts found</h1>
          <p className="text-lg text-gray-500">
            Try changing your filter or create a new post
          </p>
        </div>
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-4 overflow-y-scroll max-w-xl border-r py-4 px-4 h-[calc(100vh-80px)]">
      {postsJSX}
    </div>
  );
}
