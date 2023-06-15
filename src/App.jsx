import "./App.css";
import Home from "./Pages/Home/Home";
import Stories from "./Pages/Stories/Stories";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./en.json";
import geoTranslation from "./geo.json";

i18n.init({
  resources: {
    en: { translation: enTranslation },
    geo: { translation: geoTranslation },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </I18nextProvider>
    </>
  );
}

export default App;
