import React from "react";
import MainBanner from "./MainBanner";
import ActivityLogs from "./ActivityLogs";

function Page() {
  return (
    <section className="mt-10 mb-52">
      <MainBanner />
      <ActivityLogs />
    </section>
  );
}

export default Page;
