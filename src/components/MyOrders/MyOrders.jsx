import React, { useState } from "react";

import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Input,
  Box,
  Divider,
  flexbox,
  border,
  Textarea,
} from "@chakra-ui/react";
import Active from "./Active";
import Past from "./Past";
import { InputGroup, Icon, InputLeftElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HiOutlineUpload } from "react-icons/hi";
import Footer from "../LandingPage/Footer";

function MyOrders() {
  const [activeLink, setActiveLink] = useState("/"); // Initially set the active link

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className="bg-[#0D1412] h-screen">
      <div className="flex flex-row w-screen  bg-opacity-[72%]">
        <ChevronLeftIcon
          viewBox="8 0 30 30"
          boxSize={60}
          float={"left"}
          className="mx-[2rem] mt-[2vh] "
        />
        <div className="mt-[2vh] pt-[10px] text-2xl basis-3/4 text-left ml-[3vh]">
          My Orders
        </div>
      </div>
      {/* className="" */}
      <Router>
        <nav className=" text-white flex flex-row justify-between items-center">
          <Link
            to="/"
            className={`${
              activeLink === "/"
                ? "nav-link text-xl active text-[#E4E4E4] hover:text-[#E4E4E4] "
                : "nav-link text-xl text-[#666666] "
            }transition-all duration-300`}
            onClick={() => handleLinkClick("/")}
          >
            Active
            <Divider
              width="25vw"
              className={`${
                activeLink === "/" ? "" : "hidden"
              } bg-[#E4E4E4]  h-[0.1vh] mx-auto`}
            />
          </Link>
          <Link
            to="/past"
            className={`${
              activeLink === "/past"
                ? "nav-link text-xl text-[#E4E4E4] hover:text-[#E4E4E4] "
                : "nav-link text-xl text-[#666666] "
            } transition-all duration-300`}
            onClick={() => handleLinkClick("/past")}
          >
            Past
            <Divider
              width="25vw"
              className={`${
                activeLink === "/past" ? "" : "hidden"
              } bg-[#E4E4E4] h-[0.1vh] mx-auto`}
            />
          </Link>
        </nav>
        <Divider width="95vw" className="bg-[#515151] h-[.10vh] m-auto" />
        <Routes>
          <Route path="/" element={ <Active/>} />
          <Route path="/past" element={ <Past/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default MyOrders;
