import React from "react";

export default function Title({ text = "Title component", classes }) {
  return <h1 className={`title ${classes}`}>{text}</h1>;
}
