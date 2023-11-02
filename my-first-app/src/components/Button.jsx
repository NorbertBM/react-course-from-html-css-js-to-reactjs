import React from "react";

function Button({ classes, text = "Button", icon, handleEvent }) {
  // function handleEvent(e) {
  //   // console.log("click");
  //   console.log(e);
  // }

  return (
    <button className={`btn ${classes}`} onClick={handleEvent}>
      {icon}
      {text}
    </button>
  );
}
export default Button;
