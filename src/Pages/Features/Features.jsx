import Arrow from "../../assets/arrow.png";
import "./Features.css";
import Photograph from "../../assets/photograph.png";
import Gadgets from "../../assets/gadgets.png";
import Infinity from "../../assets/infinity.png";
import Socials from "../../assets/socials.png";
import Domain from "../../assets/domain.png";
import Exposure from "../../assets/exposure.png";
import Image from "../../assets/image.png";
import Beta from "../../assets/beta.png";
import PhotographTab from "../../assets/photograph-tab.png";
import PhotographDesk from "../../assets/photograph-desk.png";
import BetaDesk from "../../assets/beta-desk.png";
import { useTranslation } from "react-i18next";
function Features() {
  const { t } = useTranslation();
  return (
    <>
      <div className="feature">
        <img src={Photograph} className="w-full photo-mob" />
        <div className="feature-texts">
          <div className="line " id="line1"></div>
          <div className="bg-black create-feat ">
            <h2 className="text-white uppercase text-3xl mt-12 mb-4 font-bold">
              {t("feat")}
            </h2>
            <p className="opacity-60 leading-12 pb-12">{t("feat-text")}</p>
          </div>
        </div>
        <img src={PhotographTab} className=" photo-tab " />
        <img src={PhotographDesk} className=" photo-desk w-full" />
      </div>
      <div className="detailss">
        <div className="p-8 text-center pt-16 responsive">
          <img src={Gadgets} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("responsive")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("responsive-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 limit">
          <img src={Infinity} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("limit")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("limit-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 embed">
          <img src={Socials} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("embed")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("embed-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 domain">
          <img src={Domain} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("domain")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("domain-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 exposure">
          <img src={Exposure} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("exposure")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("exposure-text")}
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 image">
          <img src={Image} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12"> {t("image")}</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            {t("image-text")}
          </p>
        </div>
      </div>
      <div className="relative ">
        <img src={Beta} className="beta-img" />
        <img src={BetaDesk} className="beta-img-desk" />
        <div className="absolute top-0 left-0 w-full beta">
          <div className="line" id="line2"></div>
          <h2 className="uppercase text-white text-4xl p-12  mt-12">
            {t("beta")}
            <br /> {t("your-invite")} <br />
            {t("today")}
          </h2>
          <div className="flex invites hover:underline hover:text-white cursor-pointer px-12">
            <p className="text-white mr-6"> {t("get-an-invite")}</p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
