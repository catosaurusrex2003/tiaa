import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const requestUrl: URL = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    console.log("Hello world");

    if (code) {
      // console.log(code);
      const supabase = createRouteHandlerClient({ cookies });
      await supabase.auth.exchangeCodeForSession(code);
      // await supabase.auth.refreshSession();
    }

    // URL to redirect to after sign in process completes
    // return NextResponse.redirect(`${requestUrl.origin}`);
    return NextResponse.redirect("http://localhost:3000/community");
  } catch (e: any) {
    console.log(e);
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
