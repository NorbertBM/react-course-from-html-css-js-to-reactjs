import React from "react";
import Button from "./Button";
export default function Card({
  title = "title",
  text = "text",
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader = true,
  cardBody = true,
  cardFooter = true,
  btnText,
}) {
  return (
    <div className="card" style={{ maxWidth: 400 }}>
      {cardHeader && (
        <div className="card-header">
          {icon_1}
          {icon_2}
          {icon_3}
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-text">
          {text}
          {children}
        </div>
      </div>
      {cardFooter && (
        <div className="card-footer">
          <Button classes={"btn-accept"} onClick={startEvent} text={btnText} />
        </div>
      )}
    </div>
  );
}
