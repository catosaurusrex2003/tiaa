import Search from "./SearchBar";
import UserCard from "./UserCard";
import Navbar from "@/components/Navbar";
import EachMessage from "./EachMessage";
import InputGroup from "./InputBar";
import Footer from "@/components/Footer";
import "./chat.css";

export default function Messages() {
  return (
    <>
      <div className="h-screen">
        <div className=" absolute top-0">
          <Navbar />
        </div>
        <div className="grid grid-cols-10 w-11/12 mx-auto h-full pt-16">
          <section className="hidden md:flex flex-col border-r-2 md:col-span-3 overflow-y-auto h-full pr-5">
            <div className="top-0 pb-2 pt-1 border-b-[1px] border-[#D8D8D8] ">
              <p className="text-base font-medium">Latest Conversations</p>
              <Search />
            </div>
            <div className="flex flex-col items-center overflow-y-auto hide-scrollbar h-full ">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </section>
          <section className="flex flex-col col-span-10 md:col-span-7 overflow-y-auto h-full ">
            <div className="overflow-y-auto hide-scrollbar max-h-full sm:w-11/12 mx-auto">
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
              <EachMessage />
            </div>
            <div className="bottom-0 flex justify-center py-2">
              <InputGroup />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-blue-300">
        <Footer />
      </div>
    </>
  );
}

// {/* <hr className="mt-7 w-screen border-b-[1px]" /> */}
