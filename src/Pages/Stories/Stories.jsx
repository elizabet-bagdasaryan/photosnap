import Arrow from "../../assets/arrow.png";
import "./Stories.css";
import Mountain from "../../assets/mountain.png";
import Cityscape from "../../assets/cityscape.png";
import Voyage from "../../assets/voyage.png";
import Architecture from "../../assets/architecture.png";
import Moon from "../../assets/moon.png";
import Tour from "../../assets/tour.png";
import Corners from "../../assets/corners.png";
import Lion from "../../assets/lion.png";
import Trip from "../../assets/trip.png";
import Sea from "../../assets/sea.png";
import Horse from "../../assets/horse.png";
import Waves from "../../assets/waves.png";
import Waters from "../../assets/waters.png";
import Milkyway from "../../assets/milkyway.png";
import Forest from "../../assets/forest.png";
import Beauty from "../../assets/beauty.png";
import Dreams from "../../assets/dreams.png";
import MoonDesk from "../../assets/moon-desk.png";
import MoonTab from "../../assets/moon-tab.jpg";
import { useTranslation } from "react-i18next";
function Stories() {
  const { t } = useTranslation();
  return (
    <>
      <div className="fullmoon">
        <img src={Moon} className="w-full moon-mob" />
        <img src={MoonTab} className="w-full moon-tab" />
        <img src={MoonDesk} className="w-full moon-desk" />
        <div className="moon">
          <p className="text-white text-l  py-4">{t("featured")}</p>
          <h2 className="text-white uppercase mb-4 font-bold">{t("moon")}</h2>
          <div className="flex py-4">
            <p className="opacity-75 mr-2">{t("march-2nd")} 2020</p>
            <p>{t("by")} John Appleseed</p>
          </div>
          <p className="opacity-60 leading-12 paragraph">{t("moon-text")}</p>
          <div
            className="flex  inv-views hover:underline hover:text-white cursor-pointer"
            id="read-story"
          >
            <p className="text-white mr-4 ">{t("read")}</p>
            <img src={Arrow} className="h-3 mt-1" />
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}

      <div className="stories">
        <div className="relative mountain">
          <img src={Mountain} className="w-full mount" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-16th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("mountains")}</h2>
            <p>{t("by")} John Appleseed</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex justify-between  mt-4">
              <p className="text-white  font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative cityscape">
          <img src={Cityscape} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-14th")}2020</p>
            <h2 className="text-white text-xl font-bold">{t("cityscapes")}</h2>
            <p>{t("by")} Benjamin Cruz</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative voyage">
          <img src={Voyage} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-11th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("voyage")}</h2>
            <p>{t("by")} Alexei Borodin</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className="relative architecture">
          <img src={Architecture} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-9th")} 2020</p>
            <h2 className="text-white text-xl font-bold">
              {t("architecturals")}
            </h2>
            <p>{t("by")} Samantha Brooke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="relative tour">
          <img src={Tour} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-7th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("tour")}</h2>
            <p>{t("by")} Timothy Wagner</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")} </p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative corners">
          <img src={Corners} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("april-3rd")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("corners")}</h2>
            <p>{t("by")}William Malcolm</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative lion">
          <img src={Lion} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-29th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("africa")}</h2>
            <p>{t("by")} Tim Hillenburg</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative trip">
          <img src={Trip} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-21st")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("trip")}</h2>
            <p>{t("by")} Felicia Rourke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative sea">
          <img src={Sea} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-19th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("sea")}</h2>
            <p>{t("by")} Mohammed Abdul</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative horse">
          <img src={Horse} className="w-full brightness-75" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-16th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("running")}</h2>
            <p>{t("by")} Michelle</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative waves">
          <img src={Waves} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-11th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("waves")}</h2>
            <p>{t("by")} Lamarr Wilson</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative waters">
          <img src={Waters} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-9th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("waters")}</h2>
            <p>{t("by")} Samantha Brooke</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative milkyway">
          <img src={Milkyway} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-5th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("milky")}</h2>
            <p>{t("by")} Benjamin Cruz</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative forest">
          <img src={Forest} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-5th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("forest")}</h2>
            <p>{t("by")} Mohammed Abdul</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative beauty">
          <img src={Beauty} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("march-1st")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("beauty")}</h2>
            <p>{t("by")} Michelle</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="relative dreams">
          <img src={Dreams} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p>{t("feb-25th")} 2020</p>
            <h2 className="text-white text-xl font-bold">{t("dreams")}</h2>
            <p>{t("by")} William Malcolm</p>
            <hr className="opacity-25 mt-2" />
            <div className="flex mt-4 justify-between">
              <p className="text-white mr-4 font-bold">{t("read")}</p>
              <img src={Arrow} className="h-3 mt-1" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
      </div>
    </>
  );
}

export default Stories;
