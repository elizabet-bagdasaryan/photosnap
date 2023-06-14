import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Arrow from "./assets/arrow.png";
import "./Pricing.css";
import BetaDesk from "./assets/beta-desk.png";
import Beta from "./assets/beta.png";
import PricingImg from "./assets/pricing.png";
import PricingTab from "./assets/pricing-tab.png";
import PricingDesk from "./assets/pricing-desk.png";
import Compare from "./Compare";
function Pricing() {
  const [billing, setBilling] = useState(false);

  const handleBilling = () => {
    setBilling((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div className="feature">
        <img src={PricingImg} className="w-full photo-mob" />
        <div className="feature-texts">
          <div className="line " id="line1"></div>
          <div className="bg-black create-feat ">
            <h2 className="text-white uppercase text-3xl mt-12 mb-4 font-bold">
              PRICING
            </h2>
            <p className="opacity-60 leading-12 pb-12">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
        <img src={PricingTab} className=" photo-tab " />
        <img src={PricingDesk} className=" photo-desk w-full" />
      </div>
      <div className="flex items-center justify-center mt-16 mb-16">
        <p
          className="text-black text-xl font-bold"
          style={{ opacity: billing ? "0.6" : "1" }}
        >
          Monthly
        </p>
        <label className="switch mx-4">
          <input type="checkbox" onClick={handleBilling} />
          <span className="slider round"></span>
        </label>
        <p
          className="text-black text-xl font-bold"
          style={{ opacity: billing ? "1" : "0.6" }}
        >
          Yearly
        </p>
      </div>
      <div className="pricing ">
        <div className="bg-gray-100 plans">
          <div className="info">
            <h2 className="text-2xl text-black font-bold pt-20">Basic</h2>
            <p className="text-black opacity-60 mt-4 mb-12">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <button className="bg-black text-white w-full py-3 text-sm mt-12 mb-8 ">
              PICK PLAN
            </button>
          </div>
          <div className="price">
            {billing ? (
              <h1 className="text-4xl text-black font-bold mb-2">$ 190.00</h1>
            ) : (
              <h1 className="text-4xl text-black font-bold mb-2">$ 19.00</h1>
            )}

            <p className="text-black opacity-60">per month</p>
          </div>
          <button className="bg-black text-white w-full py-3 text-sm mt-12 mb-8  ">
            PICK PLAN
          </button>
        </div>

        <div className="bg-black plans">
          <div className="line3 "></div>
          <div className="info">
            <h2 className="text-2xl text-white font-bold pt-20">Pro</h2>
            <p className="text-white opacity-60 mt-4 mb-12">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <button className="bg-white text-black w-full py-3 text-sm mt-12 mb-8 ">
              PICK PLAN
            </button>
          </div>{" "}
          <div className="price">
            {billing ? (
              <h1 className="text-4xl text-white font-bold mb-2">$ 390.00</h1>
            ) : (
              <h1 className="text-4xl text-white font-bold mb-2">$ 39.00</h1>
            )}
            <p className="text-white opacity-60">per month</p>
          </div>
          <button className="bg-white text-black w-full py-3 text-sm mt-12 mb-8 ">
            PICK PLAN
          </button>
        </div>
        <div className="bg-gray-100 plans">
          <div className="info">
            <h2 className="text-2xl text-black font-bold pt-20">Business</h2>
            <p className="text-black opacity-60 mt-4 mb-12">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <button className="bg-black text-white w-full py-3 text-sm mt-12 mb-8 ">
              PICK PLAN
            </button>
          </div>
          <div className="price">
            {billing ? (
              <h1 className="text-4xl text-black font-bold mb-2">$ 990.00</h1>
            ) : (
              <h1 className="text-4xl text-black font-bold mb-2">$ 99.00</h1>
            )}
            <p className="text-black opacity-60">per month</p>
          </div>
          <button className="bg-black text-white w-full py-3 text-sm mt-12 mb-8 ">
            PICK PLAN
          </button>
        </div>
      </div>
      <Compare />
      <div className="relative ">
        <img src={Beta} className="beta-img" />
        <img src={BetaDesk} className="beta-img-desk" />
        <div className="absolute top-0 left-0 w-full beta">
          <div className="line" id="line2"></div>
          <h2 className="uppercase text-white text-4xl p-12  mt-12">
            We’re in beta.
            <br /> Get your invite <br />
            today!
          </h2>
          <div className="flex invites hover:underline hover:text-white cursor-pointer px-12">
            <p className="text-white mr-6">GET AN INVITE </p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pricing;
