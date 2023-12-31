"use client";
import Search from "./SearchBar";
import UserCard from "./UserCard";
import Navbar from "@/components/Navbar";
import EachMessage from "./EachMessage";
import InputGroup from "./InputBar";
import Footer from "@/components/Footer";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/supabase-auth-provider";

// const selfUsername = "Mohammed Mehdi";
// const selfEmail = "mohdmehdi2003@gmail.com";

export default function Messages() {
  const { user } = useAuth();
  // const [selfEmail, setSelfEmail] = useState<{
  //   temp: string | undefined;
  //   final: string | undefined;
  // }>({
  //   temp: undefined,
  //   final: user?.email,
  // });
  // const [selfUsername, setSelfUsername] = useState<{
  //   temp: string | undefined;
  //   final: user?.displayName[0];
  // }>({
  //   temp: undefined,
  //   final: undefined,
  // });
  // @ts-ignore
  const selfEmail = { final: user?.email };
  // @ts-ignore
  const selfUsername = { final: user?.displayName };
  // const [selfStatus, setSelfStatus] = useState<{
  //   temp: string | undefined;
  //   final: string | undefined;
  // }>({
  //   temp: undefined,
  //   final: undefined,
  // });
  // const [selfBio, setSelfBio] = useState<{
  //   temp: string | undefined;
  //   final: string | undefined;
  // }>({
  //   temp: undefined,
  //   final: undefined,
  // });
  const [socket, setSocket] = useState<WebSocket | undefined>();
  const [usersList, setUsersList] = useState<userDataType[]>([]);
  const [messageList, setMessageList] = useState<eachMessageType[]>([]);
  const [selectedConvo, setSelectedConvo] = useState<string | undefined>(); //is selected email
  const selectedConvoRef = useRef<string>();
  const messageScrollerDiv = useRef<any>();

  useEffect(() => {
    console.log("useEffect runing");

    const newSocket = new WebSocket(
      "wss://emvq4hf0je.execute-api.ap-south-1.amazonaws.com/production"
    );

    newSocket.addEventListener("open", function (event) {
      console.log("connected");
      if (selfEmail.final && selfUsername.final) {
        newSocket.send(
          // sending update
          JSON.stringify({
            action: "updateConnectionId",
            email: selfEmail.final,
            username: selfUsername.final,
            status: "asd",
            bio: "asd",
          })
        );

        newSocket.send(
          JSON.stringify({
            action: "fetchAllUsers",
          })
        );
      }
    });

    newSocket.addEventListener("message", function (event) {
      const message: any = JSON.parse(event.data);
      // console.log("Message from server ", message);
      switch (message.event) {
        case "allUsersResponse":
          const localUsersList = message.usersList.Items.map(
            (eachUser: any) => {
              if (eachUser.email.S != selfEmail.final) {
                const rand = Math.floor(Math.random() * 16) + 5;
                return {
                  username: eachUser.username.S,
                  email: eachUser.email.S,
                  status: eachUser.status.S,
                  bio: eachUser.bio.S,
                  rand: rand,
                };
              }
            }
          );
          setUsersList(localUsersList);

        case "allMessagesResponse":
          const localMessageList: eachMessageType[] = message.messageList?.map(
            (eachMessage: any) => ({
              senderEmail: eachMessage.senderEmail.S,
              senderUsername: eachMessage.senderUsername.S,
              messageText: eachMessage.messageText.S,
              timestamp: eachMessage.timestamp.S,
              conversationId: eachMessage.conversationId.S,
            })
          );
          setMessageList(localMessageList);
          console.log(localMessageList);

        case "newPrivateMessage":
          console.log("new message came");
          const localMessage: eachMessageType = {
            senderEmail: message.message.senderEmail.S,
            senderUsername: message.message.senderUsername.S,
            messageText: message.message.messageText.S,
            timestamp: message.message.timestamp.S,
            conversationId: message.message.conversationId.S,
          };
          // if (message.message.receiverEmail.S == selfEmail.final) {
          //   setMessageList((prev) => [...prev, localMessage]);
          // } else if (message.message.senderEmail.S == selfEmail.final) {
          //   setMessageList((prev) => [...prev, localMessage]);
          // }
          console.log(message.message);
          console.log(selectedConvoRef.current);
          console.log(selfEmail.final);
          if (message.message.senderEmail.S == selectedConvoRef.current) {
            setMessageList((prev) => [...prev, localMessage]);
          }
          if (message.message.senderEmail.S == selfEmail.final) {
            setMessageList((prev) => [...prev, localMessage]);
          }
      }
    });

    setSocket(newSocket);

    return () => {
      console.log("closing socket");
      newSocket.close();
      setSocket(undefined);
    };
  }, [selfEmail.final]);

  useEffect(() => {
    console.log("selected convo is ", selectedConvo);
    if (selectedConvo && socket) {
      socket.send(
        JSON.stringify({
          action: "fetchAllMessages",
          entity1: selfEmail.final,
          entity2: selectedConvo,
        })
      );
    }
    selectedConvoRef.current = selectedConvo;
  }, [selectedConvo]);

  useEffect(() => {
    console.log("scrolling to bottom");
    // messageScrollerDiv.current?.scrollIntoView({ behavior: "smooth" });
    if (messageScrollerDiv.current) {
      messageScrollerDiv.current.scrollTop =
        messageScrollerDiv.current.scrollHeight;
    }
  }, [messageList]);

  const sendMessage = (mssg: string | undefined): boolean => {
    if (socket && mssg) {
      console.log("sending message");
      try {
        socket.send(
          JSON.stringify({
            action: "sendPrivate",
            messageText: mssg,
            receiverEmail: selectedConvoRef.current,
            receiverUsername: "", //this is redundant as it is.
            senderEmail: selfEmail.final,
            senderUsername: selfUsername.final,
          })
        );
        return true;
      } catch (error) {
        console.log("error while sending messages", error);
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      {selfEmail.final && (
        <div className="h-screen">
          <div className=" absolute top-0">
            <Navbar />
          </div>
          <div className="grid grid-cols-10 w-11/12 mx-auto h-full pt-20">
            <section className="hidden md:flex flex-col border-r-2 md:col-span-3 overflow-y-auto h-full pr-5">
              <div className="top-0 pb-2 pt-1 border-b-[1px] border-[#D8D8D8] ">
                <p className="text-base font-medium">Latest Conversations</p>
                <Search />
              </div>
              <div className="flex flex-col items-center overflow-y-auto hide-scrollbar h-full ">
                {usersList?.map((eachUser) => {
                  if (eachUser) {
                    if (eachUser.email !== selfEmail.final)
                      return (
                        <UserCard
                          selectedConvo={selectedConvo}
                          setSelectedConvo={setSelectedConvo}
                          username={eachUser.username}
                          email={eachUser.email}
                          status={eachUser.status}
                          bio={eachUser.bio}
                          rand={eachUser.rand}
                        />
                      );
                  }
                })}
              </div>
            </section>
            <section className="flex flex-col relative col-span-10 md:col-span-7 overflow-y-auto h-full">
              {selectedConvo ? (
                <>
                  {messageList && (
                    <>
                      <div
                        ref={messageScrollerDiv}
                        className="overflow-y-auto hide-scrollbar max-h-full sm:w-11/12 mb-20 mx-auto"
                      >
                        {messageList.map((eachMessage) => (
                          <EachMessage
                            selfEmail={selfEmail.final}
                            senderEmail={eachMessage.senderEmail}
                            senderUsername={eachMessage.senderUsername}
                            messageText={eachMessage.messageText}
                            timestamp={eachMessage.timestamp}
                            conversationId={eachMessage.conversationId}
                          />
                        ))}
                        {/* <div ref={messageScrollerDiv}></div> */}
                      </div>
                      <div className="bottom-0 z-10  absolute w-full flex justify-center py-2">
                        <InputGroup sendMessage={sendMessage} />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                  <p className=" text-lg font-medium">
                    Click to Start a Conversation...
                  </p>
                  <p className=" text-lg font-medium">You need serious help.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </>
    // <>
    //   {selfEmail.final ? (
    //     <div className="h-screen">
    //       <div className=" absolute top-0">
    //         <Navbar />
    //       </div>
    //       <div className="grid grid-cols-10 w-11/12 mx-auto h-full pt-20">
    //         <section className="hidden md:flex flex-col border-r-2 md:col-span-3 overflow-y-auto h-full pr-5">
    //           <div className="top-0 pb-2 pt-1 border-b-[1px] border-[#D8D8D8] ">
    //             <p className="text-base font-medium">Latest Conversations</p>
    //             <Search />
    //           </div>
    //           <div className="flex flex-col items-center overflow-y-auto hide-scrollbar h-full ">
    //             {usersList?.map((eachUser) => {
    //               if (eachUser) {
    //                 if (eachUser.email !== selfEmail.final)
    //                   return (
    //                     <UserCard
    //                       selectedConvo={selectedConvo}
    //                       setSelectedConvo={setSelectedConvo}
    //                       username={eachUser.username}
    //                       email={eachUser.email}
    //                       status={eachUser.status}
    //                       bio={eachUser.bio}
    //                     />
    //                   );
    //               }
    //             })}
    //           </div>
    //         </section>
    //         <section className="flex flex-col relative col-span-10 md:col-span-7 overflow-y-auto h-full">
    //           {selectedConvo ? (
    //             <>
    //               {messageList && (
    //                 <>
    //                   <div
    //                     ref={messageScrollerDiv}
    //                     className="overflow-y-auto hide-scrollbar max-h-full sm:w-11/12 mb-20 mx-auto"
    //                   >
    //                     {messageList.map((eachMessage) => (
    //                       <EachMessage
    //                         selfEmail={selfEmail.final}
    //                         senderEmail={eachMessage.senderEmail}
    //                         senderUsername={eachMessage.senderUsername}
    //                         messageText={eachMessage.messageText}
    //                         timestamp={eachMessage.timestamp}
    //                         conversationId={eachMessage.conversationId}
    //                       />
    //                     ))}
    //                     {/* <div ref={messageScrollerDiv}></div> */}
    //                   </div>
    //                   <div className="bottom-0 z-10  absolute w-full flex justify-center py-2">
    //                     <InputGroup sendMessage={sendMessage} />
    //                   </div>
    //                 </>
    //               )}
    //             </>
    //           ) : (
    //             <div className="flex flex-col justify-center items-center h-full">
    //               <p className=" text-lg font-medium">
    //                 Click to Start a Conversation...
    //               </p>
    //               <p className=" text-lg font-medium">You need serious help.</p>
    //             </div>
    //           )}
    //         </section>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="flex flex-col items-center my-20">
    //       <p className="">ENTER YOUR EMAIL</p>
    //       <p className="my-2">
    //         THis wont be needed in future once everything is set up.
    //       </p>
    //       <input
    //         className="rounded-lg px-3 py-2 my-1 bg-gray-200"
    //         value={selfEmail.temp}
    //         onChange={(e) =>
    //           setSelfEmail((prev) => ({ ...prev, temp: e.target.value }))
    //         }
    //         placeholder="Email"
    //       />
    //       <input
    //         className="rounded-lg px-3 py-2 my-1 bg-gray-200"
    //         value={selfUsername.temp}
    //         onChange={(e) =>
    //           setSelfUsername((prev) => ({ ...prev, temp: e.target.value }))
    //         }
    //         placeholder="Username"
    //       />
    //       <input
    //         className="rounded-lg px-3 py-2 my-1 bg-gray-200"
    //         value={selfStatus.temp}
    //         onChange={(e) =>
    //           setSelfStatus((prev) => ({ ...prev, temp: e.target.value }))
    //         }
    //         placeholder="Status"
    //       />
    //       <input
    //         className="rounded-lg px-3 py-2 my-1 bg-gray-200"
    //         value={selfBio.temp}
    //         onChange={(e) =>
    //           setSelfBio((prev) => ({ ...prev, temp: e.target.value }))
    //         }
    //         placeholder="Bio"
    //       />
    //       <button
    //         className="bg-blue-300 px-3 py-2 rounded-lg"
    //         onClick={() => {
    //           setSelfEmail((prev) => ({ ...prev, final: prev.temp }));
    //           setSelfUsername((prev) => ({ ...prev, final: prev.temp }));
    //           setSelfBio((prev) => ({ ...prev, final: prev.temp }));
    //           setSelfStatus((prev) => ({ ...prev, final: prev.temp }));
    //         }}
    //       >
    //         SET
    //       </button>
    //     </div>
    //   )}
    //   <div className="bg-blue-300">
    //     <Footer />
    //   </div>
    // </>
  );
}

// {/* <hr className="mt-7 w-screen border-b-[1px]" /> */}
