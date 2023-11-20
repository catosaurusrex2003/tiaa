import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase-client";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("dfsdsfsd",session);
  return (
    <main>
      <Navbar />
      {/* <Contact /> */}
    </main>
  );
}
