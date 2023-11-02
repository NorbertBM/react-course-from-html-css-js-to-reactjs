import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <header className="container header pt-4">
        <h1 className="title text-center">About us</h1>
        <div className="container">
          <p>
            Welcome to our web development courses website! We offer a range of
            courses to help you learn the skills you need to build and maintain
            modern, responsive websites. Whether you're a beginner looking to
            learn the basics or an experienced developer looking to expand your
            knowledge, we have something for you.
          </p>
          <br />
          <p>
            Our courses are taught by industry experts and cover a wide range of
            topics, including HTML, CSS, JavaScript, Bootstrap, responsive web
            development, Git and GitHub, React, and Visual Studio Code. We use
            practical examples and hands-on projects to help you learn by doing,
            so you can apply your new skills right away.
          </p>
          <br />
          <p>
            Our course material is updated regularly to ensure you have access
            to the most current information and best practices in web
            development. We also offer flexible scheduling options to fit your
            busy lifestyle.
          </p>
          <br />
          <p>
            In our HTML course, you'll learn the fundamentals of HTML and how to
            use it to structure and format web content. Our CSS course will
            teach you how to style web pages and create visually appealing
            layouts. In our JavaScript course, you'll learn how to add
            interactivity to web pages and build dynamic applications.
          </p>
          <br />
          <p>
            We also offer courses on Bootstrap, a popular framework for building
            responsive websites, and Git and GitHub, essential tools for version
            control and collaboration. Our React course will teach you how to
            build efficient and scalable user interfaces, and our Visual Studio
            Code course will introduce you to this powerful code editor.
          </p>
          <br />
          <p>
            Enroll in one of our web development courses today and start
            building your web development career!
          </p>
        </div>
      </header>
      <div className="container ">
        <h4 className="subtitle">
          HTML, CSS, JavaScript, Bootstrap, and React are all important
          technologies used in web development. Here is a brief overview of
          each:
        </h4>
        <ul>
          <li>
            HTML (HyperText Markup Language): HTML is the standard markup
            language for creating web pages. It is used to structure and format
            web content, such as text, images, and videos.
          </li>
          <br />
          <li>
            CSS (Cascading Style Sheets): CSS is a stylesheet language used to
            describe the look and formatting of a document written in HTML. It
            is used to control the layout, color, font, and other visual aspects
            of web pages.
          </li>
          <br />
          <li>
            JavaScript: JavaScript is a programming language used to add
            interactivity and dynamic behavior to web pages. It is used to
            create games, form validation, and other interactive elements on
            websites.
          </li>
          <br />
          <li>
            Bootstrap: Bootstrap is a popular framework for building responsive
            websites. It includes pre-designed templates and components for
            building web pages, and it is based on HTML, CSS, and JavaScript.
          </li>
          <br />
          <li>
            React: React is a JavaScript library for building user interfaces.
            It is used to build efficient and scalable web applications and is
            known for its flexibility and performance.
          </li>
        </ul>
        <br />
        <p className="mb-4">
          These technologies are commonly used together to build modern, dynamic
          websites. HTML is used to structure the content of a web page, CSS is
          used to style and layout the content, and JavaScript is used to add
          interactivity and dynamic behavior. Bootstrap can be used to quickly
          build responsive, mobile-friendly websites, and React is often used to
          build efficient and scalable user interfaces.
        </p>
      </div>
    </>
  );
}
