import React from "react";

export default function Button({
  classes,
  text = "text",
  icon_front,
  icon_back,
  onClick,
  type,
  style,
}) {
  return (
    <button
      className={`btn ${classes}`}
      type={type}
      style={style}
      onClick={onClick}
    >
      <div className="d-flex">
        {icon_front} {text} {icon_back}
      </div>
    </button>
  );
}
