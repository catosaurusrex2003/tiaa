import React from "react";
import Image from "next/image";
import Avatar from "../../assets/avatar.png";
import LikeSVG from "@/assets/LikeSVG";
import CommentSVG from "@/assets/CommentSVG";
import ShareSVG from "@/assets/ShareSVG";
import MailSVG from "@/assets/MailSVG";
import PostOne from "@/assets/post_1.png";
import cn from "@/lib/utils";
import Link from "next/link";
import { Post } from "@/context/Posts.context";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <div className="flex flex-col gap-2 px-4 py-4 border border-gray-200 rounded-xl">
      <Title author={post.author} date={post.createdAt} />
      <Content type="post" title={post.title} content={post.content} />
      <Options type="post" comments={post.comments} likes={post.likes} />
    </div>
  );
}

type TitleProps = {
  author: string;
  authorRole?: string;
  date: Date;
};
export function Title({ author, date }: TitleProps) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-2">
        <Image src={Avatar} alt="" className="w-10 aspect-square" />
        <div>
          <p className="flex items-center gap-2 text-sm">
            <span className="font-medium">{author}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
            <span className="text-zinc-500">17 hrs ago</span>
          </p>
          <p className="text-sm text-zinc-500">Full Stack developer</p>
        </div>
      </div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </span>
    </div>
  );
}

type ContentProps = {
  type: "post" | "comment";
  title?: string;
  content: string;
};
export function Content({ type, title, content }: ContentProps) {
  return (
    <>
      {type == "post" && <h1>{title}</h1>}
      {type == "post" && <Image src={PostOne} alt="" className="rounded-lg" />}
      <p className="text-sm text-zinc-500 mt-2">{content}</p>
    </>
  );
}

type OptionsProps = {
  type: "post" | "comment";
  comments: number;
  likes: number;
};
export function Options({ type, comments, likes }: OptionsProps) {
  return (
    <div className="flex items-center mt-2 justify-between">
      <div
        className={cn("flex gap-2 text-sm", {
          "text-zinc-700 gap-4": type == "comment",
        })}
      >
        <div
          className={cn("flex items-center gap-2  w-fit", {
            "bg-sky-100 border-sky-800  px-3 py-2 border rounded-full":
              type == "post",
          })}
        >
          <LikeSVG />
          <span>{likes}</span>
          <LikeSVG className="rotate-180" />
        </div>
        <Link
          href={`/community/${1}`}
          className={cn("flex items-center gap-2  w-fit", {
            "bg-sky-100 border-sky-800  px-3 py-2 border rounded-full":
              type == "post",
          })}
        >
          <CommentSVG />
          <span>{comments}</span>
        </Link>
        <div
          className={cn("flex items-center gap-2 w-fit", {
            "bg-sky-100 border-sky-800  px-3 py-2 border rounded-full":
              type == "post",
          })}
        >
          <ShareSVG />
          <span>Share</span>
        </div>
      </div>
      {type == "post" && (
        <div className="flex items-center gap-1 px-3 py-2 text-white bg-blue-800 border border-blue-800 rounded-full w-fit ">
          <MailSVG className="text-white" />
          <span className="text-sm font-light">Contact</span>
        </div>
      )}
    </div>
  );
}
