import React from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Georgian</option>
      </select>
    </div>
  );
};

export default Language;
