import "./WorkCardStyle.css";

import React from "react";
import pro1 from "../assets/trippy.png";
import pro2 from "../assets/port.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
       <center>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image"></img>
          <h2 className="pro-title">Tour and Travel Projects</h2>
          <div className="pro-details">
            <p>
            Trippy is owned and managed by Trippy.In.Pvt.Ltd., a leading brand in
        web designing services and e-commarce soluation.Trippy is counted for
        its expertise in web soluation and its top ranking business portals. Our
        invinciable expertise and experiencehas raised our spritsto reach
        aheadfrom our client's expectation.
            </p>
            <div className="pro-btns">
              <a href="https://trippy1998.netlify.app" className="btn">
                View
              </a>
              <a href="https://github.com/code-with-ayon/Tour" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="image"></img>
          <h2 className="pro-title">Portfolio</h2>
          <div className="pro-details">
            <p>
            A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.
            </p>
           
           <div className="pro-btnss">
              <a href="https://github.com/code-with-ayon/my-app" className="btn">
                Source
              </a>
            </div>
          
          </div>
        </div>
      </div>
        </center> 
    </div>
  );
};

export default WorkCard;
