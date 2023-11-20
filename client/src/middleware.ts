import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const protectedRoutes = ["/", "/protected"];
  const supabase = createMiddlewareClient({ req, res });
  const data = await supabase.auth.getSession();
  // console.log(data.data.session?.user.id);
  return res;
}
