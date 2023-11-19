"use client";
import React from "react";
import Comment from "@/components/ui/Comment";
import { Post as IPost, usePosts } from "@/context/Posts.context";
import Post from "@/components/ui/Post";

type Props = {
  data: any;
};

export default function Comments({ data }: Props) {
  const commentsJSX = data.map((comment: any) => (
    <Comment key={comment.id} comment={comment} />
  ));
  console.log(data);
  //@ts-ignore
  const posts: IPost[] = JSON.parse(sessionStorage.getItem("posts") ?? []);
  console.log("sffsfsfssfsd", posts);
  const ogPost = posts.filter((post) => {
    console.log(post.id, data[0].parentId);
    return post.id === data[0].parentId;
  })[0];
  console.log("sfsfsd", ogPost);
  return (
    <>
      <div className="w-full flex flex-col gap-4 overflow-y-scroll max-w-xl border-r py-4 px-4 h-[calc(100vh-80px)]">
        <Post post={ogPost} />
        <div className="flex flex-col gap-2 px-4 py-4 border border-gray-200 rounded-xl">
          <h1>Comments</h1>
          <textarea placeholder="enter your own comment" />
          {commentsJSX}
        </div>
      </div>
    </>
  );
}
