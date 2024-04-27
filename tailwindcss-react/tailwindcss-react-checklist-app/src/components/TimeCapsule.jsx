import React from "react";

export default function TimeCapsule({ time, completed = false }) {
  return (
    <div
      className={`${
        !completed ? "bg-orange-200" : "bg-slate-500 text-white"
      } h-16 col-span-1 text-center font-semibold flex justify-center align-center p-1 rounded-md shadow-md`}
    >
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-sm rotate-180 md:-rotate-90 md:text-base"
      >
        {time}
      </p>
    </div>
  );
}
