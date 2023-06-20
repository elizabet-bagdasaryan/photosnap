import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EnglishFlag from "../assets/uk.png";
import GeorgianFlag from "../assets/geo.png";
import "./Language.css";

const Language = () => {
  const { i18n } = useTranslation();
  const [showEnglishFlag, setShowEnglishFlag] = useState(true);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleFlagToggle = () => {
    setShowEnglishFlag((prevState) => !prevState);
    const language = showEnglishFlag ? "geo" : "en";
    changeLanguage(language);
  };

  return (
    <div className="languages">
      <img
        src={EnglishFlag}
        alt="English"
        onClick={handleFlagToggle}
        className={`flag ${showEnglishFlag ? "visible" : "hidden"}`}
      />
      <img
        src={GeorgianFlag}
        alt="Georgian"
        onClick={handleFlagToggle}
        className={`flag ${showEnglishFlag ? "hidden" : "visible"}`}
      />
    </div>
  );
};

export default Language;
