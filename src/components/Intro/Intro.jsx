import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbsup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy, I Am</span>
          <span>Ashraya KK</span>
          <span>
            Front-end developer with experience in web designing and
            development, producing Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Ashrayaa">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/ashrayakk/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/aashrayadev?igshid=YmMyMTA2M2Y=">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Glassimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Thumbsup} txt1="Web" txt2="Designer" />
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
