import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="img"
        src={process.env.PUBLIC_URL + "/images/zdjecie1.jpg"}
        alt=""
      />
      <div className="shadow">
        <div className="header-content container-tiny">
          <h1 className="header-main">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="text-paragraph">Nie wierz nam na słowo - sprawdź</p>
          <a href="#offer" className="offer-button">
            Oferta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
