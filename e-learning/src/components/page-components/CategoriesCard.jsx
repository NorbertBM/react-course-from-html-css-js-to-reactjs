import React from "react";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
export default function CategoriesCard({
  title,
  text,
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startLearningEvent,
  cardFooter = true,
  cardHeader = true,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card card-${theme}`} style={{ maxWidth: 400 }}>
      {/* <div className="card" style={{ maxWidth: 400 }}> */}
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
            onClick={startLearningEvent}
          />
        </div>
      )}
    </div>
  );
}
