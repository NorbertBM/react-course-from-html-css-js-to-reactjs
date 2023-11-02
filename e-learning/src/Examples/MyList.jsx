import React from "react";

export default function MyList() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="title">MyList</h1>
      <ul>
        {/* <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li> */}
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
          console.log(item, index);
        })}
      </ul>
    </div>
  );
}
