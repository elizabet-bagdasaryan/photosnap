import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.jpg";
import Cross from "../../assets/cross.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation();

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
          <Link to="/home">
            <p>{t("home")}</p>
          </Link>
          <Link to="/stories">
            <p>{t("stories")}</p>
          </Link>
          <Link to="/features">
            <p>{t("features")}</p>
          </Link>
          <Link to="/pricing">
            <p>{t("pricing")}</p>
          </Link>
        </div>
        <p className="get-invite">{t("get-an-invite")}</p>
      </div>
      <div
        style={{ display: menuVisible ? "block" : "none" }}
        className="menu-mobile px-7"
      >
        <Link to="/stories">
          <p>{t("stories")}</p>
        </Link>
        <Link to="/features">
          <p>{t("features")}</p>
        </Link>
        <Link to="/pricing">
          <p>{t("pricing")}</p>
        </Link>
        <hr />
        <p className="w-full bg-black py-3 " id="get-invite">
          {t("get-an-invite")}
        </p>
      </div>
    </>
  );
}

export default Header;
