import React from "react";
// Components
import Title from "../Title";
// Page components

import OffersCard from "../page-components/OffersCard";

import { offerList, moreOffersList } from "../../db/OffersList";

// Context
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Offers({ offersRef, showOffers, handleShowOffers }) {
  // Context
  const { theme } = useContext(ThemeContext);
  return (
    <section ref={offersRef} className="offers container container-md p-2">
      <Title classes={"subtitle text-center mb-4"} text="Here's what you get" />
      {/* Context */}
      <div className={`offers-container ${theme}`}>
        {/* <div className="offers-container"> */}
        {offerList.map((offer, index) => (
          <OffersCard
            key={index}
            icon_1={offer.icon_1}
            title={offer.title}
            text={offer.text}
          ></OffersCard>
        ))}
      </div>
      {showOffers && (
        <div className={`offers-container ${theme}`}>
          {/* <div className="offers-container fadeIn"> */}
          {moreOffersList.map((offer, index) => (
            <OffersCard
              key={index}
              icon_1={offer.icon_1}
              title={offer.title}
              text={offer.text}
            ></OffersCard>
          ))}
        </div>
      )}
      <a
        href="#"
        onClick={handleShowOffers}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <h4 className="text-center text-primary mt-2">
          {showOffers ? "Less" : "More..."}
        </h4>
      </a>
    </section>
  );
}
