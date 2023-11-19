import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PostsProvider } from "@/context/Posts.context";
import SupabaseProvider from "@/context/supabase-provider";
import SupabaseAuthProvider from "@/context/supabase-auth-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BeWiser",
  description: "Old people app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SupabaseProvider>
      <SupabaseAuthProvider>
        <html lang="en">
          <body className={poppins.className}>
            <PostsProvider>{children}</PostsProvider>
          </body>
        </html>
      </SupabaseAuthProvider>
    </SupabaseProvider>
  );
}
