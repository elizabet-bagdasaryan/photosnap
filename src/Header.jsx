import { useState } from "react";
import "./Header.css";
import Logo from "./assets/logo.png";
import Hamburger from "./assets/hamburger.jpg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="h-4"></img>
      <img src={Hamburger} className="py-1 hamburger"></img>
      <div className="navbar">
        <p>HOME</p>
        <p>STORIES</p>
        <p>FEATURES</p>
        <p>PRICING</p>
      </div>
      <p className="get-invite">GET AN INVITE</p>
    </div>
  );
}

export default Header;
