import TextImage from "../../components/TextImage/TextImage";
import styles from "./About.module.css";
import {
  FaComments,
  FaBrain,
  FaArrowsAlt,
  FaHtml5,
  FaInfo,
  FaLanguage,
  FaNetworkWired,
  FaJs,
} from "react-icons/fa";

import { FaPersonChalkboard } from "react-icons/fa6";
import { BsPciCardNetwork, BsEmojiLaughingFill } from "react-icons/bs";
import { MdHardware, MdEngineering } from "react-icons/md";

import SEO from "../../components/SEO/SEO";

const Aboutme = () => {
  return (
    <section>
      <SEO
        title="😉 About me - Yossef Errazik"
        description="Welcome to my web portfolio. I'm Yossef Errazik, and I like technology."
        keywords="Yossef Errazik, desarrollo web, portafolio, tecnología"
        author="Yossef Errazik"
      />
      <TextImage
        imageFirst={false}
        title="About me"
        description={
          <div>
            <p>
              Hello! My name is <strong>Yossef Errazik</strong>{" "}
              <BsEmojiLaughingFill />.
            </p>
            <br />
            <p>
              I'm a technician in{" "}
              <strong>
                Microcomputer Systems and Networking <BsPciCardNetwork />
              </strong>
              .
            </p>
            <br />
            <p>
              While I don’t have a specific role that I particularly like, if I
              had to choose one, it would be{" "}
              <strong>
                web development <FaJs />
              </strong>{" "}
              and{" "}
              <strong>
                hardware <MdHardware />
              </strong>
              .
            </p>
            <br />
            <p>
              I chose this career because I have a great interest in{" "}
              <strong>
                technology <MdEngineering />
              </strong>{" "}
              and everything related to it. I am sure that any
              technology-related topic I explore will be interesting to me.
            </p>
          </div>
        }
        imageUrl="https://i.imgur.com/E4tWJ3K.png"
        alt="Yossef Errazik"
        more={true}
        extra={
          <div className={styles.skills}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.listContainer}>
              <ul className={styles.leftList}>
                <li>
                  <FaHtml5 /> Web development
                </li>
                <li>
                  <FaInfo /> Microsoft Office
                </li>
                <li>
                  <FaLanguage /> Multilingual
                </li>
                <li>
                  <FaNetworkWired /> Network Security
                </li>
              </ul>

              <ul className={styles.rightList}>
                <li>
                  <FaComments /> Efficient communication
                </li>
                <li>
                  <FaBrain /> Critical thinking
                </li>
                <li>
                  <FaArrowsAlt /> Adaptability
                </li>
                <li>
                  <FaPersonChalkboard /> Leadership Skills
                </li>
              </ul>
            </div>
            <br />
            <hr />
            <h1 className={styles.title}>Personal paradigm</h1>
            <img
              src="https://i.imgur.com/XcNQJ7L.png"
              alt="personal paradigm"
            />
          </div>
        }
      />
    </section>
  );
};

export default Aboutme;
