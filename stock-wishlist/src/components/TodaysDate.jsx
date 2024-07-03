import React from "react";

export default function TodaysDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className="text-xl font-bold my-3 px-2 py-1 rounded-md bg-gray-100 text-slate-900">
      {formattedDate}
    </div>
  );
}
