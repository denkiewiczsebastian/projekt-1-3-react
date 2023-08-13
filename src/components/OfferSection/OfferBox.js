import "./OfferBox.css";

const OfferBox = ({ title, isNew }) => {
  return (
    <div className="box">
      <h3>{title}</h3>
      {isNew && <div className="circle"></div>}
      {isNew && <p className="new-offer">(nowość)</p>}
    </div>
  );
};

export default OfferBox;
