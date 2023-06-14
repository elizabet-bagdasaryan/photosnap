import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "../../assets/logo-light.png";
import Arrow from "../../assets/arrow.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black  foot-wrapper">
      <img src={Logo} className=" logo" />
      <div className="icons mt-8">
        <FacebookIcon className="text-white mr-2  hover:text-blue-400 cursor-pointer" />

        <YouTubeIcon className="text-white mr-2 hover:text-red-600 cursor-pointer" />
        <TwitterIcon className="text-white mr-2 hover:text-teal-400 cursor-pointer " />
        <PinterestIcon className="text-white mr-2 hover:text-orange-400 cursor-pointer" />
        <InstagramIcon className="text-white mr-2 text-white mr-2 hover:text-pinkcustom cursor-pointer" />
      </div>
      <div className="nav">
        <Link to="/home">
          <p>HOME</p>
        </Link>
        <Link to="/stories">
          <p>STORIES</p>
        </Link>
        <Link to="/features">
          <p>FEATURES</p>
        </Link>
        <Link to="/pricing">
          <p>PRICING</p>
        </Link>
      </div>
      <div className="flex invite">
        <p className="text-white mr-4 hover:underline hover:text-white cursor-pointer">
          GET AN INVITE{" "}
        </p>
        <img src={Arrow} className="h-4 " />
      </div>
      <p className="text-white opacity-60 py-10 copyright">
        Copyright 2019. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
