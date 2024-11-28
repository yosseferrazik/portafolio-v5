import SEO from "../../components/SEO/SEO";
import TextImage from "../../components/TextImage/TextImage";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container}>
      <SEO
        title="📂 Projects - Yossef Errazik"
        description="Discover the projects I've been working on, showcasing my skills in web development, networking, and hardware."
        keywords="Yossef Errazik, proyectos, desarrollo web, tecnología, portafolio"
        author="Yossef Errazik"
      />

      <TextImage
        imageFirst={true}
        title="Projects"
        description={
          <div>
            <p>
              Here you can find a selection of projects that demonstrate my
              skills in web development, hardware, and networking.
            </p>
          </div>
        }
        imageUrl="https://cdn-icons-png.flaticon.com/512/8297/8297314.png"
        alt="Projects"
        more={false}
      />

      <div className={styles.projectList}>
        <article className={styles.projectCard}>
          <h2>Styled Jukbox for a jam</h2>
          <p>
            A fully styled Jukebox that plays some of my favorite music groups
            and games
          </p>
          <div className={styles.links}>
            <a
              href="https://react-jukebox.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Site
            </a>{" "}
            <a
              href="https://github.com/yosseferrazik/jukebox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </article>
        <article className={styles.projectCard}>
          <img src="https://i.imgur.com/VMdMM6x.png" alt="" />
          <h2>Portfolio Website</h2>
          <p>
            The official portfolio site showcasing my work and skills in web
            development.
          </p>
          <div className={styles.links}>
            <a
              href="https://yosseferrazik.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          </div>
        </article>
        <article className={styles.projectCard}>
          <img src="https://i.imgur.com/6beOfbI.png" alt="" />
          <h2>Spanish dactylogical translator</h2>
          <p>A sign language translator made for deaf people</p>
          <div className={styles.links}>
            <a
              href="https://github.com/yosseferrazik/spanish-sign-language-translator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://traductor-dactilologico.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          </div>
        </article>{" "}
        <article className={styles.projectCard}>
          <img src="https://i.imgur.com/7GaPiRd.png" alt="" />
          <h2>CryptoKA</h2>
          <p>
            A crypto currency tracker made with Axios and Coingecko API Rest
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/yosseferrazik/cryptocurrency-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://cryptoka.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
