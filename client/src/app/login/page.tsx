"use client";
import { useAuth } from "@/context/supabase-auth-provider";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

export default function Navbar({}: Props) {
  const { signInWithGithub, signOut, user } = useAuth();

  const handleSignInGithub = async () => {
    // console.log("Btn clicked");
    toast.loading("Just a moment while we log you in...", {
      // style: {
      //   borderRadius: "10px",
      //   // background: "#1E1E1E",
      //   background: "#000",
      //   color: "#fff",
      // },
    });
    await signInWithGithub();
  };

  const handleSignOutGithub = async () => {
    // console.log("Btn clicked");
    toast.loading("Just a moment while we log you out...", {
      // style: {
      //   borderRadius: "10px",
      //   // background: "#1E1E1E",
      //   background: "#000",
      //   color: "#fff",
      // },
    });
    await signOut();
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div>
        <h1>Login for user</h1>
        <GithubLogin handleSignInGithub={handleSignInGithub} />
      </div>
      <div>
        <h1>Login for old person</h1>
        <GithubLogin handleSignInGithub={handleSignInGithub} />
      </div>
    </div>
  );
}

function GithubLogin({
  handleSignInGithub,
}: {
  handleSignInGithub: () => void;
}) {
  return (
    <button
      onClick={handleSignInGithub}
      className="text-sm px-4 py-1 flex items-center border-zinc-700 border rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 92 92"
        fill="none"
        className="mr-1 h-7 w-7"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.7576 21C31.5265 21 20 32.4705 20 46.6323C20 57.9747 27.3731 67.5547 37.6117 70.951C38.8996 71.1753 39.3826 70.4063 39.3826 69.7335C39.3826 69.1247 39.3504 67.1062 39.3504 64.9595C32.8788 66.145 31.2045 63.3895 30.6894 61.9477C30.3996 61.2107 29.1439 58.9359 28.0492 58.3271C27.1477 57.8465 25.8598 56.661 28.017 56.629C30.0455 56.5969 31.4943 58.4873 31.9773 59.2563C34.2955 63.1332 37.9981 62.0438 39.4792 61.3709C39.7045 59.7048 40.3807 58.5834 41.1212 57.9426C35.3902 57.3018 29.4015 55.091 29.4015 45.2866C29.4015 42.4991 30.3996 40.1922 32.0417 38.398C31.7841 37.7571 30.8826 35.1298 32.2992 31.6054C32.2992 31.6054 34.4564 30.9325 39.3826 34.2327C41.4432 33.656 43.6326 33.3676 45.822 33.3676C48.0114 33.3676 50.2008 33.656 52.2614 34.2327C57.1875 30.9005 59.3447 31.6054 59.3447 31.6054C60.7614 35.1298 59.8598 37.7571 59.6023 38.398C61.2443 40.1922 62.2424 42.4671 62.2424 45.2866C62.2424 55.1231 56.2216 57.3018 50.4905 57.9426C51.4242 58.7436 52.2292 60.2816 52.2292 62.6846C52.2292 66.1129 52.197 68.8684 52.197 69.7335C52.197 70.4063 52.6799 71.2074 53.9678 70.951C64.142 67.5547 71.5151 57.9426 71.5151 46.6323C71.5151 32.4705 59.9886 21 45.7576 21Z"
          fill="currentColor"
        />
      </svg>
      <p>Github</p>
    </button>
  );
}

function Signout({ handleSignOutGithub }: { handleSignOutGithub: () => void }) {
  return (
    <button
      onClick={handleSignOutGithub}
      className="text-sm px-4 py-1 flex items-center border-zinc-700 border rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 92 92"
        fill="none"
        className="mr-1 h-7 w-7"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.7576 21C31.5265 21 20 32.4705 20 46.6323C20 57.9747 27.3731 67.5547 37.6117 70.951C38.8996 71.1753 39.3826 70.4063 39.3826 69.7335C39.3826 69.1247 39.3504 67.1062 39.3504 64.9595C32.8788 66.145 31.2045 63.3895 30.6894 61.9477C30.3996 61.2107 29.1439 58.9359 28.0492 58.3271C27.1477 57.8465 25.8598 56.661 28.017 56.629C30.0455 56.5969 31.4943 58.4873 31.9773 59.2563C34.2955 63.1332 37.9981 62.0438 39.4792 61.3709C39.7045 59.7048 40.3807 58.5834 41.1212 57.9426C35.3902 57.3018 29.4015 55.091 29.4015 45.2866C29.4015 42.4991 30.3996 40.1922 32.0417 38.398C31.7841 37.7571 30.8826 35.1298 32.2992 31.6054C32.2992 31.6054 34.4564 30.9325 39.3826 34.2327C41.4432 33.656 43.6326 33.3676 45.822 33.3676C48.0114 33.3676 50.2008 33.656 52.2614 34.2327C57.1875 30.9005 59.3447 31.6054 59.3447 31.6054C60.7614 35.1298 59.8598 37.7571 59.6023 38.398C61.2443 40.1922 62.2424 42.4671 62.2424 45.2866C62.2424 55.1231 56.2216 57.3018 50.4905 57.9426C51.4242 58.7436 52.2292 60.2816 52.2292 62.6846C52.2292 66.1129 52.197 68.8684 52.197 69.7335C52.197 70.4063 52.6799 71.2074 53.9678 70.951C64.142 67.5547 71.5151 57.9426 71.5151 46.6323C71.5151 32.4705 59.9886 21 45.7576 21Z"
          fill="currentColor"
        />
      </svg>
      <p>signout</p>
    </button>
  );
}

function Dropdown({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { signOut, user } = useAuth();
  //@ts-expect-error
  const { username, email, isPlusUser, subEnd } = user;

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
    <div className="px-3 top-9 text-xs border rounded border-zinc-800 bg-black absolute text-left py-3">
      <p>{email}</p>
      <hr className="border-inherit mt-2" />
      <p className="mt-2">{username}</p>
      {isPlusUser && <p className="mt-2">Sub Exp: {formattedDate}</p>}
      <button onClick={handleLogOut} className="mt-2">
        Log Out
      </button>
    </div>
  );
}
