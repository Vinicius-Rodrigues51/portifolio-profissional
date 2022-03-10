import React from "react";
import styles from "./About.module.css";
import Fade from "react-reveal/Fade";
import { ReactComponent as Ilustration } from "../Assets/TelaDev.svg";

const About = () => {
  // FAZER O OFFSETTOP OU BOUNDINGRECT E ATIVAR DIV

  function scrollActive() {
    const sec = document.getElementById("about");
    const divSVG = document.getElementById("svgID");
    const secTop = sec.getBoundingClientRect().top;
    const halfScreen = window.innerHeight * 0.75;
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 1400;
    const response = isMobile ? "none" : "block";
    const visible = secTop - halfScreen < 0;

    if (visible) {
      // divSVG.style.display = "block";
      divSVG.style.display = response;
      divSVG.style.opacity = "1";
    }
  }

  window.addEventListener("scroll", scrollActive);

  return (
    <section className={`${styles.about} container-alternative`} id="about">
      <div className={styles.svgFrame} id="svgID">
        <Ilustration />
      </div>
      <Fade right cascade>
        <div>
          <h2>Desenvolvedor Front-End</h2>
          <div className={styles.icons}>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M82 10H14L20 78L48 86L76 78L82 10Z" fill="#E65100" />
              <path d="M48 16V79.8L70.4 73.4L75.4 16H48Z" fill="#FF6D00" />
              <path
                d="M48 50V42H65.2L63.8 65L48 70.2V61.8L56.2 59L56.8 50H48ZM65.8 34L66.4 26H48V34H65.8Z"
                fill="white"
              />
              <path
                d="M48 61.8V70.2L32.2001 65L31.4 54H39.4001L39.8 59L48 61.8ZM38.2001 34H48V26H29.8L31.2001 50H48V42H38.8L38.2001 34Z"
                fill="#EEEEEE"
              />
            </svg>

            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M82 10H14L20 78L48 86L76 78L82 10Z" fill="#0277BD" />
              <path d="M48 16V79.8L70.4 73.4L75.4 16H48Z" fill="#039BE5" />
              <path
                d="M66.2 26H48V34H57.8L57.2 42H48V50H56.8L56.2 59L48 61.8V70.2L63.8 65L65.2 42L66.2 26Z"
                fill="white"
              />
              <path
                d="M48.0001 26V34H30.2001L29.6001 26H48.0001ZM38.8001 42L39.2001 50H48.0001V42H38.8001ZM39.6001 54H31.6001L32.2001 65L48.0001 70.2V61.8L39.8001 59L39.6001 54Z"
                fill="#EEEEEE"
              />
            </svg>

            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 84V12H84V84H12Z" fill="#FFD600" />
              <path
                d="M59.076 65.894C60.46 68.142 61.964 70.296 65.15 70.296C67.826 70.296 69.23 68.966 69.23 67.126C69.23 64.924 67.778 64.142 64.834 62.86L63.22 62.172C58.562 60.196 55.464 57.72 55.464 52.49C55.464 47.67 59.154 44.002 64.92 44.002C69.026 44.002 71.976 45.424 74.104 49.148L69.076 52.362C67.97 50.386 66.774 49.608 64.92 49.608C63.028 49.608 61.83 50.802 61.83 52.362C61.83 54.29 63.03 55.07 65.8 56.264L67.414 56.952C72.904 59.29 76 61.678 76 67.046C76 72.83 71.432 76 65.3 76C59.302 76 55.896 72.99 54 69.264L59.076 65.894ZM35.904 66.058C36.916 67.87 38.454 69.264 40.666 69.264C42.782 69.264 44 68.428 44 65.178V44H50.666V66.202C50.666 72.936 46.76 76 41.056 76C35.902 76 32.182 72.508 30.666 69.264L35.904 66.058Z"
                fill="#000001"
              />
            </svg>

            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 68C22.2 68 2 59.2 2 48C2 36.8 22.2 28 48 28C73.8 28 94 36.8 94 48C94 59.2 73.8 68 48 68ZM48 32C22.8 32 6 40.2 6 48C6 55.8 22.8 64 48 64C73.2 64 90 55.8 90 48C90 40.2 73.2 32 48 32Z"
                fill="#80DEEA"
              />
              <path
                d="M30.2002 89.2C28.2002 89.2 26.6002 88.8 25.0002 87.8C15.2002 82.2001 17.8002 60.4 30.6002 38C36.6002 27.6 44.0002 18.8 51.2002 13.2C59.0002 7.20005 66.0002 5.40005 70.8002 8.20005C75.8002 11 77.6002 18 76.4002 27.8C75.2002 37 71.2002 47.8 65.2002 58.2C59.2002 68.6 51.8002 77.4 44.6002 83C39.4002 87 34.4002 89.2 30.2002 89.2ZM65.8002 10.8C62.6002 10.8 58.4002 12.6 53.8002 16.2C47.0002 21.6 40.0002 30 34.2002 40C21.6002 61.8 20.4002 80.6 27.0002 84.4C30.4002 86.4 36.0002 84.6001 42.2002 79.8C49.0002 74.4 56.0002 66 61.8002 56C67.6002 46 71.4002 35.8 72.6002 27.2C73.6002 19.2 72.4002 13.6 69.0002 11.6C68.0002 11.2 67.0002 10.8 65.8002 10.8Z"
                fill="#80DEEA"
              />
              <path
                d="M66.0001 89.2C56.0001 89.2 41.6001 77 30.8001 58C17.8001 35.6 15.2001 13.8 25.0001 8.20002C34.8001 2.60002 52.4001 15.6 65.4001 38C71.4001 48.4 75.4001 59.2 76.6001 68.4C78.0001 78.2 76.0001 85 71.0001 88C69.4001 88.8 67.8001 89.2 66.0001 89.2ZM27.0001 11.6C20.4001 15.4 21.6001 34.2 34.2001 56C46.8001 77.8 62.4001 88.2 69.0001 84.4C72.4001 82.4 73.6001 76.8 72.6001 68.8C71.4001 60.2 67.6001 50 61.8001 40C49.2001 18.2 33.6001 7.80002 27.0001 11.6Z"
                fill="#80DEEA"
              />
              <path
                d="M48 56C52.4183 56 56 52.4183 56 48C56 43.5817 52.4183 40 48 40C43.5817 40 40 43.5817 40 48C40 52.4183 43.5817 56 48 56Z"
                fill="#80DEEA"
              />
            </svg>

            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.4 44.2L51.8 11.6C50.8 10.6 49.4 10 48 10C46.6 10 45.2 10.6 44.2 11.6L37.2 18.6L45.4 26.8C46.2 26.4 47 26.2 48 26.2C51.4 26.2 54 28.8 54 32.2C54 33.2 53.8 34 53.4 34.8L61.4 42.8C62.2 42.4 63 42.2 64 42.2C67.4 42.2 70 44.8 70 48.2C70 51.6 67.4 54.2 64 54.2C60.6 54.2 58 51.6 58 48.2C58 47.2 58.2 46.4 58.6 45.6L50.6 37.6C50.4 37.6 50.2 37.8 50 37.8V58.6C52.4 59.4 54 61.6 54 64.2C54 67.6 51.4 70.2 48 70.2C44.6 70.2 42 67.6 42 64.2C42 61.6 43.6 59.4 46 58.6V37.6C43.6 36.8 42 34.6 42 32C42 31 42.2 30.2 42.6 29.4L34.4 21.2L11.6 44.2C10.6 45.2 10 46.6 10 48C10 49.4 10.6 50.8 11.6 51.8L44.2 84.4C45.2 85.4 46.6 86 48 86C49.4 86 50.8 85.4 51.8 84.4L84.4 51.8C85.4 50.8 86 49.4 86 48C86 46.6 85.4 45.2 84.4 44.2Z"
                fill="#F4511E"
              />
            </svg>
            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="74" height="74" fill="#1E1E1E" />
              <g clip-path="url(#clip0_75_98)">
                <path
                  d="M36.5 37.5C36.5 35.4224 37.3165 33.43 38.7699 31.961C40.2233 30.4919 42.1946 29.6666 44.25 29.6666C46.3054 29.6666 48.2767 30.4919 49.7301 31.961C51.1835 33.43 52 35.4224 52 37.5C52 39.5775 51.1835 41.5699 49.7301 43.039C48.2767 44.508 46.3054 45.3333 44.25 45.3333C42.1946 45.3333 40.2233 44.508 38.7699 43.039C37.3165 41.5699 36.5 39.5775 36.5 37.5Z"
                  fill="#1ABCFE"
                />
                <path
                  d="M21 53.1667C21 51.0892 21.8165 49.0967 23.2699 47.6277C24.7233 46.1587 26.6946 45.3334 28.75 45.3334H36.5V53.1667C36.5 55.2442 35.6835 57.2367 34.2301 58.7057C32.7767 60.1747 30.8054 61 28.75 61C26.6946 61 24.7233 60.1747 23.2699 58.7057C21.8165 57.2367 21 55.2442 21 53.1667V53.1667Z"
                  fill="#0ACF83"
                />
                <path
                  d="M36.5 14V29.6667H44.25C46.3054 29.6667 48.2767 28.8414 49.7301 27.3723C51.1835 25.9033 52 23.9109 52 21.8333C52 19.7558 51.1835 17.7634 49.7301 16.2943C48.2767 14.8253 46.3054 14 44.25 14H36.5Z"
                  fill="#FF7262"
                />
                <path
                  d="M21 21.8333C21 23.9109 21.8165 25.9033 23.2699 27.3723C24.7233 28.8414 26.6946 29.6667 28.75 29.6667H36.5V14H28.75C26.6946 14 24.7233 14.8253 23.2699 16.2943C21.8165 17.7634 21 19.7558 21 21.8333V21.8333Z"
                  fill="#F24E1E"
                />
                <path
                  d="M21 37.5C21 39.5775 21.8165 41.5699 23.2699 43.039C24.7233 44.508 26.6946 45.3333 28.75 45.3333H36.5V29.6666H28.75C26.6946 29.6666 24.7233 30.4919 23.2699 31.961C21.8165 33.43 21 35.4224 21 37.5V37.5Z"
                  fill="#A259FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_75_98">
                  <rect
                    width="31"
                    height="47"
                    fill="white"
                    transform="translate(21 14)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4>
            Desenvolvimento de interfaces responsivas <span>&</span> interativas
            Utilizando React.JS
          </h4>
          <div className={`splitter ${styles.splitterAbout}`}></div>
        </div>
      </Fade>
    </section>
  );
};

export default About;