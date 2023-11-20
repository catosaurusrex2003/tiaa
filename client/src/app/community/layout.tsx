import HeartSVG from "@/assets/HeartSVG";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import Avatar from "../../assets/avatar.png";
import Rightbar from "@/components/ui/Rightbar";
import CreatePost from "@/components/ui/CreatePost";
import { AiBeautifyCommentContextProvider } from "@/context/Ai.beautifyComment.context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AiBeautifyCommentContextProvider>
        <Navbar />
        <div className="flex h-[calc(100vh-80px)] max-w-[1300px] xl:mx-auto overflow-scroll">
          <Sidebar />
          {children}
          <Rightbar />
        </div>
        <CreatePost />
      </AiBeautifyCommentContextProvider>
    </main>
  );
}
