import styles from "./Skills.module.css";
import SEO from "../../components/SEO/SEO";
import { TbCodeDots } from "react-icons/tb";
import { FaCss3, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import {
  SiApache,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNodedotjs,
  SiPorkbun,
  SiPython,
  SiReact,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { HiPuzzlePiece } from "react-icons/hi2";
import { LuFileJson } from "react-icons/lu";
import { WiStars } from "react-icons/wi";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h1>Tech Skills</h1>
      <SEO
        title="🦾 Skills - Yossef Errazik"
        description="Welcome to my web portfolio. I'm Yossef Errazik, and I like technology."
        keywords="Yossef Errazik, desarrollo web, portafolio, tecnología"
        author="Yossef Errazik"
      />
      <div className={styles.articleContainer}>
        <article className={styles.article}>
          <article className={styles.articleTitle}>
            <h2>Languages</h2>
            <TbCodeDots />
          </article>
          <div className={styles.iconContainer}>
            <div className={styles.iconSingleContainer}>
              <SiHtml5 /> HTML5
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiCss3 /> CSS3
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiJavascript /> Javascript
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiPython /> Python
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiTypescript /> Typescript
            </div>{" "}
          </div>
        </article>
        <article className={styles.article}>
          <article className={styles.articleTitle}>
            <h2>Tools</h2>
            <WiStars />
          </article>
          <div className={styles.iconContainer}>
            <div className={styles.iconSingleContainer}>
              <SiApache /> Apache
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiVisualstudiocode /> VSC
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiReact /> Reactjs
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiMongodb /> MongoDB
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiGithub />
              Github
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiGit />
              Git
            </div>{" "}
          </div>
        </article>
        <article className={styles.article}>
          <article className={styles.articleTitle}>
            <h2>Backend & Frontend</h2>
            <HiPuzzlePiece />
          </article>
          <div className={styles.iconContainer}>
            <div className={styles.iconSingleContainer}>
              <SiNodedotjs /> Node.js
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiExpress /> Express
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiGraphql /> GraphQL
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <LuFileJson /> REST API
            </div>{" "}
            <div className={styles.iconSingleContainer}>
              <SiMongoose /> Mongoose
            </div>{" "}
          </div>
        </article>
      </div>
    </section>
  );
};
export default Skills;
