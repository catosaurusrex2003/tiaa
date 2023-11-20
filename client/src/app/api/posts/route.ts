import data from "./postsData.json";

export function GET(req: Request) {
  return new Response(JSON.stringify(data));
}
