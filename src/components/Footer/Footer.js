import React from "react";
import "./Footer.css";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
