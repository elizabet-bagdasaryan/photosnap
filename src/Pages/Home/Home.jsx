import Tourist from "../../assets/tourist.png";
import Arrow from "../../assets/arrow.png";
import Desk from "../../assets/desk.png";
import ArrowBlack from "../../assets/arrow-black.png";
import "./Home.css";
import Camera from "../../assets/camera.png";
import Mountain from "../../assets/mountain.png";
import Cityscape from "../../assets/cityscape.png";
import Voyage from "../../assets/voyage.png";
import Architecture from "../../assets/architecture.png";
import Gadgets from "../../assets/gadgets.png";
import Infinity from "../../assets/infinity.png";
import Socials from "../../assets/socials.png";
import CameraTab from "../../assets/camera-tablet.png";
import DeskTab from "../../assets/desk-tablet.png";
import TouristTab from "../../assets/tourist-tablet.png";
import CameraDesk from "../../assets/camera-desk.jpg";
import DeskDesk from "../../assets/desk-desk.jpg";
import TouristDesk from "../../assets/tourist-desk.jpg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="tourists">
        <img src={Tourist} className="w-full big-img" />
        <div className="bg-black px-14 py-8 create ">
          <div className="line" id="line-tour"></div>
          <h2 className="text-white uppercase text-3xl mt-12 mb-4 font-bold">
            {t("create-home")}
          </h2>
          <h4 className="opacity-60 leading-12 paragraphs text-white">
            {t("create-home-text")}
          </h4>
          <div className="flex  inv-views hover:underline hover:text-white cursor-pointer">
            <p className="text-white mr-4 ">{t("get-an-invite")} </p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
        <img src={TouristTab} className="tab-img" />
        <img src={TouristDesk} className="desk-img " />
      </div>
      <div className="desks">
        <img src={Desk} className="w-full big-img" />
        <img src={DeskTab} className="tab-img" />
        <img src={DeskDesk} className="desk-img" />
        <div className=" px-14 py-8 create ">
          <h2 className="text-black uppercase text-3xl mt-12 mb-4 font-bold">
            {t("beautiful")}
          </h2>
          <p className="opacity-60 leading-12 text-black paragraphs">
            {t("beautiful-text")}
          </p>
          <div className="flex inv-views hover:underline cursor-pointer">
            <p className="text-black mr-4 font-bold">{t("view-stories")}</p>
            <img src={ArrowBlack} className="h-3 mt-1" />
          </div>
        </div>
      </div>
      <div className="cameras">
        <img src={Camera} className="w-full big-img" />
        <div className=" px-14 py-8 create ">
          <h2 className="text-black uppercase text-3xl mt-12 mb-4 font-bold ">
            {t("designed")}
          </h2>
          <p className="opacity-60 leading-12 text-black paragraphs">
            {t("designed-text")}
          </p>
          <div className="flex inv-views hover:underline cursor-pointer">
            <p className="text-black mr-4 font-bold">{t("view-stories")}</p>
            <img src={ArrowBlack} className="h-3 mt-1" />
          </div>
        </div>
        <img src={CameraTab} className="tab-img" />{" "}
        <img src={CameraDesk} className="desk-img" id="camera-desk" />
      </div>
      {/* ----------------------------------------------------------------- */}
      <div className="stories">
        <div className="relative mountain">
          <img src={Mountain} className="w-full mount" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h2 className="text-white text-xl font-bold"> {t("mountains")}</h2>
            <p> {t("by")} John Appleseed</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex justify-between  mt-4">
              <p className="text-white  font-bold"> {t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative cityscape">
          <img src={Cityscape} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h2 className="text-white text-xl font-bold"> {t("cityscapes")}</h2>
            <p> {t("by")} Benjamin Cruz</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold"> {t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative voyage">
          <img src={Voyage} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h2 className="text-white text-xl font-bold"> {t("voyage")}</h2>
            <p> {t("by")}Alexei Borodin</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold"> {t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative architecture">
          <img src={Architecture} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h2 className="text-white text-xl font-bold">
              {" "}
              {t("architecturals")}
            </h2>
            <p> {t("by")} Samantha Brooke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold"> {t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="p-8 text-center pt-16">
          <img src={Gadgets} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">{t("responsive")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("responsive-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16">
          <img src={Infinity} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">{t("limit")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("limit-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16">
          <img src={Socials} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">{t("embed")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("embed-text")}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
