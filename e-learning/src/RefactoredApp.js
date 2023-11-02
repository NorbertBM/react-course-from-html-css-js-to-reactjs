import "./App.css";
// Hooks
import { useState, useEffect, useRef, useContext } from "react";
// Context
import { ThemeContext } from "./context/themeContext";
// Components
import Title from "./components/Title";
import Header from "./components/Header";

import Button from "./components/Button";
import Modal from "./components/Modal";
// Icons

import { BsArrowUpCircleFill } from "react-icons/bs";

// Components

// Forms

import LoginForm from "./components/page-components/LoginForm";

// Data
import TestimonialsList from "./components/Lists/TestimonialsList";
import RegistrationForm from "./components/page-components/RegistrationForm";
import Categories from "./components/sections/Categories";
import Offers from "./components/sections/Offers";

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

  // Got to top Arrow context

  const { theme } = useContext(ThemeContext);

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
        <Header
          login={login}
          handleStartLearningEvent={handleStartLearningEvent}
          handleScrollToOffers={handleScrollToOffers}
        ></Header>
        {/* Main */}
        <main>
          {/* CATEGORIES */}

          <Categories
            login={login}
            handleStartLearningEvent={handleStartLearningEvent}
          />
          {/* OFFERS */}

          <Offers
            offersRef={offersRef}
            showOffers={showOffers}
            handleShowOffers={handleShowOffers}
          />
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
        <BsArrowUpCircleFill
          className="goToTopArrow"
          onClick={handleGoToTop}
          color={theme === "dark" && "#ff9800"}
        />
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
    </>
  );
}
export default App;
