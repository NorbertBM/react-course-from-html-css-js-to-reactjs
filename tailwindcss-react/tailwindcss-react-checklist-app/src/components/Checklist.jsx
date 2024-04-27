import React from "react";
import ChecklistItem from "./ChecklistItem";
import Loading from "../utility/components/Loading";

export default function Checklist({ checklist, handleToggleCompleted }) {
  return (
    <ul style={{ height: "600px", overflowY: "scroll" }} className="px-1">
      {/* <li>item 1</li> */}
      {!checklist.length <= 0 ? (
        checklist.map((item, index) => (
          <ChecklistItem
            key={index}
            item={item}
            index={index + 1}
            onToggleCompleted={handleToggleCompleted}
          />
        ))
      ) : (
        <Loading />
      )}
      {/* Show Loading if no list*/}
    </ul>
  );
}
