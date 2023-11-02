import React, { useState, useRef, useEffect } from "react";
import { PageWrapper } from "../components/styles/PageWrapper";

// Components
import Title from "../components/utilities/Title";
import Button from "../components/utilities/Button";
import Modal from "../components/utilities/Modal";
import Card from "../components/utilities/Card";
import FormGroup from "../components/utilities/FormGroup";

// Icons

import { MdSend } from "react-icons/md";
import Footer from "../components/pages/Footer";
export default function Contact() {
  // Refs
  const nameRef = useRef();
  // Stats
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    textMessage: "",
  });

  const [message, setMessage] = useState({
    error: false,
    errorMessage: "",
    success: false,
    text: "Message sent successfully",
  });

  // Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    formValidation();
    resetFrom();
  };

  function formValidation() {
    if (contactDetails.name.length < 4) {
      setMessage({
        error: true,
        errorMessage: "Name must be at least 4 characters long.",
        success: false,
      });
      return;
    }
    if (
      !contactDetails.email.includes("@") ||
      !contactDetails.email.includes(".")
    ) {
      setMessage({
        error: true,
        errorMessage: "Email muts be valid and contain '@' and '.'",
        success: false,
      });
      return;
    }
    if (contactDetails.textMessage.length < 10) {
      setMessage({
        error: true,
        errorMessage: "Message must be at least 10 characters long.",
        success: false,
      });
      return;
    }
    setMessage({
      success: true,
      text: "Message sent successfully",
    });
  }

  function resetFrom() {
    setContactDetails({
      name: "",
      email: "",
      textMessage: "",
    });
  }
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <PageWrapper className="animate-left">
      <Title text="Contact us" />
      <form>
        <FormGroup
          label={"Name:"}
          name={"name"}
          value={contactDetails.name}
          onChange={handleInputChange}
          reference={nameRef}
        />
        <FormGroup
          label={"Email:"}
          type={"email"}
          name={"email"}
          value={contactDetails.email}
          onChange={handleInputChange}
        />

        <textarea
          name="textMessage"
          style={{
            display: "block",
            width: "100%",
            padding: 10,
            marginBottom: 15,
          }}
          placeholder="Message"
          value={contactDetails.textMessage}
          onChange={handleInputChange}
        />

        <Button
          classes={"btn-accept btn-block"}
          text="Send"
          type={"submit"}
          onClick={handleSubmit}
          icon_back={<MdSend size={20} style={{ marginLeft: 10 }} />}
        />
      </form>
      {message.error && (
        <Modal
          title="Validation error"
          text={message.errorMessage}
          cancelEvent={() => setMessage({ error: false })}
        />
      )}
      {message.success && (
        <Card
          title="Thank you"
          text={message.text}
          btnText={"Close"}
          startEvent={() => setMessage({ message: false })}
        />
      )}
      <Footer />
    </PageWrapper>
  );
}
