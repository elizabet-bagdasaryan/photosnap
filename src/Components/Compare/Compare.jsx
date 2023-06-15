import { useState } from "react";
import "./Compare.css";
import Tick from "../../assets/tick.png";
import Horizontal from "../../assets/horizontal.png";
import { useTranslation } from "react-i18next";

function Compare() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1 className="text-black font-bold text-center text-4xl tracking-wide mb-14">
        {t("compare")}
      </h1>
      <div className="flex justify-between plan-headers">
        <h2 className="text-black font-bold">{t("the-features")}</h2>
        <div className="plan-options">
          <p className="text-black  font-bold ">{t("basic")}</p>

          <p className="text-black font-bold ">{t("pro")}</p>

          <p className="text-black font-bold ">{t("business")}</p>
        </div>
      </div>
      <img src={Horizontal} className="w-full mt-4 mb-8" />
      <section>
        <h2 className="text-black font-bold">{t("story-post")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("photo-upload")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("custom-content")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("metadata")}</h2>
        <div className="flex justify-between ">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("metrics")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("photo-down")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("engine-index")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">{t("analytics")}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">{t("basic")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("pro")}</p>
          </div>
          <div>
            <p className="text-black opacity-50">{t("business")}</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Compare;
