import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const response = await axios.post(
    "https://api.assemblyai.com/v2/realtime/token", // use account token to get a temp user token
    { expires_in: 3600 }, // can set a TTL timer in seconds.
    { headers: { authorization: process.env.NEXT_PUBLIC_AIASSEMLBY_apiKey } } // AssemblyAI API Key goes here
  );
  const { data } = response;
  console.log(data);
  console.log("response sent");
  return NextResponse.json(data);
}
