import React from "react";
import TextImage from "../components/TextImage";
import "../styles/component/aboutme.css";
import {
  FaComments,
  FaBrain,
  FaArrowsAlt,
  FaHtml5,
  FaInfo,
  FaLanguage,
  FaNetworkWired,
} from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";

const Aboutme = () => {
  return (
    <section>
      <TextImage
        imageFirst={false}
        title="About me"
        description="Hello! My name is Yossef Errazik, and I'm currently studying a a Middle Degree in Microcomputer Systems and Networking. I don't have a specific role what I like or what I do, if I had to choose something, it would be web if I had to choose something it would be web development, but if it's related to technology, I'm sure I would related to technology, be sure that I will like it or I will find it interesting. I will find it interesting."
        imageUrl="https://i.imgur.com/3osgk3e.png"
        alt="Yossef Errazik"
        more={true}
        extra={
          <div className="skills">
            <h1 className="title">Skills</h1>
            <div className="list-container">
              <ul className="left-list">
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

              <ul className="right-list">
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
          </div>
        }
      />
    </section>
  );
};

export default Aboutme;
