import React, { useState, useEffect } from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  const [btnClass, setBtnClass] = useState("");

  useEffect(() => {
    switch (className) {
      case "":
        setBtnClass("bg-slate-500 hover:bg-slate-600 text-white");
        break;
      case "primary":
        setBtnClass("bg-blue-500 hover:bg-blue-700 text-white");
        break;
      case "secondary":
        setBtnClass("bg-gray-500 hover:bg-gray-700 text-white");
        break;
      case "danger":
        setBtnClass("bg-red-500 hover:bg-red-700 text-white");
        break;
      case "success":
        setBtnClass("bg-green-500 hover:bg-green-600 text-white");
        break;
      default:
        setBtnClass("");
        break;
    }
  }, [className]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${btnClass} font-bold py-2 px-4 rounded shadow-md`}
    >
      {children}
    </button>
  );
}
