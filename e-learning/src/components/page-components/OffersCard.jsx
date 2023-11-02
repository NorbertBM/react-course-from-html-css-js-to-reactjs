import React from "react";
import Button from "../Button";
export default function OffersCard({
  title,
  text,
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader = false,
  cardBody = true,
  cardFooter = false,
}) {
  return (
    <div className="card offer text-center" style={{ maxWidth: 400 }}>
      {cardHeader && (
        <div className="card-header bg-transparent">
          {icon_1}
          {icon_2}
          {icon_3}
        </div>
      )}

      <div className="card-body">
        {icon_1}
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
