import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "./assets/logo-light.png";
import Arrow from "./assets/arrow.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-black text-center">
      <img src={Logo} className="mx-auto pt-16" />
      <div className="icons mt-8">
        <FacebookIcon className="text-white mr-2" />
        <YouTubeIcon className="text-white mr-2" />
        <TwitterIcon className="text-white mr-2" />
        <PinterestIcon className="text-white mr-2" />
        <InstagramIcon className="text-white mr-2" />
      </div>
      <div className="nav mt-14">
        <p>HOME</p>
        <p>STORIES</p>
        <p>FEATURES</p>
        <p>PRICING</p>
      </div>
      <div className="flex invite">
        <p className="text-white mr-4 ">GET AN INVITE </p>
        <img src={Arrow} className="h-4 mt-24" />
      </div>
      <p className="text-white opacity-60 py-10">
        Copyright 2019. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
