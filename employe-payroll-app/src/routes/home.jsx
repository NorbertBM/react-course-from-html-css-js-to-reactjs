import React, { useContext } from "react";

// context

import { AuthenticationContext } from "../context/AuthenticationContext";
import LoginForm from "../components/utilities/LoginForm";
import Title from "../components/utilities/Title";
import { PageWrapper } from "../components/styles/PageWrapper";
import Footer from "../components/pages/Footer";
import Button from "../components/utilities/Button";
export default function Home() {
  const authenticator = useContext(AuthenticationContext);
  return (
    <PageWrapper className="animate-left">
      <Title text="Welcome" />
      {!authenticator.isAuthenticated ? (
        <LoginForm />
      ) : (
        <Button
          onClick={authenticator.logout}
          text="Logout"
          classes={"btn-warning btn-block"}
        />
      )}
      <Footer />
    </PageWrapper>
  );
}
