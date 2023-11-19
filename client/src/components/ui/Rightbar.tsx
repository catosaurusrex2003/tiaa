"use client";
import HeartSVG from "@/assets/HeartSVG";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Image from "next/image";
import { Post, usePosts } from "@/context/Posts.context";
import ctgrs from "@/assets/categories.json";

type Props = {};

export default function Rightbar({}: Props) {
  const { posts } = usePosts();
  console.log("oopio", posts);

  const ct = posts[0];

  //@ts-ignore
  const category = ctgrs[ct?.category.toLowerCase() ?? "finance"];

  const sideCommentsJSX = posts.map((post) => (
    <>
      <SideComment key={post.id} post={post} />
      <hr className="mt-4" />
    </>
  ));

  sideCommentsJSX.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full max-w-[26rem] h-[calc(100vh-80px)] overflow-y-scroll py-4 px-4 ">
      {/* <div className="h-full mx-auto rounded-lg bg-zinc-200"></div> */}

      {/* Group */}
      <div className="relative flex flex-col gap-3 px-6 py-6 border border-gray-200 rounded-lg bg-zinc-100">
        <span className="absolute top-[20px] right-5 bg-blue-800 rounded-full h-8 w-8">
          <HeartSVG className="absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </span>
        <h1 className="font-medium">{category.title}</h1>
        <h2 className="text-sm">{category.body}</h2>
        <div className="flex justify-between w-full">
          <p className="flex flex-col items-start">
            <span className="text-lg font-medium">{category.members}K</span>
            <span className="text-sm text-zinc-500">Members</span>
          </p>
          <p className="flex flex-col items-start">
            <span className="text-lg font-medium">{category.online}K</span>
            <span className="text-sm text-zinc-500">Online</span>
          </p>
          <p className="flex flex-col items-start">
            <span className="text-lg font-medium">Top {category.rank}%</span>
            <span className="text-sm text-zinc-500">Rank by size</span>
          </p>
        </div>
      </div>

      {/* Bajs */}
      <div className="flex justify-between mt-3 text-sm">
        <span className="px-4 py-2 border rounded-full cursor-pointer bg-sky-100 border-sky-800">
          Popular
        </span>
        <span className="px-4 py-2 rounded-full cursor-pointer">Hot</span>
        <span className="px-4 py-2 rounded-full cursor-pointer ">
          Most Liked
        </span>
        <span className="px-4 py-2 rounded-full cursor-pointer ">
          Relatable
        </span>
      </div>

      {/* Comments */}
      <div className="">{sideCommentsJSX}</div>
    </div>
  );
}

type SideCommentsProps = {
  post: Post;
};

function SideComment({ post }: SideCommentsProps) {
  return (
    <div className="flex flex-col gap-2 mt-4 text-sm">
      <div className="flex items-center gap-2">
        <Image src={Avatar} alt="" className="w-8 aspect-square" />
        <p className="flex items-center gap-2">
          <span className="font-medium">{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
          <span className="text-zinc-500">
            {Math.floor(Math.random() * 100)} days ago
          </span>
        </p>
      </div>
      <p className="leading-relaxed">{post.content}</p>
      <p className="flex items-center gap-2 text-sm">
        <span className="text-zinc-500">101 views</span>
        <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
        <span className="text-zinc-500">{post.comments} responses</span>
      </p>
    </div>
  );
}
