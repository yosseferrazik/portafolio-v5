import { useState, useEffect } from "react";
import "../styles/component/home.css";

import { FaGithubAlt, FaDiscord, FaYoutube } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { MdMail } from "react-icons/md";

const words = [
  "manifest",
  "execute",
  "implement",
  "perform ",
  "develop",
  "carry out",
];

const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlurred(true);

      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setIsBlurred(false);
      }, 150);
    }, 2200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home">
      <div className="home-social-container">
        <h1>
          Im <span>Yossef FTW</span>,
        </h1>
        <div className="social-container">
          <FaGithubAlt
            onClick={() =>
              window.open("https://github.com/yosseferrazik", "_blank")
            }
          />{" "}
          <FaDiscord
            onClick={() =>
              window.open(
                "https://discord.com/users/898444313049042974",
                "_blank"
              )
            }
          />{" "}
          <FaYoutube
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCqkBPgMQic5Y9HfxV44qTuw",
                "_blank"
              )
            }
          />{" "}
          <MdMail
            onClick={() =>
              window.open("mailto:yosseferrazik@gmail.com", "_blank")
            }
          />
        </div>
      </div>
      <hr />
      <h3>
        And I{" "}
        <span className={`blur-transition blur-${blur}`}>
          <span className={`spin-word ${isBlurred ? "blurred" : ""}`}>
            {currentWord}
          </span>
        </span>{" "}
        ideas <FcIdea />
      </h3>
    </section>
  );
};

export default Home;
