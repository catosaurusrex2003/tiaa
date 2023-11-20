"use client";
import { useAuth } from "@/context/supabase-auth-provider";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <>
      {/* @ts-ignore */}
      {user?.email ? (
        <>{children}</>
      ) : (
        <div>
          <p className="text-lg text-center mt-20">Need To login to chat</p>
        </div>
      )}
    </>
  );
}

export default layout;
