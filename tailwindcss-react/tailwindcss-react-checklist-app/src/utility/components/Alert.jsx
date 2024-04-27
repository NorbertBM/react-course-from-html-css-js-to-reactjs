import React from "react";

export default function Alert({ type, message }) {
  let alertClasses = "bg-slate-500 border-l-4 ";
  let alertTitle = "text-white";

  switch (type) {
    case "success":
      alertClasses += "border-green-500";
      alertTitle = "text-green-500";
      break;
    case "warning":
      alertClasses += "border-yellow-500";
      alertTitle = "text-yellow-500";
      break;
    case "error":
      alertClasses += "border-red-500";
      alertTitle = "text-red-500";
      break;
    default:
      alertClasses += "border-blue-500";
      alertTitle = "text-blue-500";
      break;
  }

  return (
    <div className={alertClasses + " my-5"}>
      <div className="p-4">
        <div
          className={`font-bold ${alertTitle} px-3 py-1 bg-slate-800 rounded-md w-fill`}
        >
          {type}
        </div>
        <div className="text-white">{message}</div>
      </div>
    </div>
  );
}
