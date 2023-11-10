import Search from "@/components/Search";
import ChatSmall from "./ChatSmall";
import Navbar from "@/components/Navbar";
import Chat from "./Chat";
import InputGroup from "./InputGroup";
import Footer from "@/components/Footer";

export default function Messages() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10">
        <section className="ml-24 border-r-2 col-span-3 h-screen overflow-y-auto">
          <h6 className="text-base font-medium mt-9">Latest Conversations</h6>
          <Search />
          <hr className="m-2 w-56 border-b-[1px]"></hr>
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
          <ChatSmall />
        </section>
        <section className="col-span-7 h-screen overflow-y-auto overflow-x-hidden">
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 ml-20 w-3/5 border-b-[1px]" />
          <Chat />
          <hr className="mt-7 w-screen border-b-[1px]" />
          <InputGroup />
        </section>
      </div>
      <Footer />
    </>
  );
}
