import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Ashraya Resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          <br />
          sapiente fuga, consequatur tenetur, adipisci, numquam totam delectus{" "}
          <br />
          commodi perferendis nisi ratione voluptatem. Nisi in id autem eveniet
          <br />
          deserunt velit reiciendis.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* Right side */}

      <div className="cards">
        {/* First Card */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={Heart}
            heading={"Developer"}
            detail={"HTML, CSS3, Tailwind CSS, JavaScript, ReactJS, Next/JS"}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Content Writer"}
            detail={
              "Blog Posts, Social media posts, UX writing, Article writing"
            }
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Software Tester"}
            detail={
              "Acceptance Testing, Black Box Testing, System Testing, Functional Testing, End-to-end Testing"
            }
          />
        </div>

        <div className="blur s-blur2" style={{ background: "--var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
