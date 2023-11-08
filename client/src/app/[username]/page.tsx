import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="mt-20 mx-20">
      {/* top section */}
      <div className="flex flex-col md:flex-row">
        {/* top left section */}
        <div className="flex flex-col max-w-lg w-full bg-white border-[1px] border-border-color rounded-lg shadow-custom px-10">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                className=" rounded-full mx-2"
                src="/cool-guy.png"
                height={55}
                width={55}
                alt="cool-guy"
              />
              <div className="flex flex-col ">
                <h2 className=" text-lg font-medium">korebhaumik</h2>
                <p className=" text-sm text-gray-400">Joined 31 Oct 2023</p>
              </div>
            </div>
            <div className=" px-3 py-1 rounded-lg text-white bg-blue-700">
              Edit
            </div>
          </div>

          <p className="text-sm text-gray-400">20 yo . Mumbai, India</p>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-lg">128</p>
              <p className=" text-sm text-gray-400">Posts</p>
            </div>
            <div className="flex flex-col">
              <p className=" text-lg">10.1k</p>
              <p className=" text-sm text-gray-400">Likes</p>
            </div>
            <div className="flex flex-col">
              <p className=" text-lg">51</p>
              <p className=" text-sm text-gray-400">Resources</p>
            </div>
            <div className="flex flex-col">
              <p className=" text-lg">2.1k</p>
              <p className=" text-sm text-gray-400">Credits</p>
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
