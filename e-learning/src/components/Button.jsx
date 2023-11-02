import React from "react";

export default function Button({ classes, text, type, style, onClick, icon }) {
  const alertMissingHandler = () =>
    window.alert("Add event handler to the button!");
  return (
    <button
      type={type}
      className={`btn ${classes}`}
      style={style}
      onClick={onClick ? onClick : alertMissingHandler}
    >
      <div className="d-flex">
        {icon}
        {text ? text : "Click"}
      </div>
    </button>
  );
}
