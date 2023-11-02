import React from "react";

export default function Title({ text = "Title", classes }) {
  return <h1 className={`title text-center ${classes}`}>{text}</h1>;
}
