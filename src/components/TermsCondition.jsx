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

function Terms() {
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
        <div className="mt-[10.75vh] text-left m-auto w-fit text-lg">
          Terms And Condition
        </div>
        <div className="text-justify mt-[2vh] mx-5">
          Welcome to DJ Sound Service! These Terms and Conditions ("Terms")
          govern your use of our website and the services we offer. By accessing
          or using our website, you agree to be bound by these Terms.
        </div>
        <div className="text-left mt-[5vh] mx-5">Services</div>
        <p className="mx-5 text-left mt-[2vh]">
          DJ Sound Service provides DJ services for events such as weddings,
          parties, and corporate functions. We offer a variety of music genres
          and packages to meet your needs.
        </p>
        <div className="text-justify mb-[5vh] mt-[2vh] mx-5">
          <ul>
            <div className="text-left mt-[5vh]">Use of Website</div>

            <li className="mt-[2vh]">
              This website is for your personal, non-commercial use. You may not
              modify, copy, distribute, transmit, display, perform, reproduce,
              publish, license, create derivative works from, transfer, or sell
              any information or content found on this website.
            </li>
            <br />
            <div className="text-left mt-[5vh] ">Content</div>
            <li className="mt-[2vh]">
              The content on this website, including text, graphics, logos,
              images, and software, is the property of DJ Sound Service or its
              licensors and is protected by copyright and other intellectual
              property laws.
            </li>
            <br />
            <div className="text-left mt-[5vh]">Booking and Payment</div>
            <li className="mt-[2vh]">
              To book our services, you will need to fill out a booking form and
              provide a deposit. The full payment will be due before the event.
              We accept various payment methods, which will be outlined during
              the booking process.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Terms;
