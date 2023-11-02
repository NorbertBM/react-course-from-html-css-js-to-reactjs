import React from "react";

export default function Title({ classes, text = "Title" }) {
  return <h1 className={classes}>{text}</h1>;
}
