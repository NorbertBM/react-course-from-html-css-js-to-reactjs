import React, { useRef, useEffect } from "react";

export default function UseRefEx() {
  const inputRef = useRef(null);

  const focus = () => {
    console.log("focus");
    inputRef.current.focus();
  };
  useEffect(() => inputRef.current.focus(), []);
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="title">UseRefEx</h1>
      <div className="form-group">
        <input type="text" ref={inputRef} />
      </div>
      <button className="btn" onClick={focus}>
        login
      </button>
    </div>
  );
}
