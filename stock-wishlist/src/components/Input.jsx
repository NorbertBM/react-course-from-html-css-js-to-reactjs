import React from "react";

export default function Input({ value, onChange, placeholder, ref }) {
  return (
    <input
      className="bg-gray-500 hover:bg-gray-300 focus:bg-gray-100 text-slate-700 rounded-md mr-2 px-2 py-1"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
    />
  );
}
