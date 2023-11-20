"use client";

import ArrowSVG from "@/assets/ArrowSVG";
import HouseSVG from "@/assets/HouseSVG";
import PopSVG from "@/assets/popSVG";
import { usePosts } from "@/context/Posts.context";
import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const { filterPosts } = usePosts();
  return (
    <div className="w-80 border-r py-4 px-4 h-[calc(100vh-80px)]">
      {/* dummy */}

      {/* <div className="mx-auto bg-zinc-200 rounded-lg h-[calc(100%-150px)]"></div> */}
      <div className="mx-auto ">
        <div className="cursor-pointer">
          <p
            onClick={() => {
              filterPosts("all");
            }}
            className="flex items-center text-[15px] px-4 py-2 rounded-lg hover:bg-zinc-200 transition "
          >
            <HouseSVG />
            <span className="mt-1 ml-2">Home</span>
          </p>
          <p
            onClick={() => {
              filterPosts("all");
            }}
            className="flex items-center text-[15px] px-4 py-2 rounded-lg hover:bg-zinc-200 transition  "
          >
            <PopSVG />
            <span className="mt-1 ml-2">Popular</span>
          </p>
        </div>
        <hr className="my-2" />
        <div>
          <h1 className="text-[15px] px-2 text-zinc-500">TOPICS</h1>
          <div className="cursor-pointer">
            <p
              onClick={() => {
                filterPosts("HealthCare");
              }}
              className="flex items-center text-[15px] w-full justify-between px-2 py-2 rounded-lg "
            >
              <span>HealthCare</span>
              <ArrowSVG />
            </p>
            <p
              onClick={() => {
                filterPosts("Technology");
              }}
              className="flex items-center text-[15px] w-full justify-between px-2 py-2 rounded-lg "
            >
              <span>Technology</span>
              <ArrowSVG />
            </p>
            <p
              onClick={() => {
                filterPosts("Finance");
              }}
              className="flex items-center text-[15px] w-full justify-between px-2 py-2 rounded-lg "
            >
              <span>Finance</span>
              <ArrowSVG />
            </p>
            <p
              onClick={() => {
                filterPosts("Retail");
              }}
              className="flex items-center text-[15px] w-full justify-between px-2 py-2 rounded-lg "
            >
              <span>Retail & Sales</span>
              <ArrowSVG />
            </p>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <h1 className="text-[15px] px-2 text-zinc-500">RESOURCES</h1>
          <div className="cursor-pointer">
            <p className="flex items-center text-[15px] w-full justify-between px-2 py-1 rounded-lg ">
              <span>About Us</span>
            </p>
            <p className="flex items-center text-[15px] w-full justify-between px-2 py-1 rounded-lg ">
              <span>Help</span>
            </p>
            <p className="flex items-center text-[15px] w-full justify-between px-2 py-1 rounded-lg ">
              <span>Blog</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
