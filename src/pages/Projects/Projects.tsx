import SEO from "../../components/SEO/SEO";
import TextImage from "../../components/TextImage/TextImage";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
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

      {/* Parte superior con TextImage */}
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

      {/* Lista de proyectos debajo del TextImage */}
      <div className={styles.projectList}>
        <article className={styles.projectCard}>
          <h2>Volture Dynamics</h2>
          <p>
            A custom single-board computer project that serves as a NAS, gaming
            console, and more.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/YossefErrazik/volture-dynamics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <h2>Portfolio Website</h2>
          <p>
            The official portfolio site showcasing my work and skills in web
            development.
          </p>
          <div className={styles.links}>
            <a
              href="https://yosseferrazik.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <h2>Network Security Toolkit</h2>
          <p>
            A set of scripts and tools to secure and monitor network traffic.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/YossefErrazik/network-toolkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
