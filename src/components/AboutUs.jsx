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

function AboutUs() {
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
        <div className="mt-[10.75vh] text-left mx-5">About Us </div>
        <div className="text-justify mt-[2vh] mx-5">
          More than decorators and sound engineers, we are experience
          architects. We meticulously blend sight and sound to transform your
          aspirations into unforgettable realities. From intimate gatherings to
          grand celebrations, we elevate your events with meticulous
          craftsmanship, innovative solutions, and unwavering dedication.
        </div>
        <div className="text-left mt-[5vh] mx-5">What Sets Us Apart</div>
        <div className="text-justify mb-[5vh] mt-[2vh] mx-5">
          <ul>
            <li>
              Passionate and Talented Team: Our team consists of experienced
              decorators and sound technicians who are dedicated to their craft.
              We are creative thinkers, problem solvers, and meticulous in our
              execution.
            </li>
            <br />
            <li>
              Unmatched Service: We go the extra mile to understand your unique
              needs and preferences. We offer personalized consultations,
              seamless planning, and reliable execution, ensuring your event
              runs smoothly and stress-free.
            </li>
            <br />
            <li>
              Extensive Inventory: We boast a diverse collection of high-quality
              décor and sound equipment. From elegant drapes and lighting to
              crystal-clear sound systems and special effects, we have
              everything you need to create the perfect ambiance.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
