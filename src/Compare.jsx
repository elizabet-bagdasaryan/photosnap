import { useState } from "react";
import "./Compare.css";
import Tick from "./assets/tick.png";
import Horizontal from "./assets/horizontal.png";
function Compare() {
  return (
    <div className="main">
      <h1 className="text-black font-bold text-center text-4xl tracking-wide mb-14">
        COMPARE
      </h1>
      <div className="flex justify-between plan-headers">
        <h2 className="text-black font-bold">THE FEATURES</h2>
        <div className="plan-options">
          <p className="text-black  font-bold ">BASIC</p>

          <p className="text-black font-bold ">PRO</p>

          <p className="text-black font-bold ">BUSINESS</p>
        </div>
      </div>
      <img src={Horizontal} className="w-full mt-4 mb-8" />
      <section>
        <h2 className="text-black font-bold">UNLIMITED STORY POSTING</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">UNLIMITED PHOTO UPLOAD</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">EMBEDDING CUSTOM CONTENT</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">CUSTOMIZE METADATA</h2>
        <div className="flex justify-between ">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
            <img src={Tick}></img>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">ADVANCED METRICS</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">PHOTO DOWNLOADS</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">SEARCH ENGINE INDEXING</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-black font-bold">CUSTOM ANALYTICS</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-black opacity-50">BASIC</p>
          </div>
          <div>
            <p className="text-black opacity-50">PRO</p>
          </div>
          <div>
            <p className="text-black opacity-50">BUSINESS</p>
            <img src={Tick}></img>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Compare;
