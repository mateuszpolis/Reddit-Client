import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <h5>
        made by:{" "}
        <a href="https://www.linkedin.com/in/mateusz-polis-65618223a/">
          Mateusz Polis <i className="fa-brands fa-linkedin"></i>
        </a>{" "}
        <a href="mailto:polismateusz@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>{" "}
        <a href="https://github.com/mateuszpolis/Reddit-Client" target="blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </h5>
    </footer>
  );
};
