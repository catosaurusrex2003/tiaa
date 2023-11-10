import Image from "next/image";
import React from "react";
import MainBanner from "./mainBanner";
import { DoubleBarPlot } from "./doubleBarPlot";
import Calendar from "./calender";

function Page() {
  return (
    <section className="mt-10 mb-52">
      <MainBanner />
      <div className=" max-w-7xl w-full px-2 sm:px-0 mx-auto">
        <p className=" text-lg mt-5 mb-2 font-medium">Activity Log</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-7">
          {/* card 1 */}
          <div className="bg-white border-[1px] border-border-color rounded-lg shadow-custom p-5 max-w-xs w-full">
            <div className="flex justify-between items-end gap-5">
              <div className="flex flex-col">
                {/* <div className="w-7 h-7 sm:h-10 sm:w-10 bg-orange-400" /> */}
                <Image src="/trophy-cup.svg" height={70} width={70} alt="" />
                <p className=" font-medium">Bhaumik kore</p>
                <p className="text-sm text-gray-400">Word Craftsman</p>
              </div>
              <div className="flex flex-col items-end">
                <div className=" flex gap-1">
                  <p className="text-emerald-500">128</p>
                  <p className="">/</p>
                  <p className="">100</p>
                </div>
                <p className="text-sm text-gray-400">Total Posts Goal</p>
              </div>
            </div>
            <div className="h-4 rounded-full mt-2 w-full bg-zinc-200">
              <div className="w-[50%] h-4 bg-emerald-500 rounded-full" />
            </div>
            <div className="flex justify-between text-xs">
              <p className=" text-emerald-500">2106 credits</p>
              <p className=" ">5k credits</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col justify-between bg-white border-[1px] border-border-color rounded-lg shadow-custom p-5 max-w-xs w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className=" text-gray-400 text-xs">You are rock hard!</p>
                <p className=" text-orange-600 text-sm">7 day streak</p>
              </div>
              <Image
                src="/social-media/tinder.svg"
                height={20}
                width={20}
                alt=""
              />
            </div>
            {/* beads */}
            <div className="flex justify-between items-center my-3">
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
              <hr className=" border-[1px] border-emerald-600 w-full" />
              <Image src="/greentick.svg" height={25} width={25} alt="" />
            </div>
            <hr className=" border-gray-200" />
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <p className="">1203</p>
                <p className="text-gray-400 text-xs">Credits</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="">285</p>
                <p className="text-gray-400 text-xs">Posts</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="">+33%</p>
                <p className="text-gray-400 text-xs">Interactions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-7 my-3 sm:my-5">
          {/* card 3 */}
          <div className="flex flex-col justify-between bg-white border-[1px] border-border-color rounded-lg shadow-custom p-5 max-w-xl w-full">
            <div className="flex justify-between items-center border-b-2 border-gray-100 pb-3">
              <p>Interactions Trends</p>
              <div className="flex justify-between gap-4">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.125 13.25L0.875 7L7.125 0.75"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className=" rotate-180"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.125 13.25L0.875 7L7.125 0.75"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex  flex-col sm:flex-row mt-3">
              <div className="flex flex-row sm:flex-col justify-between mb-4 sm:mb-0 gap-2">
                <div className="flex flex-col bg-sky-50 border-[1px] border-gray-200 rounded-lg w-32 px-3 py-2">
                  <div className="flex justify-between items-center gap-16">
                    <p className="text-sm">285</p>
                    <hr className="w-2 border-black border-[1px]" />
                  </div>
                  <p className="text-xs text-gray-400">Posts</p>
                </div>
                <div className="flex flex-col bg-sky-50 border-[1px] border-gray-200 rounded-lg w-32 px-3 py-2">
                  <div className="flex justify-between items-center gap-16">
                    <p className="text-sm">47</p>
                    <hr className="w-2 border-black border-[1px]" />
                  </div>
                  <p className="text-xs text-gray-400">Comments</p>
                </div>
                <div className="hidden sm:flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className=" h-3 w-3 rounded-full bg-emerald-600" />
                    <p className=" text-xs">This week</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" h-3 w-3 rounded-full bg-gray-300" />
                    <p className=" text-xs">Last week</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <DoubleBarPlot />
              </div>
              <div className="flex sm:hidden flex-col gap-1 mt-3">
                <div className="flex items-center gap-2">
                  <div className=" h-3 w-3 rounded-full bg-emerald-600" />
                  <p className=" text-xs">This week</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className=" h-3 w-3 rounded-full bg-gray-300" />
                  <p className=" text-xs">Last week</p>
                </div>
              </div>
            </div>
          </div>
          {/* CALENDER */}
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
