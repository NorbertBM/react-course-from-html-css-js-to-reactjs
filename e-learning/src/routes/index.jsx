import React from "react";

export default function index() {
  return (
    <div className="container">
      <h1 className="title">Welcome to eLearning</h1>{" "}
      <h3 className="subtitle">Click on home or...</h3>
      <p>
        Check out{" "}
        <a
          href="https://norbertbm.com"
          target={"_blank"}
          className="text-primary"
        >
          www.norbertbm.com
        </a>
        for more projects and tutorials
      </p>
    </div>
  );
}
