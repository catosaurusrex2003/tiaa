import React from "react";
import Image from "next/image";

const Interests = {
  left: [
    {
      genre: "Relationship",
      rating: 0,
    },
    {
      genre: "Politics",
      rating: 4,
    },
    {
      genre: "Education",
      rating: 3,
    },
    {
      genre: "Techno",
      rating: 5,
    },
  ],
  right: [
    {
      genre: "Art and Design",
      rating: 4,
    },
    {
      genre: "Finance",
      rating: 1,
    },
    {
      genre: "Education",
      rating: 2,
    },
    {
      genre: "Web Dev",
      rating: 5,
    },
  ],
};
const Highlights = {
  left: [
    "First 100 users on users",
    "Active Streak of 7 days",
    "2yr long membership",
  ],
  right: ["Has gained more than 10k likes", "Acclaimed more than 100 credits"],
};

function MainBanner() {
  return (
    <div className="flex flex-col items-center">
      {/* top section */}
      <div className="flex flex-col md:flex-row w-full justify-center gap-5 ">
        {/* top left */}
        <div className="flex flex-col justify-center max-w-lg w-full gap-3 px-2">
          {/* top left first */}
          <div className="flex flex-col bg-white border-[1px] border-border-color rounded-lg shadow-custom px-3 sm:px-5 md:px-8 py-4">
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
                {/* <div className=" h-3 w-3 bg-white "></div> */}
                <Image src="/pen.svg" height={15} width={15} alt="" />
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
                <Image
                  src="/emoticons/smily.svg"
                  height={18}
                  width={18}
                  alt=""
                />
                <p className=" font-normal text-sm">Current Mood: Happy</p>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <Image
                  className="mr-1 cursor-pointer"
                  src="/social-media/facebook.svg"
                  height={12}
                  width={12}
                  alt=""
                />
                <Image
                  className="cursor-pointer"
                  src="/social-media/instagram.svg"
                  height={22}
                  width={22}
                  alt=""
                />
                <Image
                  className="cursor-pointer"
                  src="/social-media/twitter.svg"
                  height={24}
                  width={24}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* top left second */}
          <div className="flex flex-col max-w-lg w-full bg-white border-[1px] border-border-color rounded-lg shadow-custom px-1 sm:px-3 md:px-6 py-4">
            <div className="flex gap-2 items-center mb-2 px-2">
              {/* <div className="h-5 w-5 bg-black"></div> */}
              <Image src="/sparkle.svg" height={25} width={25} alt="" />
              <p className=" text-lg font-normal">Your Overall Mood Analysis</p>
            </div>
            {/* horizontal progress bars */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-2 py-1 rounded-lg border-[1.5px] border-black ">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/emoticons/smily.svg"
                    height={18}
                    width={18}
                    alt=""
                  />
                  <p className=" text-sm">Very Positive</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[90%] h-1 bg-green-600 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/emoticons/smily2.svg"
                    height={18}
                    width={18}
                    alt=""
                  />
                  <p className=" text-sm">Satisifed</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[75%] h-1 bg-lime-400 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/emoticons/dissatisfied.svg"
                    height={18}
                    width={18}
                    alt=""
                  />
                  <p className=" text-sm">Dissatisifed</p>
                </div>
                <div className="h-1 rounded-full w-1/2 bg-zinc-200">
                  <div className="w-[20%] h-1 bg-yellow-400 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-1 rounded-lg">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/emoticons/unhappy.svg"
                    height={18}
                    width={18}
                    alt=""
                  />
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
        {/* top right */}
        <div className="flex justify-center max-w-3xl w-full h-full px-2">
          <div className="flex flex-col h-full w-full bg-white border-[1px] border-border-color rounded-lg shadow-custom px-3 sm:px-5 py-4">
            <p className=" text-lg my-2">Profile</p>
            {/* Bio */}
            <p className=" text-sm">🙏 Embracing Growth & Wellness...</p>
            <p className=" text-sm">
              Hello there! I'm Bhaumik Kore, and I'm on a journey of
              self-discovery and personal growth. This platform feels like a
              warm embrace for my soul, a place where I can connect, learn, and
              share experiences with like-minded individuals.
            </p>
            {/* Interests */}
            <p className=" text-lg my-2">Interests</p>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-1 sm:gap-2 lg:gap-5">
              <div className="flex flex-col gap-1 sm:w-1/2">
                {Interests.left.map(({ genre, rating }) => {
                  let arr = [];
                  for (let index = 0; index < rating; index++) {
                    arr.push(
                      <div className=" bg-red-500 rounded-md h-5 w-5"></div>
                    );
                  }
                  for (let index = 0; index < 5 - rating; index++) {
                    arr.push(
                      <div className=" bg-gray-100 rounded-md h-5 w-5"></div>
                    );
                  }
                  return (
                    <div className="flex justify-between items-center">
                      <p>{genre}</p>
                      <div className="flex gap-1">{arr}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/2">
                {Interests.right.map(({ genre, rating }) => {
                  let arr = [];
                  for (let index = 0; index < rating; index++) {
                    arr.push(
                      <div className=" bg-red-500 rounded-md h-5 w-5"></div>
                    );
                  }
                  for (let index = 0; index < 5 - rating; index++) {
                    arr.push(
                      <div className=" bg-gray-100 rounded-md h-5 w-5"></div>
                    );
                  }
                  return (
                    <div className="flex justify-between items-center">
                      <p>{genre}</p>
                      <div className="flex gap-1">{arr}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Highlights */}
            <p className=" text-lg my-2">Highlights</p>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-1 sm:gap-2 lg:gap-5">
              <div className="flex flex-col gap-1 sm:w-1/2">
                {Highlights.left.map((eachHighlight) => (
                  <div className="flex items-center gap-1">
                    <Image src="/arrow.svg" height={20} width={20} alt="" />
                    <p className=" text-blue-500">{eachHighlight}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 sm:w-1/2">
                {Highlights.right.map((eachHighlight) => (
                  <div className="flex items-center gap-1">
                    <Image src="/arrow.svg" height={20} width={20} alt="" />
                    <p className=" text-blue-500">{eachHighlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
