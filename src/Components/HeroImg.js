import "./HeroImgStyles.css"
import IntroImg from "../assets/img2.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER</p>
          <h1>React Devoloper</h1>
        <div>
          <Link to="/project" className="btn">Project </Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg