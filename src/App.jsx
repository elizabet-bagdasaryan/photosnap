import "./App.css";
import Home from "./Pages/Home/Home";
import Stories from "./Pages/Stories/Stories";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
