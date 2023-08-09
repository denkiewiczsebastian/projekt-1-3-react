import React from "react";
import "./styles/reset.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ExpertsSection from "./components/ExpertsSection/ExpertsSection";
import OfferSection from "./components/OfferSection/OfferSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="body">
      <Navigation />
      <Header />
      <ExpertsSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default App;
