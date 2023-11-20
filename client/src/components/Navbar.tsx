"use client";

import Image from "next/image";
import Link from "next/link";
import SearchSVG from "../assets/search-bar.svg";
import Avatar from "../assets/avatar.png";
import ChatMessages from "@/assets/ChatMessagesSVG";
import QuestionMark from "@/assets/QuestionMarkSVG";
import { useAuth } from "@/context/supabase-auth-provider";
import { useRef, useEffect, useState } from "react";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="w-screen bg-white ">
      <nav className="py-3 px-7 max-w-[1300px] xl:mx-auto border-b flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <h1 className=" text-xl">BeWiser</h1>
        {/* Links */}
        <div className="flex justify-between text-[15px] max-w-xs w-full">
          <Link href="/community" className="hover:text-[#109A8B] transition">
            Community
          </Link>
          <Link href="/community" className="hover:text-[#109A8B] transition">
            Something
          </Link>
          <Link href="/community" className="hover:text-[#109A8B] transition">
            Random
          </Link>
        </div>
        {/* search */}
        <div className="flex items-center text-[#7C8081] px-7 py-4 rounded-xl bg-zinc-100">
          <Image
            src={SearchSVG}
            alt="search-svg"
            color="white"
            className="mr-3"
          />
          <input
            placeholder="Search something..."
            className="outline-none text-[15px] w-64 bg-inherit"
          />
        </div>
        {/* rhs */}
        <div className="flex justify-between w-32 items-center">
          <Link href="/chat" className="hover:text-[#109A8B] transition">
            <ChatMessages />
          </Link>
          <Link href="/contact" className="hover:text-[#109A8B] transition">
            <QuestionMark />
          </Link>

          {user ? <User /> : <Link href="/login">LOGIN</Link>}
        </div>
      </nav>
    </header>
  );
}

function User() {
  const { signOut, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  //@ts-expect-error
  const username: string = user?.displayName;

  const initials = username.toUpperCase().slice(0, 2);
  // console.log(initials)

  const elementRef = useRef<HTMLDivElement>(null);

  function handler(event: any) {
    if (!elementRef.current?.contains(event.target as Element)) {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="relative border text-sm text-center rounded-full cursor-pointer"
    >
      <span
        onClick={() => setIsOpen(!isOpen)}
        // className="mt-2 text-xs text-zinc-300 block"
      >
        <Image src={Avatar} alt="avatar" className="w-10 aspect-square" />
      </span>
      {isOpen && <Dropdown setIsOpen={setIsOpen} />}
    </div>
  );
}

function Dropdown({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { signOut, user } = useAuth();
  {
    //@ts-expect-error}
    const { displayName, email, credits, subEnd } = user;

    let formattedDate: string | null = null;
    if (subEnd) {
      const date = new Date(subEnd);
      formattedDate = `${date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    const handleLogOut = async () => {
      await signOut();
      setIsOpen(false);
    };

    return (
      <div className="px-3 top-11 right-0 text-xs border rounded-lg border-zinc-200 bg-white absolute text-left py-3">
        <p>{email}</p>
        <hr className="border-inherit mt-2" />
        <p className="mt-2">{displayName}</p>
        <p className="mt-2">Credits Rem: {credits}</p>
        <button onClick={handleLogOut} className="mt-2">
          Log Out
        </button>
      </div>
    );
  }
}
