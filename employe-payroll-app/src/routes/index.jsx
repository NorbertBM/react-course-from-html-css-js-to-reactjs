import React from "react";
import Title from "../components/utilities/Title";
import { PageWrapper } from "../components/styles/PageWrapper";
export default function Index() {
  return (
    // <div className="container animate-left text-center">
    <PageWrapper className="animate-left">
      <Title text="Welcome to " />
      <h3 className="subtitle ">Employee payroll</h3>
      <p>
        Check out <br />
        <a
          href="https://norbertbm.com"
          target="_blank"
          className="text-primary mr-1"
        >
          {" "}
          www.norbertbm.com
        </a>
        for more projects and tutorials
      </p>
    </PageWrapper>
  );
}
