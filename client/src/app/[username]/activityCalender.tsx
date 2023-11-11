"use client";
import React from "react";
import ActivityCalendar, { Activity } from "react-activity-calendar";
import jsonData2022 from "./year2022.json";
import jsonData2023 from "./year2023.json";

const data2023: Activity[] = jsonData2023 as Activity[];
const data2022: Activity[] = jsonData2022 as Activity[];

function CustomActivityCalender() {
  return (
    <div className="flex flex-col gap-5 px-4 sm:px-7 py-5  lg:w-fit bg-white border-[1px] border-border-color rounded-lg shadow-custom">
      <ActivityCalendar
        data={data2022}
        theme={{
          light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#286d94", "#f73859"],
          //   light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
          dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
        }}
        colorScheme="light"
        hideColorLegend={true}
      />
      <ActivityCalendar
        data={data2023}
        theme={{
          light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#286d94", "#f73859"],
          dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
        }}
        colorScheme="light"
      />
    </div>
  );
}

export default CustomActivityCalender;
