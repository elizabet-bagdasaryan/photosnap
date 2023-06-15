import { useState } from "react";
import { useTranslation } from "react-i18next";
import Arrow from "../../assets/arrow.png";
import "./Pricing.css";
import BetaDesk from "../../assets/beta-desk.png";
import Beta from "../../assets/beta.png";
import PricingImg from "../../assets/pricing.png";
import PricingTab from "../../assets/pricing-tab.png";
import PricingDesk from "../../assets/pricing-desk.png";
import Compare from "../../Components/Compare/Compare";
function Pricing() {
  const [billing, setBilling] = useState(false);
  const [chosenPlan, setChosenPlan] = useState(2);
  const { t } = useTranslation();

  const handleBilling = () => {
    setBilling((prevState) => !prevState);
  };

  const handlePlanChoosing = (divNumber) => {
    setChosenPlan(divNumber);
  };

  const getDivClassName = (divNumber) => {
    return divNumber === chosenPlan ? "active" : "plans";
  };

  return (
    <>
      <div className="feature">
        <img src={PricingImg} className="w-full photo-mob" />
        <div className="feature-texts">
          <div className="line " id="line1"></div>
          <div className="bg-black create-feat ">
            <h2 className="text-white uppercase text-3xl mt-12 mb-4 font-bold">
              {t("pricing")}
            </h2>
            <p className="opacity-60 leading-12 pb-12">{t("pricing-text")}</p>
          </div>
        </div>
        <img src={PricingTab} className=" photo-tab " />
        <img src={PricingDesk} className=" photo-desk w-full" />
      </div>
      <div className=" toggle">
        <p
          className="text-black text-xl font-bold my-2"
          style={{ opacity: billing ? "0.6" : "1" }}
        >
          {t("monthly")}
        </p>
        <label className="switch mx-4">
          <input type="checkbox" onClick={handleBilling} />
          <span className="slider round"></span>
        </label>
        <p
          className="text-black text-xl font-bold my-2"
          style={{ opacity: billing ? "1" : "0.6" }}
        >
          {t("yearly")}
        </p>
      </div>
      <div className="pricing ">
        <div
          className={getDivClassName(1)}
          onClick={() => handlePlanChoosing(1)}
        >
          <div className="line3 "></div>
          <div className="info">
            <h2>{t("basic")}</h2>
            <p>{t("basic-text")}</p>
            <button className=" w-full ">{t("pick-plan")}</button>
          </div>
          <div className="price">
            {billing ? <h1>$ 190.00</h1> : <h1>$ 19.00</h1>}

            {billing ? <p>{t("year")}</p> : <p>{t("month")}</p>}
          </div>
          <button className="w-full ">{t("pick-plan")}</button>
        </div>

        <div
          className={getDivClassName(2)}
          onClick={() => handlePlanChoosing(2)}
        >
          <div className="line3 "></div>
          <div className="info">
            <h2>{t("pro")}</h2>
            <p>{t("pro-text")}</p>
            <button className=" w-full ">{t("pick-plan")}</button>
          </div>{" "}
          <div className="price">
            {billing ? <h1>$ 390.00</h1> : <h1>$ 39.00</h1>}
            {billing ? <p>{t("year")}</p> : <p>{t("month")}</p>}
          </div>
          <button className=" w-full ">{t("pick-plan")}</button>
        </div>
        <div
          className={getDivClassName(3)}
          onClick={() => handlePlanChoosing(3)}
        >
          <div className="line3 "></div>
          <div className="info">
            <h2>{t("business")}</h2>
            <p>{t("business-text")}</p>
            <button className="w-full">{t("pick-plan")}</button>
          </div>
          <div className="price">
            {billing ? <h1>$ 990.00</h1> : <h1>$ 99.00</h1>}
            {billing ? <p>{t("year")}</p> : <p>{t("month")}</p>}
          </div>
          <button className="w-full  ">{t("pick-plan")}</button>
        </div>
      </div>
      <Compare />
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
            <p className="text-white mr-6">{t("get-an-invite")} </p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
