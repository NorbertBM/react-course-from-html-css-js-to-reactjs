import "./App.css";
// Hooks
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Components
import Title from "./components/Title";
import Header from "./components/Header";
import headerImg from "./img/header-img.png";
import Button from "./components/Button";
import Modal from "./components/Modal";
// Icons
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaMapMarkedAlt, FaFileDownload } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
// Examples
import UseStateHookEx from "./Examples/UseStateHookEx";
import MyList from "./Examples/MyList";
import UseEffectHook from "./Examples/UseEffectHook";
import UseRefEx from "./Examples/UseRefEx";
// Components
import CategoriesCard from "./components/page-components/CategoriesCard";

import OffersCard from "./components/page-components/OffersCard";
import TestimonialCard from "./components/page-components/TestimonialCard";

// Forms

import LoginForm from "./components/page-components/LoginForm";

// Data
import TestimonialsList from "./components/Lists/TestimonialsList";
import RegistrationForm from "./components/page-components/RegistrationForm";
import ThrowError from "./Examples/ThrowError";
function App() {
  // STATES
  // Modal State
  const [showCourseModal, setShowCourseModal] = useState(false);

  // Offers State

  const [showOffers, setShowOffers] = useState(false);

  // Scroll state

  const [goToTopArrow, setGoToTopArrow] = useState(false);

  // References

  const offersRef = useRef();
  const topRef = useRef();

  // Form states

  const [forms, setForms] = useState({
    loginForm: false,
    registrationForm: false,
  });
  const [login, setLogin] = useState(false);

  // HANDLERS
  // Modal Handlers
  function handleStartLearningEvent() {
    setShowCourseModal(true);
  }
  function handleModalCancelEvent() {
    setShowCourseModal(false);
  }
  // Offers handler

  const handleShowOffers = () => {
    showOffers === false ? setShowOffers(true) : setShowOffers(false);
  };
  const handleScrollToOffers = () => {
    offersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll handler

  const handleGoToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // Form handles
  // Login form handle
  const handleShowLoginForm = () => {
    setForms({ registrationForm: false, loginForm: true });
  };
  const handleCancelLoginForm = () => {
    setForms({ ...forms, loginForm: false });
  };

  function handleLoginFormValidation() {
    setForms({ ...forms, loginForm: false });
    setShowCourseModal(false);
    setLogin(true);
  }
  // Register form

  function handleShowRegistrationForm() {
    setForms({ loginForm: false, registrationForm: true });
  }
  const handleCancelRegistrationForm = () => {
    setForms({ ...forms, registrationForm: false });
  };
  // LISTS
  // Offers List

  const offerList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Tons of content",
      text: "We have library of over 100,000 videos that will help you learn to code.",
    },
    {
      icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
      title: "Guided Course",
      text: "We guided you with series of videos that will help you learn to code.",
    },
    {
      icon_1: <FaFileDownload className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "    File from project are available for all of our courses to be    downloaded.",
    },
  ];

  const moreOffersList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Tons of content",
      text: "We have a library of over 100,000 videos that will help you  learn to code.",
    },
    {
      icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
      title: "Guided Course",
      text: "We guided you with series of videos that will help you learn to code.",
    },
    {
      icon_1: <FaFileDownload className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "    File from project are available for all of our courses to be    downloaded.",
    },
  ];

  // Scroll handle

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
  }
  // Effects

  // Scroll Effect

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, []);
  return (
    <>
      <div className="container container-lg" ref={topRef}>
        {/* Header */}
        <Header>
          <div className="header-content mb-2">
            <Title
              text="Learn to code by watching others"
              classes={"header-title fs-xxl"}
            />
            <p className="header-text mb-3">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
            <div className="header-btn">
              <Button
                classes={"btn-primary text-light"}
                type={"button"}
                text={"Try it free 30 days"}
                onClick={
                  !login
                    ? handleStartLearningEvent
                    : () => window.alert("You are logged in.")
                }
              />
              <Button
                classes={"btn-secondary"}
                type={"button"}
                text={"Learn more..."}
                onClick={handleScrollToOffers}
              />
            </div>
            <img src={headerImg} alt="header-img" className="header-img" />
          </div>
        </Header>
        {/* Main */}
        <main>
          {/* CATEGORIES */}

          <section className="categories my-4">
            <Title text="Top categories" classes={"subtitle text-center"} />
            <div className="categories-container d-flex">
              <CategoriesCard
                title={"Web Development"}
                icon_1={<AiFillHtml5 size={"4em"} className="icon html5" />}
                icon_2={<DiCss3Full size={"4em"} className="icon css3" />}
                icon_3={<SiJavascript size={"4em"} className="icon js" />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent}
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
          {/* OFFERS */}
          <section
            ref={offersRef}
            className="offers container container-md p-2"
          >
            <Title
              classes={"subtitle text-center mb-4"}
              text="Here's what you get"
            />
            <div className="offers-container">
              {/* <OffersCard
                  icon_1={<AiFillUnlock className="i" size={"2em"} />}
                  title={"Tons of content"}
                  text={
                    "We have library of over 100,000 videos that will help you learn to code."
                  }
                ></OffersCard> */}
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
              <div className="offers-container fadeIn">
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
          {/* TESTIMONIALS */}
          <section className="testimonials my-4">
            <Title
              classes={"subtitle text-center mb-4"}
              text="What our users say"
            />
            <div className="testimonials-container">
              <TestimonialsList />
              {/* <TestimonialCard /> */}
            </div>
          </section>
        </main>
      </div>
      {/* Utilities  */}
      {/* Modal */}
      {showCourseModal && (
        <Modal
          title={"Access denied"}
          text="Please login in order to access this content"
          cancelEvent={handleModalCancelEvent}
          loginEvent={!login && handleShowLoginForm}
        />
      )}
      {/* Go to Top Arrow */}
      {goToTopArrow && (
        <BsArrowUpCircleFill className="goToTopArrow" onClick={handleGoToTop} />
      )}
      {/* Forms */}

      {/* Login Form */}

      {forms.loginForm && (
        <div className="modal">
          <LoginForm
            handleCancel={handleCancelLoginForm}
            showRegister={handleShowRegistrationForm}
            loggedIn={handleLoginFormValidation}
          />
        </div>
      )}
      {/* Registration form */}
      {forms.registrationForm && (
        <div className="modal">
          <RegistrationForm
            handleCancel={handleCancelRegistrationForm}
            showLogin={handleShowLoginForm}
          />
        </div>
      )}

      {/* Examples */}
      {/* <UseStateHookEx /> */}

      {/* <MyList style={{ height: "100vh" }} /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefEx /> */}
      {/* <ThrowError /> */}
    </>
  );
}
export default App;
