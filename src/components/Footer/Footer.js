import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import Cinema from '../../assets/img/cinema.png'

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src={Cinema} alt="..."/>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#333", marginRight: "2rem" }} />
            <div>
              <p>Jl. Albarkah No.45, Tebet</p>
              <p>Jakarta Selatan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
             <FaPhone size={20} style={{ color: "#333", marginRight: "2rem" }} />
             +62 8154-3043-925
            </h4>
          </div>
          <div className="email">
            <h4>
             <FaMailBulk size={20} style={{ color: "#333", marginRight: "2rem" }} />
             aariansyah70@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <div className="social">
            <FaFacebook size={30} style={{ color: "#333", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#333", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#333", marginRight: "1rem" }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
