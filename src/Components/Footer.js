import "./FooterStyle.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <div className="location">
         <h4><FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            Singur, Apurbapur, India </h4>
      <div className="phone">
      <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />8420781949</h4>
      </div>
      <div className="email">
      <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />ayonch7@gmail.com</h4>
      </div>
        </div>
      </div>
        <div className="right">
          <h4>
            About Me
          </h4>
          <p>This is Ayon Chatterjee. I am react devoloper and I enjoy discussing new project and design challenges.</p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100005243746146">
            <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }}/>
            </a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
            <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/ayon-chatterjee-834369169/">
            <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
