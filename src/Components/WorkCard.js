import "./WorkCardStyle.css";

import React from "react";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image"></img>
          <h2 className="pro-title">Ecommerce Projects</h2>
          <div className="pro-details">
            <p>
              Whether you are a small business or a large company, every
              successful B2B e-commerce implementation starts with the following
              10 steps. These are based on the combined expertise and experience
              of our Project, Sales and Customer Success Managers, here at Sana
              Commerce. Read on to see exactly what makes a successful
              e-commerce project plan, and what is the best way to start your
              e-commerce website.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
