import React from "react";
import { PageWrapper } from "../components/styles/PageWrapper";
import Title from "../components/utilities/Title";
import styled, { keyframes } from "styled-components";
import Footer from "../components/pages/Footer";
const primaryColor = "#284ea7";
const fadeAnimation = keyframes`
  
  0%{
opacity: 0;
  }
  50%{
opacity: 1;

  }
  100%{
opacity: 0;
  }
`;
const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  /* background: red; */
  padding: 1rem;
  position: relative;
  h1 {
    /* color: #284ea7; */
    color: ${primaryColor};
  }
  ol {
    margin-top: 1rem;
    color: gray;
    li {
      margin-bottom: 1rem;
      list-style-type: disc;
      margin-left: 1.5rem;
    }
  }
  footer {
    position: absolute;
    width: 100%;
    /* color: #284ea7; */
    color: ${primaryColor};
    animation: ${fadeAnimation} 2s linear infinite;
  }
`;

export default function About() {
  return (
    <PageWrapper className="animate-left">
      <Title text="About" />
      <h3>
        Welcome to the employee payroll management App. This application is
        designed to help you manage all payrolls for your employees.
      </h3>
      <ol className="text-primary">
        <li>
          The employee payroll management app is a comprehensive solution for
          businesses of all sizes to manage their employee payroll and related
          tasks efficiently.
        </li>
        <li>
          {" "}
          The app allows employers to easily calculate and process employee
          salaries, bonuses, and other compensation, while also providing
          employees with access to their pay stubs and other important
          information.
        </li>
        <li>
          With built-in tax and compliance features, the app ensures that
          businesses stay up-to-date with the latest regulations and avoid
          costly penalties.
        </li>
      </ol>
      {/* <footer className="mt-4 text-center">
        {" "}
        <a href="#">v1.01</a>
      </footer> */}
      <Footer />
    </PageWrapper>
  );
}
