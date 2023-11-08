import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center">
      {/* top section */}
      <div className="flex flex-col md:flex-row">
        {/* top left */}
        <div className="flex flex-col justify-center gap-3 mx-2 sm:mx-0">
          {/* top left first */}
          <div className="flex flex-col max-w-lg w-full bg-white border-[1px] border-border-color rounded-lg shadow-custom px-3 sm:px-5 md:px-8 py-4">
            <div className="flex justify-between">
              <div className="flex">
                <Image
                  className=" rounded-full mr-2"
                  src="/cool-guy.png"
                  height={50}
                  width={50}
                  alt="cool-guy"
                />
                <div className="flex flex-col ">
                  <h2 className=" text-lg font-medium">korebhaumik</h2>
                  <p className=" text-xs text-gray-400">Joined 31 Oct 2023</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 px-3 py-2 h-fit rounded-full bg-blue-700">
                <div className=" h-3 w-3 bg-white "></div>
                <p className=" text-sm text-white">Edit</p>
              </div>
            </div>
            <p className="my-2 text-sm text-gray-400">20 yo . Mumbai, India</p>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center">
                <p className=" font-medium text-lg">128</p>
                <p className=" text-sm text-gray-400">Posts</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" font-medium text-lg">10.1k</p>
                <p className=" text-sm text-gray-400">Likes</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" font-medium text-lg">51</p>
                <p className=" text-sm text-gray-400">Resources</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" font-medium text-lg">2.1k</p>
                <p className=" text-sm text-gray-400">Credits</p>
              </div>
            </div>
            <div className="flex justify-between mt-3 gap-2">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-lime-200">
                <div className=" my-auto h-5 w-5 rounded-full bg-black "></div>
                <p className=" font-normal text-sm">Current Mood: Very Happy</p>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <div className=" my-auto h-6 w-6 bg-red-200 "></div>
                <div className=" my-auto h-6 w-6 bg-red-200 "></div>
                <div className=" my-auto h-6 w-6 bg-red-200 "></div>
              </div>
            </div>
          </div>
          
          {/* top left second */}
          <div className="flex flex-col max-w-lg w-full bg-white border-[1px] border-border-color rounded-lg shadow-custom px-1 sm:px-3 md:px-6 py-4">
            <div className="flex gap-2 items-center mb-2 px-2">
              <div className="h-5 w-5 bg-black"></div>
              <p className=" text-lg font-normal">Your Overall Mood Analysis</p>
            </div>
            {/* horizontal progress bars */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-2 py-1 rounded-lg border-[1.5px] border-black ">
                <div className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-black"></div>
                  <p className=" text-sm">Very Positive</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[90%] h-1 bg-green-600 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-black"></div>
                  <p className=" text-sm">Satisifed</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[75%] h-1 bg-lime-400 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-black"></div>
                  <p className=" text-sm">Dissatisifed</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[20%] h-1 bg-yellow-400 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-black"></div>
                  <p className=" text-sm">Negative</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[50%] h-1 bg-red-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className=" bg-sky-100 border-blue-500 border-2 rounded-lg px-3 py-2 mt-2 mx-2">
              <p className="text-sm text-cyan-700">
                Drawing from your previous activity, our cutting-edge AI
                delivers this sentiment analysis.
              </p>
            </div>
          </div>
        </div>
        {/* top right section */}
        <div></div>
      </div>
    </div>
  );
}

export default Page;
