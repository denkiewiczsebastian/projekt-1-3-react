import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="body-container">
          <p>Moja Firma</p>
        </div>
        <ul className="nav-button">
          <li>
            <a href="#about" className="links">
              O nas
            </a>
          </li>
          <li>
            <a href="#offer" className="links">
              Oferta
            </a>
          </li>
          <li>
            <a href="#" className="links disabled-button">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
