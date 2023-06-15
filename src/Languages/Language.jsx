import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EnglishFlag from "./assets/uk.png";
import GeorgianFlag from "./assets/geo.png";
import "./Language.css";

const Language = () => {
  const { i18n } = useTranslation();
  const [flagVisible, setFlagVisible] = useState(false);

  function handleFlagVisibility() {
    setFlagVisible((prevState) => !prevState);
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleBothGeo = () => {
    handleFlagVisibility();
    changeLanguage("geo");
  };

  const handleBothEng = () => {
    handleFlagVisibility();
    changeLanguage("en");
  };

  return (
    <div className="languages">
      <img
        src={EnglishFlag}
        alt="English"
        onClick={handleBothEng}
        style={{ display: flagVisible ? "none" : "block" }}
      />
      <img
        src={GeorgianFlag}
        alt="Georgian"
        onClick={handleBothGeo}
        style={{ display: flagVisible ? "block" : "none" }}
      />
    </div>
  );
};

export default Language;
