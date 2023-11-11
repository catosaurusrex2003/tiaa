"use client";
import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const onNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const onPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const totalSlots = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  const trailingDays = totalSlots - (firstDayOfMonth + daysInMonth);

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <div className="flex flex-col h-full bg-white border-[1px] border-border-color rounded-lg shadow-custom p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {currentDate.toLocaleDateString("default", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <div className="h-1 w-1 rounded-full bg-gray-400" />
          <span className=" text-sm text-gray-400">2,234 w</span>
        </div>
        <div className="flex justify-between gap-4">
          <svg
            className=" cursor-pointer"
            onClick={onPreviousMonth}
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.125 13.25L0.875 7L7.125 0.75"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className=" cursor-pointer rotate-180"
            onClick={onNextMonth}
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.125 13.25L0.875 7L7.125 0.75"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div
            key={`empty-${i}`}
            className="h-1 w-1 m-auto bg-gray-200 rounded-full"
          ></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const percentage = Math.floor(Math.random() * 101);
          const degree = percentage * 3.6;
          //   if (i + 1 == 31) {
          //     <div
          //       key={`day-${i + 1}`}
          //       className="h-8 w-8 flex justify-center items-center bg-red-500 rounded-full relative"
          //     >
          //       <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          //         {i + 1}
          //       </div>
          //     </div>;
          //   } else
          if (percentage > 90) {
            return (
              <div
                key={`day-${i + 1}`}
                className="h-8 w-8 flex justify-center items-center bg-emerald-600 rounded-full relative"
              >
                <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  {i + 1}
                </div>
              </div>
            );
          } else if (percentage < 10) {
            return (
              <div
                key={`day-${i + 1}`}
                className="h-8 w-8 flex justify-center items-center rounded-full relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  {i + 1}
                </div>
              </div>
            );
          } else
            return (
              <div
                key={`day-${i + 1}`}
                className="h-8 w-8 flex justify-center items-center rounded-full relative"
                style={{
                  background: `conic-gradient(
                    #059669 ${degree}deg, 
                    #e5e7eb ${degree}deg 360deg)`,
                }}
              >
                <div className=" h-[27px] w-[27px] rounded-full bg-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  {i + 1}
                </div>
              </div>
            );
        })}
        {Array.from({ length: trailingDays }, (_, i) => (
          <div
            key={`empty-trail-${i}`}
            className="h-1 w-1 m-auto bg-gray-200 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
