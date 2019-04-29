import React from "react";
import "../styles/homepage.css";
import img1 from "../images/home1.jpg";

import img2 from "../images/home2.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homeicons">
        <span>
          <i class="fas fa-truck fa-lg" />
          Darmowa Dostawa
        </span>
        <span>
          <i class="fas fa-medal fa-lg"> </i>
          Gwarancja jakości
        </span>
      </div>

      <div>
        <img src={img1} alt="home1" />

        <img src={img2} alt="home2" />
      </div>

      <p>
        Sklep KASZTANIAKI jest obecnie jedną z największych w Polsce hurtowni
        odżywek i suplementów. Oferujemy szeroki asortyment suplementów dla
        sportowców, witamin oraz specjalistycznych preparatów przeznaczonych
        zarówno dla amatorów, jak i zawodowych kulturystów. Naszym celem jest
        dostarczanie Państwu najwyższej jakości odżywek i suplementów w
        najlepszych cenach. Posiadamy odżywki jedynie od sprawdzonych i
        wiodących producentów, dlatego kupując u nas, mają Państwo pewność, że
        wybierają preparaty sprawdzone. Poza bogatą ofertą suplementów diety w
        naszym sklepie kulturystycznym dostępne są również akcesoria treningowe
        m.in. pasy, rękawiczki, oraz ubrania sportowe. Dzięki temu każda osoba,
        która chce zwiększyć skuteczność swoich treningów, znajdzie w naszym
        sklepie kulturystycznym produkty dopasowane do swoich potrzeb.
      </p>
    </div>
  );
};

export default HomePage;
