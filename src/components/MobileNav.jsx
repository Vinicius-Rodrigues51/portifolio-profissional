import React from "react";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  return (
    <nav>
      <ul className={styles.navShow}>
        <a href="#home">
          <li className={styles.zero}>Home</li>
        </a>
        <a href="#about">
          <li className={styles.one}>Sobre</li>
        </a>
        <a href="#education">
          <li className={styles.two}>Educação</li>
        </a>
        <a href="#projects">
          <li className={styles.three}>Projetos</li>
        </a>
      </ul>
    </nav>
  );
};

export default MobileNav;
