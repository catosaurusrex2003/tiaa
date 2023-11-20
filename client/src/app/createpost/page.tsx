"use client";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
type Post = {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  createdAt: Date;
  likes: number;
  comments: number;
  imageUrl: string; //newwwwwww
};

const classname = " border-2 py-1 px-2 w-3/4 rounded-sm";
const boxClassname =
  "border-[1px] border-border-color rounded-lg shadow-custom bg-white";

function Page() {
  const [postData, setPostData] = useState<Post>({
    id: uuidv4(),
    title: "",
    author: "",
    content: "",
    category: "",
    createdAt: new Date(),
    likes: 0,
    comments: 0,
    imageUrl: "",
  });
  const [file, setFile] = useState<File | undefined>();
  const [uploading, setUploading] = useState(false);

  const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_MEHDI_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_MEHDI_SUPABASE_ANON_KEY as string
  );

  const handleInputValue = (name: string, value: any) => {
    // @ts-ignore
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const imageUrl = await uploadImage();
  };

  const uploadImage = async () => {
    // returns a string
    if (!file) return "";
    const uniqueId = uuidv4();
    const { data, error } = await supabaseClient.storage
      .from("tiaa")
      .upload(`public/${uniqueId}`, file, {
        upsert: true,
      });
    if (error) {
      console.log(error);
      return "";
    } else {
      const { data } = supabaseClient.storage
        .from("tiaa")
        .getPublicUrl(`public/${uniqueId}`);
      console.log(data.publicUrl);
      return data.publicUrl;
    }
  };

  return (
    <div className="flex  flex-col items-center justify-center">
      <div
        className={`flex flex-col px-7 py-5 mt-10 gap-5 w-3/4 ${boxClassname}`}
      >
        <span className="text-xl font-semibold  text-center">Create Post</span>
        <div className={`flex flex-col items-start justify-evenly`}>
          <div className="flex items-center gap-2">
            <span className=" text-lg">Title</span>
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
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-sm hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                Put sensible title to make your posts reach people.
              </div>
            </div>
          </div>
          <input
            className={`${classname}`}
            placeholder="eg: First time over at my freinds."
          />
        </div>
        <div className={`flex flex-col items-start justify-evenly`}>
          <div className="flex items-center gap-2">
            <span className=" text-lg">Content</span>
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
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-sm hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                Describe your situation and what advice you need.
              </div>
            </div>
          </div>
          <textarea
            className={`${classname}`}
            placeholder="eg: I just got Creampied !!!!!"
          />
        </div>
        <div className={`flex flex-col items-start justify-evenly`}>
          <div className="flex items-center gap-2">
            <span className=" text-lg">Category</span>
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
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-sm hidden opacity-0 group-hover:opacity-100 bg-white px-4 py-2 border border-gray-300 rounded shadow group-hover:block transition-opacity duration-500 ease-in-out w-40 z-20">
                Put sensible title to make your posts reach people.
              </div>
            </div>
          </div>
        </div>
        <select
          className="bg-gray-100 px-3 py-2 w-3/4 rounded-sm border-[1px] border-gray-200 text-sm"
          id="myDropdown"
          name="options"
        >
          <option value="option1">HealthCare</option>
          <option value="option2">Technology</option>
          <option value="option3">Finance</option>
          <option value="option4">Retail & Sales</option>
        </select>
        <div className="border relative border-slate-400 rounded-lg border-dashed h-48 w-96">
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              setFile(e.target.files?.[0]);
            }}
            className="opacity-0 absolute w-full z-10 h-full"
          ></input>
          <div className="flex gap-2 w-full flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.58301 16.6667C4.24967 16.6667 3.95801 16.5417 3.70801 16.2917C3.45801 16.0417 3.33301 15.75 3.33301 15.4167V13.0625C3.33301 12.8855 3.39325 12.737 3.51374 12.6172C3.63424 12.4974 3.78354 12.4375 3.96165 12.4375C4.13978 12.4375 4.28787 12.4974 4.40592 12.6172C4.52398 12.737 4.58301 12.8855 4.58301 13.0625V15.4167H15.4163V13.0625C15.4163 12.8855 15.4766 12.737 15.5971 12.6172C15.7176 12.4974 15.8669 12.4375 16.045 12.4375C16.2231 12.4375 16.3712 12.4974 16.4893 12.6172C16.6073 12.737 16.6663 12.8855 16.6663 13.0625V15.4167C16.6663 15.75 16.5413 16.0417 16.2913 16.2917C16.0413 16.5417 15.7497 16.6667 15.4163 16.6667H4.58301ZM9.37467 5.75004L7.31217 7.81254C7.18995 7.93754 7.04481 7.99657 6.87676 7.98962C6.7087 7.98268 6.55946 7.91671 6.42903 7.79171C6.30946 7.66671 6.24967 7.5174 6.24967 7.34379C6.24967 7.17018 6.31217 7.02087 6.43717 6.89587L9.56217 3.77087C9.63162 3.70143 9.70199 3.65282 9.77328 3.62504C9.84458 3.59726 9.92097 3.58337 10.0024 3.58337C10.0839 3.58337 10.1594 3.59726 10.2288 3.62504C10.2983 3.65282 10.3677 3.70143 10.4372 3.77087L13.583 6.91671C13.708 7.04171 13.7705 7.18754 13.7705 7.35421C13.7705 7.52087 13.7107 7.66671 13.5912 7.79171C13.4607 7.91671 13.3087 7.97921 13.1351 7.97921C12.9615 7.97921 12.8122 7.91671 12.6872 7.79171L10.6247 5.75004V12.8542C10.6247 13.0313 10.5644 13.1797 10.4439 13.2995C10.3234 13.4193 10.1741 13.4792 9.99603 13.4792C9.8179 13.4792 9.66981 13.4193 9.55176 13.2995C9.4337 13.1797 9.37467 13.0313 9.37467 12.8542V5.75004Z"
                fill="#6B7280"
                fillOpacity="0.8"
              />
            </svg>
            <p className="text">
              Drag & Drop or <span className="text-[#4282E1]">Choose</span> file
              to upload
            </p>
            <span className="text-sm text-[#6B7280]">Jpeg or Png</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input className=" h-4 w-4" type="checkbox" />
          <span className="text-sm">send me post reply notifications</span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 rounded-md"
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Page;
