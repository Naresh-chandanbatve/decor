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

function LandingPage() {
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
          <div className="w-fit align-self-top mx-2 pb-2">{data.price}</div>
          <div className="text-xs w-fit mx-2 text-left">{data.title}</div>
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
      title: "Item 1",
      price: "This is description 1",
      imagePath: "./assets/23.png",
    },
    {
      id: 2,
      title: "Item 2",
      price: "This is description 2",
      imagePath: "./assets/dj.png",
    },
    ,
    {
      id: 3,
      title: "Item 2",
      price: "This is description 2",
      imagePath: "/assets/23.png",
    },
    // ... more data items
  ];

  const handleWhatsapp = () => {
    window.open("https://wa.me/8412025448", "_blank");
  };

  const RefVariable = useRef(null);

  const handleScroll = (ref) => {
    if (ref) {
      // Scroll to the top of the div with ref={ref}
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        onClick={handleWhatsapp}
        className="fixed bottom-[17%] bg-cover bg-[url('./assets/whatsapp.png')] drop-shadow-[0_11px_10px_rgba(0,0,0,1.5)] right-0 z-50 h-[50px] w-[50px] m-2"
      ></div>
      <div className="flex flex-col w-screen h-screen bg-cover bg-[url(./assets/main_bg.jpeg)] opacity-35"></div>
      <div className="absolute mx-auto left-0 right-0 top-0 bg-contain z-0 bg-no-repeat self-center w-[76.8vw] h-[58.25vh]  bg-[url(./assets/front.png)]"></div>
      <div className="absolute top-[50vh] w-screen h-[50vh] flex flex-col-reverse flex-grow items-center bottom-0 bg-gradient-to-t from-black from-30% via-black/48.4 via-10% to-transparent ">
        <Button
          background="#6CA18F"
          className="rounded-[16px] w-[46.66vw] h-[6.65vh] mt-[3vh] mb-[10vh]"
          onClick={() => handleScroll(RefVariable)}
        >
          Explore
        </Button>
        <p className="text-3xl font-sans font-bold m-5 mx-10">
          Elevate your Celebrations with DJ Raku Sounds and Decor
        </p>
      </div>
      <Navbar toggleNav={toggleNav} />
      {isNav ? <Sidebar toggleNav={toggleNav} /> : <></>}
      <div className="relative top-0 h-fit bg-[#0A0E0D]">
        <p className="text-2xl pt-[8vh] mx-[3vh] text-white font-bold text-left">
          Our Services
        </p>
        <div className="flex flex-row text-justify items-center mt-[3vh]">
          <div className="flex flex-col">
            <div className="w-fit mx-[3vh] font-bold">1. DJ Booking</div>
            <div className="bg-[url(./assets/dj.png)] h-[17.58vh] w-[41.21vw] bg-no-repeat m-[3vh]"></div>
          </div>
          <div className="mr-[3vh]">
            From energetic party DJs to romantic wedding DJs, we have the
            perfect DJ to set the mood for your event.
          </div>
        </div>
        <div className="flex flex-row text-justify items-center">
          <div className="ml-[3vh]">
            Create a stunning atmosphere for any occasion without our themed
            decorations, balloon, arrangement, and floral designs.
          </div>
          <div className="flex flex-col">
            <div className="w-fit mx-[3vh] font-bold">2. Decoration</div>
            <div
              ref={RefVariable}
              className="bg-[url(./assets/decor.png)] h-[17.58vh] w-[41.21vw] bg-no-repeat m-[3vh]"
            ></div>
          </div>
        </div>
        <div className="flex flex-row text-justify items-center">
          <div className="flex flex-col">
            <div className="w-fit mx-[3vh] font-bold">3. Event Management</div>
            <div className="bg-[url(./assets/event.png)] h-[17.58vh] w-[41.21vw] bg-no-repeat m-[3vh]"></div>
          </div>
          <div className="mr-[3vh]">
            Take the stress out of planning your event with our experienced
            event managers who will handle everything from logistics to vendor
          </div>
        </div>

        <div className="my-[7vh] no-scrollbar">
          <div className="flex flex-row">
            <div className="text-2xl text-left ml-[3vh] basis-3/4">
              Services
            </div>
            <Link
              to="/services"
              style={{ color: "#B9B6B6" }}
              className="self-center text-[#B9B6B6]"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-row overflow-x-scroll  mt-[2vh] w-screen">
            {jsonData.map((item) => (
              <MyComponent key={item.id} data={item} />
            ))}
          </div>
        </div>

        <div className="my-[8vh]">
          <div className="text-2xl text-left ml-[3vh] basis-3/4">Gallery</div>
          <div className="flex flex-row overflow-x-scroll mt-[2vh] w-screen">
            {jsonData.map((item) => (
              <MyComponent2 key={item.id} data={item} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
