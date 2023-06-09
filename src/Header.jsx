import { useState } from "react";
import "./Header.css";
import Logo from "./assets/logo.png";
import Hamburger from "./assets/hamburger.jpg";

function Header() {
  return (
    <div className="flex justify-between p-4">
      <img src={Logo} className="h-4"></img>
      <img src={Hamburger} className="py-1"></img>
    </div>
  );
}

export default Header;
