import React from "react";
import styles from "./Education.module.css";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <section className={styles.education} id="education">
      <Fade top>
        <h1>Educação</h1>
        <h4>
          Formação <span>&</span> Certificados
        </h4>
      </Fade>
      <div className={`container ${styles.formation}`}>
        <Fade left>
          <div className={`${styles.contentBox} ${styles.boxShadowUni}`}>
            <h2 className={`${styles.uniritterBox} ${styles.uniritterBox}`}>
              Unisinos
            </h2>
            <h4>Análise e desenvolvimento de sistemas</h4>
            <div className={`splitter ${styles.splitterUniritter}`}></div>
            <h5>2023 - Atualmente (Terceiro semestre)</h5>
          </div>
        </Fade>

        <Fade right>
          <div className={`${styles.contentBox} ${styles.boxShadowQi}`}>
            <h2 className={styles.QIBox}>QI escola técnica</h2>
            <h4>Técnico em informática</h4>
            <div className={`splitter ${styles.splitterQI}`}></div>
            <h5>Trancado</h5>
          </div>
        </Fade>
      </div>

      <h1>Certificados</h1>

      <div className={`${styles.certified} container-alternative`}>
        <Fade left>
          <a
            href="https://www.origamid.com/certificate/722dd8f9/"
            target="_blank"
          >
            <div class={styles.certifiedBox}>
              <h2>Origamid</h2>
              <h4>
                HTML <span>&</span> CSS
              </h4>
              <div className={`splitter ${styles.HTMLSplitter}`}></div>
              <div className={styles.informationSplitter}>
                <h5 className={styles.certifiedWorkload}>Carga - 46H</h5>
                <h5 className={styles.certifiedYear}>2021</h5>
              </div>
            </div>
          </a>
        </Fade>

        <Fade bottom>
          <a
            href="https://www.origamid.com/certificate/a64c4180/"
            target="_blank"
          >
            <div class={`${styles.certifiedBox} ${styles.cbTwo}`}>
              <h2>Origamid</h2>
              <h4>JavaScript ES6</h4>
              <div className={`splitter ${styles.jsSplitter}`}></div>
              <div className={styles.informationSplitter}>
                <h5 className={styles.certifiedWorkload}>Carga - 74H</h5>
                <h5 className={styles.certifiedYear}>2021</h5>
              </div>
            </div>
          </a>
        </Fade>

        <Fade right>
          <a
            href="https://www.origamid.com/certificate/b3aae39f/"
            target="_blank"
          >
            <div class={`${styles.certifiedBox} ${styles.cbThree}`}>
              <h2>Origamid</h2>
              <h4>React</h4>
              <div class={`splitter ${styles.reactSplitter}`}></div>
              <div className={styles.informationSplitter}>
                <h5 className={styles.certifiedWorkload}>Carga - 36H</h5>
                <h5 className={styles.certifiedYear}>2022</h5>
              </div>
            </div>
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Education;
