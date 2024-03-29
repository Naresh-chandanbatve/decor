import React, { useState, useEffect, useContext, lazy, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import Swiper from "swiper";
import axios from "axios";
import { FaCircleChevronRight } from "react-icons/fa6";
import LoadingOverlay from "../components/loading.jsx";
import load from "../assets/tube-spinner.svg";

const Navbar = lazy(() => import("../components/LandingPage/NavBar"));
const Sidebar = lazy(() => import("../components/LandingPage/SideBar"));
const Footer = lazy(() => import("../components/LandingPage/Footer"));

import { AuthContext } from "../App";

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

  const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

  const { setLoginType, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const userData = JSON.parse(decodeURIComponent(searchParams.get("userData")));
  if (userData) {
    localStorage.setItem("jwtToken", userData.token);
    setIsLoggedIn(true);
    if (userData.isAdmin) {
      setLoginType("admin");
    } else {
      setLoginType("user");
    }
  }

  // components
  const MyComponent = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true); // Track image loading state
    const [error, setError] = useState(false); // Track image loading error

    useEffect(() => {
      const image = new Image();
      image.src = data.img_url; // Initiate image loading

      image.onload = () => setIsLoading(false); // Set loading to false when loaded
      image.onerror = () => setError(true); // Set error state on loading error

      return () => {
        // Clean up event listeners on component unmount
        image.onload = null;
        image.onerror = null;
      };
    }, [data.img_url]);

    return (
      <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[219px] w-[197.6px] rounded-[20px] m-2 mb-3 drop-shadow-[0_3px_6px_rgba(0,0,0,0.23)]">
        {isLoading ? (
          <img
            src={load}
            className="h-[75%] bg-cover bg-center rounded-t-[20px] w-[197.6px] p-[6vh] bg-no-repeat"
          ></img>
        ) : (
          <img
            src={data.img_url}
            className="h-[75%] bg-cover bg-center rounded-t-[20px] w-[197.6px] bg-no-repeat"
          ></img>
        )}

        <div className="flex flex-col-reverse flex-grow justify-items-start">
          <div className="w-fit align-self-top mx-2 pb-2">₹ {data.price}</div>
          <div className="text-xs w-fit mx-2 text-left"> {data.title}</div>
        </div>
      </div>
    );
  };

  const MyComponent2 = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true); // Track image loading state
    const [error, setError] = useState(false); // Track image loading error

    useEffect(() => {
      const image = new Image();
      image.src = data.imagePath; // Initiate image loading

      image.onload = () => setIsLoading(false); // Set loading to false when loaded
      image.onerror = () => setError(true); // Set error state on loading error

      return () => {
        // Clean up event listeners on component unmount
        image.onload = null;
        image.onerror = null;
      };
    }, [data.imagePath]);

    return (
      <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[219px] rounded-[20px] m-2 mb-3 drop-shadow-[0_3px_6px_rgba(0,0,0,0.23)]">
        
        {isLoading ?<img
          src={load}
          className="h-[100%] bg-cover rounded-[20px] p-[8vh] bg-center w-[100%] bg-no-repeat"
        ></img> : <img
        src={data.imagePath}
        className="h-[100%] bg-cover rounded-[20px] bg-center w-[100%] bg-no-repeat"
      ></img>}
        
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
    ,
    {
      id: 4,
      title: "Merrage Sound System",
      price: "3000",
      imagePath: "/assets/dj-BPce03oC.png",
      description: "short one here",
    },
    // ... more data items
  ];

  const handleWhatsapp = () => {
    window.open("https://wa.me/8412025448", "_blank");
  };
  const handleCall = () => {
    window.open("tel:8412025448");
  };

  const RefVariable = useRef(null);

  const handleScroll = (ref) => {
    if (ref) {
      // Scroll to the top of the div with ref={ref}
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACK_URL}/service/all`);
        setServices(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        onClick={handleWhatsapp}
        className="fixed bottom-[30%] bg-cover bg-[url('./assets/whatsapp.png')] drop-shadow-[0_11px_10px_rgba(0,0,0,1.5)] right-0 z-50 h-[50px] w-[50px] m-2"
      />
      <div
        onClick={handleCall}
        className="fixed bottom-[22%] bg-cover bg-[url('./assets/call.png')] drop-shadow-[0_11px_10px_rgba(0,0,0,1.5)] right-0 z-50 h-[50px] w-[50px] m-2"
      />
      <div className="flex flex-col w-screen h-screen bg-cover bg-[url(./assets/2front.jpg)] opacity-35"></div>
      <div className="absolute mx-auto left-0 right-0 top-0 bg-contain z-0 bg-no-repeat self-center w-[76.8vw] h-[58.25vh]  bg-[url(./assets/frot.png)]"></div>
      <div className="absolute top-[50vh] w-screen h-[50vh] flex flex-col-reverse flex-grow items-center bottom-0 bg-gradient-to-t from-black from-30% via-black/48.4 via-10% to-transparent ">
        <Button
          background="#6CA18F"
          className="rounded-[16px] w-[46.66vw] h-[6.65vh] mt-[3vh] mb-[15vh] self-start ml-10"
          onClick={() => handleScroll(RefVariable)}
        >
          Explore
        </Button>
        <p className="text-3xl text-left font-sans font-bold mx-10">
          Capture the Ultimate Celebration Experience
        </p>
      </div>
      <Navbar toggleNav={toggleNav} />
      {isNav && <Sidebar toggleNav={toggleNav} isNav={isNav} />}
      <div className="relative top-0 h-fit bg-[#0A0E0D]">
        <p className="text-3xl pt-[8vh] mx-[3vh] text-white font-bold text-center">
          Our Services
        </p>

        <div className="w-[64.53vw] bg-[#6CA18F] h-[47.41vh] m-auto rounded-[23px]  bg-opacity-[16%] mt-[6vh]">
          <img
            src="https://raw.githubusercontent.com/Naresh-chandanbatve/decor/main/src/assets/djm.png"
            className="w-[51.46vw] h-[22.66vh] m-auto pt-5"
          ></img>
          <div className="text-xl font-bold text-[#EEEEEE] mt-3">
            DJ Booking
          </div>
          <div className="text-[#DDDDDD] text-[17px] mx-9 mt-2">
            From energetic party DJs to romantic wedding DJs, we have the
            perfect DJ to set the mood for your event.
          </div>
        </div>
        <div className="w-[64.53vw] bg-[#6CA18F] h-[47.41vh] m-auto rounded-[23px]  bg-opacity-[16%] mt-[6vh]">
          <img
            src="https://raw.githubusercontent.com/Naresh-chandanbatve/decor/main/src/assets/decorm.png"
            className="w-[51.46vw] h-[22.66vh] m-auto pt-5"
          ></img>
          <div className="text-xl font-bold text-[#EEEEEE] mt-3">
            Decoration
          </div>
          <div className="text-[#DDDDDD] text-[17px] mx-9 mt-2">
            Create a stunning atmosphere for any occasion with our themed
            balloon and floral decorations.
          </div>
        </div>
        <div className="w-[64.53vw] bg-[#6CA18F] h-[47.41vh] m-auto rounded-[23px]  bg-opacity-[16%] mt-[6vh]">
          <img
            src="https://raw.githubusercontent.com/Naresh-chandanbatve/decor/main/src/assets/eventm.png"
            className="w-[51.46vw] h-[22.66vh] m-auto pt-5"
          ></img>
          <div className="text-xl font-bold text-[#EEEEEE] mt-3">
            Event Management
          </div>
          <div
            className="text-[#DDDDDD] text-[17px] mx-9 mt-2"
            ref={RefVariable}
          >
            Enjoy the complete celebration by letting us plan your next event
            with our experienced team
          </div>
        </div>

        <div className="bg-[#131C19] mt-[14vh] pt-[6vh] pb-[15vh]">
          <div className="mb-[12vh] no-scrollbar">
            <div className="flex flex-row">
              <div className="text-2xl text-left ml-[3vh] basis-3/4">
                Top Deals
              </div>
              <Link
                to="/services"
                style={{ color: "#B9B6B6" }}
                className="self-center text-[#B9B6B6]"
              >
                View All
              </Link>
            </div>
            <div className="flex flex-row overflow-x-scroll  mt-[2vh] w-[95vw] m-auto">
              {services.map((item) => (
                <Link to={`/view?id=${item._id}`} style={{ color: "white" }}>
                  <MyComponent key={item._id} data={item} />
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <div className="text-2xl text-left ml-[3vh] basis-3/4">Gallery</div>
            <div className="flex flex-row overflow-x-scroll mt-[2vh] w-[95vw] m-auto">
              {jsonData.map((item) => (
                <MyComponent2 key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#26291D] pb-[14.97vh] pt-[7vh]">
          <div className="w-fit mx-4 text-left text-2xl mb-[6vh]">
            How can you book an order ?
          </div>
          <div className="flex flex-row justify-around ">
            <div
              className="bg-[#B0BDB9] bg-opacity-[16%] rounded-[17.42px] w-[41.98vw] h-[21.78vh] shadow-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
              onClick={() => handleScroll(RefVariable)}
            >
              <div className="text-left mx-4 mt-5 mb-2">
                Click on any above deals you like and Book order
              </div>
              <div className="flex flex-row items-center pl-4">
                <div className="text-[#83AAA2] ">View Deals</div>
                <FaCircleChevronRight
                  fill="#63827B"
                  className="bg-[#ffffff] rounded-full m-2"
                />
              </div>
            </div>
            {/* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */}
            <div
              className="bg-[#B0BDB9] bg-opacity-[16%] rounded-[17.42px] w-[41.98vw] h-[21.78vh] shadow-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
              onClick={handleCall}
            >
              <div className="text-left mx-4 mt-5 mb-2">
                Directly book an customized order on call/whatsapp
              </div>
              <div className="flex flex-row items-center pl-4">
                <div className="text-[#83AAA2]">Make a Call</div>
                <FaCircleChevronRight
                  fill="#63827B"
                  className="bg-[#ffffff] rounded-full m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
