import TextImage from "../../components/TextImage/TextImage";
import styles from "./Certificates.module.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import SEO from "../../components/SEO/SEO";

const Certificates = () => {
  return (
    <section>
      <SEO
        title="📁 Certificates - Yossef Errazik"
        description="Welcome to my web portfolio. I'm Yossef Errazik, and I like technology."
        keywords="Yossef Errazik, desarrollo web, portafolio, tecnología"
        author="Yossef Errazik"
      />

      <TextImage
        imageFirst={true}
        title="Certificates"
        description={
          <div>
            <p>
              Throughout my journey as a technician, I've earned several{" "}
              <strong>
                certificates <FaCertificate />
              </strong>{" "}
              that validate my skills and knowledge.
            </p>
            <br />
            <p>
              Here, you can find a selection of my most significant achievements
              in areas like{" "}
              <strong>
                networking <GiSkills />
              </strong>
              , system administration, and web development.
            </p>
          </div>
        }
        imageUrl="https://pngimg.com/d/certified_PNG24.png"
        alt="Certificates"
        more={true}
        extra={
          <div className={styles.certificates}>
            <h1 className={styles.title}>My Certificates</h1>
            <div className={styles.listContainer}>
              <ul className={styles.leftList}>
                <li>
                  <FaGraduationCap /> Compulsory secondary education
                </li>
              </ul>

              <ul className={styles.rightList}>
                <li>
                  <FaGraduationCap /> Technician in Microcomputer Systems and
                  Networks
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Certificates;
