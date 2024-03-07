import React, { useState, useRef } from "react";
import Navbar from "../components/LandingPage/NavBar";
import Sidebar from "../components/LandingPage/SideBar";
import { Button } from "@chakra-ui/react";
import Footer from "../components/LandingPage/Footer";
import { Link } from "react-router-dom";
import Swiper from "swiper";

const swiper = new Swiper(".your-carousel-container", {
  // Your Swiper options here
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    slideShadows: false,
  },
  centeredSlides: true,
  a11y: {
    allowTouchMove: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  setWrapperSize: true,
  slidesPerView: 1,
  spaceBetween: 5,
  breakpointsBase: "conainer",
  direction: "horizontal",
  autoplay: 1000,
  autoplayDisableOnInteraction: true,
  speed: 1500,
});

function Privacy() {
  const [isNav, setIsNav] = useState(false);
  const toggleNav = () => {
    setIsNav(!isNav);
  };

  // component
  const MyComponent = ({ data }) => {
    // Use data.property1, data.property2, etc. to render content
    return (
      <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[219px] w-[197.6px] rounded-[20px] m-2">
        <img
          src={data.imagePath}
          className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
        ></img>
        <div className="flex flex-col-reverse flex-grow justify-items-start">
          <div className="w-fit align-self-top mx-2 pb-2">₹ {data.price}</div>
          <div className="text-xs w-fit mx-2 text-left">₹ {data.title}</div>
        </div>
      </div>
    );
  };

  const MyComponent2 = ({ data }) => {
    // Use data.property1, data.property2, etc. to render content
    return (
      <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[219px] rounded-[20px] m-2">
        <img
          src={data.imagePath}
          className="h-[100%] bg-cover bg-center w-[100%] bg-no-repeat"
        ></img>
      </div>
    );
  };

  // test data
  const jsonData = [
    {
      id: 1,
      title: "Small Birthday Decoration",
      price: "3000",
      imagePath: "/assets/23-CYX5G_Ke.png",
      description:
        "thi is description thi is description thi is description thi is description thi is description thi is description thi is description thi is description thi is description ",
    },
    {
      id: 2,
      title: "Merrage Sound System",
      price: "3000",
      imagePath: "/assets/dj-BPce03oC.png",
      description: "short one here",
    },
    ,
    {
      id: 3,
      title: "Item 2",
      price: "3000",
      imagePath: "/assets/23-CYX5G_Ke.png",
      description: "short one here",
    },
    // ... more data items
  ];

  return (
    <>
      <div className="w-screen">
        <Navbar toggleNav={toggleNav} />
        {isNav ? <Sidebar toggleNav={toggleNav} /> : <></>}
        <div className="mt-[10.75vh] text-left m-auto w-fit text-lg">Privacy Policy </div>
        <div className="text-justify mt-[2vh] mx-5">
          Protecting your privacy is important to DJ Sound Service. This Privacy
          Policy explains what information we collect from visitors to our
          website, how we use that information, and how we protect it.
        </div>
        <div className="text-left mt-[5vh] mx-5">Information We Collect</div>
        <div className="text-justify mb-[5vh] mt-[2vh] mx-5">
          <ul>
            <li>
              Information you voluntarily provide: This includes information you
              provide when you contact us through a form, email, or phone call.
              This may include your name, email address, phone number, event
              details, and any other information you choose to share.
            </li>
            <br />
            <li>
              Information collected automatically: When you visit our website,
              we may automatically collect information about your device, such
              as your IP address, browser type, and the pages you visit. This
              information is used to improve the functionality of our website
              and understand how visitors use it.
            </li>
            <br />
            <li>
               We use the information we collect to:
              Respond to your inquiries and requests Provide you with DJ
              services Send you information about our services and promotions
              (with your consent) Improve our website
            </li>
          </ul>
          <div className="text-left mt-[5vh]">How We Use Your Information</div>
          <ul className="mt-[2vh]">
          <li>
               We use the information we collect to:
              Respond to your inquiries and requests Provide you with DJ
              services Send you information about our services and promotions
              (with your consent) Improve our website
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Privacy;
