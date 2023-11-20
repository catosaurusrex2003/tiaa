import data from "./postWithComments.json";

export function GET(req: Request) {
  return new Response(JSON.stringify(data));
}