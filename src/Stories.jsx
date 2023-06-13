import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Arrow from "./assets/arrow.png";
import "./Stories.css";
import Mountain from "./assets/mountain.png";
import Cityscape from "./assets/cityscape.png";
import Voyage from "./assets/voyage.png";
import Architecture from "./assets/architecture.png";
import Moon from "./assets/moon.png";
import Tour from "./assets/tour.png";
import Corners from "./assets/corners.png";
import Lion from "./assets/lion.png";
import Trip from "./assets/trip.png";
import Sea from "./assets/sea.png";
import Horse from "./assets/horse.png";
import Waves from "./assets/waves.png";
import Waters from "./assets/waters.png";
import Milkyway from "./assets/milkyway.png";
import Forest from "./assets/forest.png";
import Beauty from "./assets/beauty.png";
import Dreams from "./assets/dreams.png";
import MoonDesk from "./assets/moon-desk.png";
import MoonTab from "./assets/moon-tab.jpg";
function Stories() {
  return (
    <>
      <Header />
      <div className="fullmoon">
        <img src={Moon} className="w-full moon-mob" />
        <img src={MoonTab} className="w-full moon-tab" />
        <img src={MoonDesk} className="w-full moon-desk" />
        <div className="moon">
          <p className="text-white text-l  py-4">LAST MONTH’S FEATURED STORY</p>
          <h2 className="text-white uppercase mb-4 font-bold">
            HAZY FULL MOON OF APPALACHIA
          </h2>
          <div className="flex py-4">
            <p className="opacity-75 mr-2">March 2nd 2020</p>
            <p>by John Appleseed</p>
          </div>
          <p className="opacity-60 leading-12 paragraph">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div
            className="flex  inv-views hover:underline hover:text-white cursor-pointer"
            id="read-story"
          >
            <p className="text-white mr-4 ">READ THE STORY </p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}

      <div className="stories">
        <div className="relative mountain">
          <img src={Mountain} className="w-full mount" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 16th 2020</p>
            <h2 className="text-white text-xl font-bold">The Mountains</h2>
            <p>by John Appleseed</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex justify-between  mt-4">
              <p className="text-white  font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative cityscape">
          <img src={Cityscape} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 14th 2020</p>
            <h2 className="text-white text-xl font-bold">Sunset Cityscapes</h2>
            <p>by Benjamin Cruz</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative voyage">
          <img src={Voyage} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 11th 2020</p>
            <h2 className="text-white text-xl font-bold">18 Days Voyage</h2>
            <p>by Alexei Borodin</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative architecture">
          <img src={Architecture} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 9th 2020</p>
            <h2 className="text-white text-xl font-bold">Architecturals</h2>
            <p>by Samantha Brooke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="relative tour">
          <img src={Tour} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 7th 2020</p>
            <h2 className="text-white text-xl font-bold">World Tour 2019</h2>
            <p>by Timothy Wagner</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative corners">
          <img src={Corners} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>April 3rd 2020</p>
            <h2 className="text-white text-xl font-bold">Unforeseen Corners</h2>
            <p>by William Malcolm</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative lion">
          <img src={Lion} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 29th 2020</p>
            <h2 className="text-white text-xl font-bold">
              King on Africa: Part II
            </h2>
            <p>by Tim Hillenburg</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative trip">
          <img src={Trip} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 21st 2020</p>
            <h2 className="text-white text-xl font-bold">
              The Trip to Nowhere
            </h2>
            <p>by Felicia Rourke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative sea">
          <img src={Sea} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 19th 2020</p>
            <h2 className="text-white text-xl font-bold">Rage of The Sea</h2>
            <p>by Mohammed Abdul</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative horse">
          <img src={Horse} className="w-full brightness-75" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 16th 2020</p>
            <h2 className="text-white text-xl font-bold">Running Free</h2>
            <p>by Michelle</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative waves">
          <img src={Waves} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 11th 2020</p>
            <h2 className="text-white text-xl font-bold">Behind the Waves</h2>
            <p>by Lamarr Wilson</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative waters">
          <img src={Waters} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 9th 2020</p>
            <h2 className="text-white text-xl font-bold">Calm Waters</h2>
            <p>by Samantha Brooke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative milkyway">
          <img src={Milkyway} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 5th 2020</p>
            <h2 className="text-white text-xl font-bold">The Milky Way</h2>
            <p>by Benjamin Cruz</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative forest">
          <img src={Forest} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 4th 2020</p>
            <h2 className="text-white text-xl font-bold">
              Night at The Dark Forest
            </h2>
            <p>by Mohammed Abdul</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative beauty">
          <img src={Beauty} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>March 1st 2020</p>
            <h2 className="text-white text-xl font-bold">Somwarpet’s Beauty</h2>
            <p>by Michelle</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative dreams">
          <img src={Dreams} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>February 25th 2020</p>
            <h2 className="text-white text-xl font-bold">Land of Dreams</h2>
            <p>by William Malcolm</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">READ STORY </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
      </div>

      <Footer />
    </>
  );
}

export default Stories;
