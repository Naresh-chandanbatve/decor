import React, { useState } from "react";
import Navbar from "../components/LandingPage/NavBar";
import Sidebar from "../components/LandingPage/SideBar";
import { Button } from "@chakra-ui/react";
import bg from "../assets/main_bg.jpeg";

function LandingPage() {
  const [isNav, setIsNav] = useState(false);
  const toggleNav = () => {
    setIsNav(!isNav);
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-cover bg-[url(./assets/main_bg.jpeg)] bg-opacity-25">
        <Navbar toggleNav={toggleNav} />

        <div className="bg-contain z-0 bg-no-repeat self-center w-[76.8vw] h-[58.25vh]  bg-[url(./assets/front.png)]"></div>
        <div className="w-screen h-[50vh] flex-grow  items-end bg-gradient-to-t from-black from-30% via-black/48.4 via-10% to-transparent ">
          <p className="text-3xl font-sans font-bold m-5 mx-10">
            Elevate your Celebrations with DJ Raku Sounds and Decor
          </p>
          <Button
            background="#6CA18F"
            className="rounded-full w-[67.73vw] mt-[1vh]"
          >
            Explore
          </Button>
        </div>

        {isNav ? <Sidebar toggleNav={toggleNav} /> : <></>}
      </div>
    </>
  );
}

export default LandingPage;
