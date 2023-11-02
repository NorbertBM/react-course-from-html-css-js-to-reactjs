import React from "react";

export default function Header({ children, headerText = "Header" }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #fff",
      }}
    >
      <h2>{headerText}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cumque
        explicabo voluptates minima. In quia modi assumenda rem cumque,
        dignissimos exercitationem optio vel vitae cupiditate rerum sed dolores
        consequatur maiores!
      </p>
      {children}
    </header>
  );
}
