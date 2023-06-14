import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.jpg";
import Cross from "../../assets/cross.png";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenuVisibility() {
    setMenuVisible((prevState) => !prevState);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="header ">
        <img src={Logo} className="h-4"></img>
        <img
          src={menuVisible ? Cross : Hamburger}
          className="py-1 hamburger"
          onClick={handleMenuVisibility}
        />

        <div className="navbar">
          <p>HOME</p>
          <p>STORIES</p>
          <p>FEATURES</p>
          <p>PRICING</p>
        </div>
        <p className="get-invite">GET AN INVITE</p>
      </div>
      <div
        style={{ display: menuVisible ? "block" : "none" }}
        className="menu-mobile px-7"
      >
        <p>STORIES</p>
        <p>FEATURES</p>
        <p>PRICING</p>
        <hr />
        <p className="w-full bg-black py-3 ">GET AN INVITE</p>
      </div>
    </>
  );
}

export default Header;
