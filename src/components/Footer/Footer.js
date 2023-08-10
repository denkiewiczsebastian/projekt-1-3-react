import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-2x" />
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="fa-brands fa-2x"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
