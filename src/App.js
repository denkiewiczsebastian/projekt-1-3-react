import React from "react";
import "./styles/reset.css";
import "./styles/style.css";
import Navigation from "./components/Navigation";
import OfferBox from "./components/OfferBox";
import EmployeeRow from "./components/EmployeeRow";
import Header from "./components/Header";
import InstagramIcon from "./components/InstagramIcon";
import FacebookIcon from "./components/FacebookIcon";
import offers from "./data/offers";
import employees from "./data/employees";

const App = () => {
  return (
    <div className="body">
      <Navigation />
      <nav className="nav">
        <div className="container"></div>
      </nav>
      <Header />
      <main>
        <section id="about" className="experts-section">
          <div className="container">
            <h2 className="experts-header">Nasi specjaliści</h2>
            <ul className="experts-list">
              {employees.map((employee, index) => (
                <EmployeeRow
                  key={index}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  position={employee.position}
                  description={employee.description}
                  imageSrc={employee.imageSrc}
                />
              ))}
            </ul>
          </div>
        </section>
        <section id="offer" className="offer">
          <div className="container">
            <h2 className="offer-section-title">
              Czym zajmuje się nasza firma?
            </h2>
            <div className="flex-boxes">
              {offers.map((offer, index) => (
                <OfferBox key={index} title={offer.title} isNew={offer.isNew} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
          <div className="icons">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
