"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Room() {
  const router = useRouter();
  const value = 123; // await karenge from db where 2 users ke between there is a unique id
  const handleRoomJoin = useCallback(() => {
    router.push(`/room/${value}`);
  }, [router, value]);

  return (
    <>
      <h1>Room</h1>
      <button onClick={handleRoomJoin}>GO</button>
    </>
  );
}
