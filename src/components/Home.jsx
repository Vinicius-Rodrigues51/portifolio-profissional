import React from "react";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";
import { ReactComponent as Illustration } from "../Assets/TelaHomeAnimated.svg";

const Home = () => {
  return (
    <section className={`container ${styles.home}`} id="home">
      <Fade bottom cascade>
        <div>
          <div className={styles.hello}>
            <p>Olá, eu sou</p>
            <h3>Vinicius Rodrigues</h3>
            <h4>Desenvolvedor Front-End</h4>
            <a
              className="btn"
              href="https://www.linkedin.com/in/vinicius-rodrigues-1b2126196/"
              target="_blank"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </Fade>

      <div className={styles.illustration}>
        <Illustration />
      </div>
    </section>
  );
};

export default Home;
