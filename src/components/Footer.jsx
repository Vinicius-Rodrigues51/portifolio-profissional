import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="container">
      <h5>@2022 Vinicius Rodrigues</h5>
      <h5>Front-End Developer</h5>
      <div>
        <i class="fa-brands fa-linkedin"></i>
        <a
          href="https://www.linkedin.com/in/vinicius-rodrigues-1b2126196/"
          target="_blank"
        >
          <h5>Linkedin</h5>
        </a>
      </div>
      <div class="mt">
        <i class="fa-brands fa-github"></i>
        <a
          href="https://github.com/Vinicius-Rodrigues51?tab=repositories"
          target="_blank"
        >
          <h5>GitHub</h5>
        </a>
      </div>
      <div class="mt">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:vinicius.motta.09@hotmail.com" target="_blank">
          <h5>Email</h5>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
