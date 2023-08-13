import "./OfferSection.css";
import OfferBox from "./OfferBox";
import offers from "../../data/offers";

const OfferSection = () => {
  return (
    <section id="offer" className="offer">
      <div className="container">
        <h2 className="offer-section-title">Czym zajmuje się nasza firma?</h2>
        <div className="flex-boxes">
          {offers.map((offer, index) => (
            <OfferBox key={index} title={offer.title} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
