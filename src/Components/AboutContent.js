import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import prop2 from "../assets/mypic.jpg"



const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a React Front-end Devoloper. I create responsive secure website
          for my clients
        </p>
        <Link to="./contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
            <div className="img-stack top">
                <img src={prop2} className="img" alt="image"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
