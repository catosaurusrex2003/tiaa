"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const agenda = `
create me a formik page using reactjs.  use the latest version of formik and try to handle all the error
username -> the username of the person
email -> the email of the person
password -> the password of the user
age -> the age of the person
instagram handle -> instagram handle
facebook handle -> facebook handle
x handle -> twitter handle
profile-bio -> a string describing the person
interests -> should be 10 topic which needs to be typed by the person and it should have a rating which is a value out of 5
status -> boolean
`;

const classname = " border-2 py-1 px-2 rounded-sm";
const boxClassname =
  "border-[1px] border-border-color rounded-lg shadow-custom bg-white";

function Page() {
  const [isToggled, setIsToggled] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    age: 0,
    instagram: "",
    facebook: "",
    xhandle: "",
    bio: "",
    status: false,
  });
  const [Interests, setInterests] = useState<
    {
      genre: string;
      rating: number;
      id: string;
    }[]
  >([]);
  const [InterestCache, setInterestCache] = useState<string>("");

  const handleInputValue = (name: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div
        className={`flex flex-col ga items-center gap-5 w-11/12 lg:w-4/5 py-10  my-10 ${boxClassname}`}
      >
        <div className={`flex flex-col sm:flex-row justify-evenly w-full`}>
          <div className="flex flex-col items-center">
            <span>Email</span>
            <input
              type="email"
              className={`${classname}`}
              placeholder="eg: johndoe@gmail.com"
            />
          </div>
          <div className="flex flex-col items-center">
            <span>Password</span>
            <input
              type="password"
              className={`${classname}`}
              placeholder="eg: 😳"
            />
          </div>
        </div>
        <div className={`flex flex-col items-center justify-evenly`}>
          <span>Username</span>
          <input
            className={`${classname}`}
            placeholder="eg: catosaurusrex2003"
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span>Age</span>
          <input type="number" className={`${classname}`} placeholder="0" />
          <div className="flex flex-col gap-2 sm:flex-row">
            <input type="checkbox" className={`${classname}`} />
            <span>I confirm that the age is LEGIT.</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-10">
          <div className={`flex flex-col items-center justify-evenly`}>
            <div className="flex items-center gap-2">
              <span>Instagram Handle</span>
              <div className="group relative inline-block cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                  Your Instagram username.
                </div>
              </div>
            </div>
            <input className={`${classname}`} placeholder="eg: @username" />
          </div>
          <div className={`flex flex-col items-center justify-evenly`}>
            <div className="flex items-center gap-2">
              <span>Facebook Handle</span>
              <div className="group relative inline-block cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                  The Username of your facebook account
                </div>
              </div>
            </div>
            <input className={`${classname}`} placeholder="eg: /username" />
          </div>
          <div className={`flex flex-col items-center justify-evenly`}>
            <div className="flex items-center gap-2">
              <span>X Handle</span>
              <div className="group relative inline-block cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                  Your Twitter / X handle
                </div>
              </div>
            </div>
            <input className={`${classname}`} placeholder="eg: @username" />
          </div>
        </div>
        <div className={`flex flex-col items-center justify-evenly`}>
          <div className="flex items-center gap-2">
            <span>Bio</span>
            <div className="group relative inline-block cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                Something which describes you.
              </div>
            </div>
          </div>
          <textarea
            className={`${classname}`}
            placeholder="eg: Hello there! I'm Bhaumik Kore, and I'm on a journey of self-discovery and personal growth...."
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-evenly items-center">
            <div className="flex items-center gap-2">
              <span>Interests</span>
              <div className="group relative inline-block cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                  Topics In which you are Interested in
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-1`}>
              <input
                value={InterestCache}
                onChange={(e) => setInterestCache(e.target.value)}
                className={`${classname}`}
                placeholder="eg: Sci-Tech"
              />
              <button
                onClick={() => {
                  setInterests((prev) => [
                    ...prev,
                    { genre: InterestCache, id: uuidv4(), rating: 0 },
                  ]);
                  setInterestCache("");
                }}
                className="bg-blue-500 rounded-sm border-2 border-blue-500 active:bg-blue-700 text-white px-2 py-1"
              >
                Add
              </button>
            </div>
            <div className="flex w-full ">
              <div className="flex flex-col gap-1 w-full ">
                {Interests.map(({ genre, rating, id }) => {
                  let arr = [];
                  for (let index = 0; index < rating; index++) {
                    arr.push(
                      <div
                        onClick={() => {
                          setInterests((currentInterests) =>
                            currentInterests.map((interest) =>
                              interest.genre === genre
                                ? { ...interest, rating: index + 1 }
                                : interest
                            )
                          );
                        }}
                        className=" bg-red-500 rounded-md h-5 w-5 cursor-pointer hover:border-[1px] border-black"
                      ></div>
                    );
                  }
                  for (let index = 0; index < 5 - rating; index++) {
                    arr.push(
                      <div
                        onClick={() => {
                          setInterests((currentInterests) =>
                            currentInterests.map((interest) =>
                              interest.genre === genre
                                ? {
                                    ...interest,
                                    rating: interest.rating + index + 1,
                                  }
                                : interest
                            )
                          );
                        }}
                        className=" bg-gray-100 rounded-md h-5 w-5 cursor-pointer hover:border-[1px] border-black"
                      ></div>
                    );
                  }
                  return (
                    <div className="flex justify-between items-center gap-4 my-1 w-full">
                      <div className="flex justify-between w-full items-center">
                        <p>{genre}</p>
                        <div className="flex gap-1">{arr}</div>
                      </div>
                      <button
                        onClick={() =>
                          setInterests((currentInterests) =>
                            currentInterests.filter(
                              (interest) => interest.id !== id
                            )
                          )
                        }
                        className=" bg-black text-white px-3 py-1 rounded-sm"
                      >
                        Del
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span>Anonymous Account</span>
            <div className="group relative inline-block cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-52 z-20">
                Your account profile can be seen only by people who you follow.
              </div>
            </div>
          </div>
          <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              isToggled ? "bg-green-400" : ""
            }`}
            onClick={() => setIsToggled((prev) => !prev)}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                isToggled ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>
        <button className="bg-blue-500 rounded-sm border-2 border-blue-500 active:bg-blue-700 text-white px-2 py-1">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Page;
