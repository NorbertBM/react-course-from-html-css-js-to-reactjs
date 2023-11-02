import React from "react";
// Components
import Title from "../Title";
// Page components

import CategoriesCard from "../page-components/CategoriesCard";

// Icons
import { AiFillHtml5, AiFillPlayCircle } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export default function Categories({ login, handleStartLearningEvent }) {
  return (
    <section className="categories my-4">
      <Title text="Top categories" classes={"subtitle text-center"} />
      <div className="categories-container d-flex">
        <CategoriesCard
          title={"Web Development"}
          icon_1={<AiFillHtml5 size={"4em"} className="icon html5" />}
          icon_2={<DiCss3Full size={"4em"} className="icon css3" />}
          icon_3={<SiJavascript size={"4em"} className="icon js" />}
          btnIcon={<AiFillPlayCircle size={"2em"} />}
          startLearningEvent={!login && handleStartLearningEvent}
        >
          <span className="fs-lg">Learn how to build web apps with:</span>
          <ul className="mt-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </CategoriesCard>
        <CategoriesCard></CategoriesCard>
        <CategoriesCard></CategoriesCard>
        <CategoriesCard></CategoriesCard>
      </div>
    </section>
  );
}
