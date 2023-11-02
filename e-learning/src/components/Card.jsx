import React from "react";
import Button from "./Button";

export default function Card({
  title,
  text,
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader = true,
  cardBody = true,
  cardFooter = true,
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
        <h3 className="card-title">{title ? title : "Card title"}</h3>
        <p className="card-text">
          {text}
          {children}
        </p>
      </div>
      {cardFooter && (
        <div className="card-footer">
          <Button
            classes={"btn-secondary"}
            text={"Start learning"}
            icon={btnIcon}
            onClick={startEvent}
          />
        </div>
      )}
    </div>
  );
}
