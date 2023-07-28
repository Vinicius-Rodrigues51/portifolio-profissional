import React from "react";
import styles from "./Projects.module.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section
      className={`container-alternative ${styles.projects}`}
      id="projects"
    >
      <Fade top cascade>
        <div>
          <h1>Projetos</h1>
          <h4>
            Projetos pessoais feitos para prática{" "}
            <span style={{ fontFamily: "Forum" }}>&</span> aprendizado.
          </h4>
        </div>
      </Fade>
      <div className={styles.projectsGrid}>
        <Fade left>
          <a href="https://movies-api-custom.netlify.app/" target="_blank">
            <div className={`${styles.projectsBox} ${styles.pbOne}`}>
              <h3>Film API</h3>
              <h5>
                Site de informação de filmes e séries. Desenvolvido consumindo a
                API do site The movie DB. Ainda em desenvolvimento.
                (Responsividade ainda não aplicada)
              </h5>
              <div className={styles.iconsProjects}>
                <svg
                  width="58"
                  height="58"
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
                  width="58"
                  height="58"
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
              </div>
            </div>
          </a>
        </Fade>

        <Fade right>
          <a href="https://instadogsvr.netlify.app" target="_blank">
            <div className={`${styles.projectsBox} ${styles.pbTwo}`}>
              <h3>InstaDogs</h3>
              <h5>
                Projeto final do curso Origamid: "Instagram" para Pets
                desenvolvido com uso de API feita com wordPress. Possibilitando
                cadastro e gerenciamento de usuários
              </h5>
              <div className={styles.iconsProjects}>
                <svg
                  width="58"
                  height="58"
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
                  width="58"
                  height="58"
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
                  width="58"
                  height="58"
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
              </div>
            </div>
          </a>
        </Fade>
      </div>

      <Fade bottom>
        <div>
          <a
            className="btn"
            href="https://github.com/Vinicius-Rodrigues51?tab=repositories"
            target="_blank"
          >
            Mais Projetos (GitHub)
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
