import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../Assets/ViniciusR.svg";

const Header = () => {
  function activeMenu() {
    const nav = document.getElementById("nav");
    const menu = document.querySelector(".menuMobile");
    nav.classList.toggle("active");
    menu.classList.toggle("active");
  }

  return (
    <header>
      <div class="header container">
        <div class="logo">
          <Logo />
        </div>
        <div onClick={activeMenu} class="mobile menuMobile">
          <div class="burguer"></div>
          {/* <div></div>
          <div></div> */}
        </div>
        <nav>
          <ul id="nav">
            <a href="#home">
              <li class="zero">Home</li>
            </a>
            <a href="#about">
              <li class="one">Sobre</li>
            </a>
            <a href="#education">
              <li class="two">Educação</li>
            </a>
            <a href="#projects">
              <li class="three">Projetos</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
