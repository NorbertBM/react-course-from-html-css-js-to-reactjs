import React from "react";

export default function Button({ children, classes, onClick }) {
  return (
    <button
      className={`text-white font-bold py-1 px-2 rounded w-full xl:w-auto flex items-center justify-center ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
