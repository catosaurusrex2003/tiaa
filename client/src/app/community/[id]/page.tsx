import Comments from "@/components/Comments";
import React from "react";

type Props = {};

export default async function Page({}: Props) {
  const res = await fetch("http://localhost:3000/api/fsfs");
  const data = await res.json();
  return <Comments data={data} />;
}
