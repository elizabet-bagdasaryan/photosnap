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
function Features() {
  return (
    <>
      <div className="feature">
        <img src={Photograph} className="w-full photo-mob" />
        <div className="feature-texts">
          <div className="line " id="line1"></div>
          <div className="bg-black create-feat ">
            <h2 className="text-white uppercase text-3xl mt-12 mb-4 font-bold">
              FEATURES
            </h2>
            <p className="opacity-60 leading-12 pb-12">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <img src={PhotographTab} className=" photo-tab " />
        <img src={PhotographDesk} className=" photo-desk w-full" />
      </div>
      <div className="detailss">
        <div className="p-8 text-center pt-16 responsive">
          <img src={Gadgets} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">100% Responsive</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="p-8 text-center pt-16 limit">
          <img src={Infinity} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">No Photo Upload Limit</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 embed">
          <img src={Socials} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">Available to Embed</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 domain">
          <img src={Domain} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">Custom Domain</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 exposure">
          <img src={Exposure} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">Boost Your Exposure</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
        <div className="p-8 text-center pt-16 mb-16 image">
          <img src={Image} className="mx-auto" />
          <h2 className="font-bold py-4 pt-12">Drag & Drop Image</h2>
          <p className="text-black opacity-60 px-14 leading-6">
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
        </div>
      </div>
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
    </>
  );
}

export default Features;
