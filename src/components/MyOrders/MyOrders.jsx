import React, { useState, useContext } from "react";

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
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { AuthContext } from "../../App";
function MyOrders() {
  const [activeState, setActiveState] = useState(true); // Initially set the active link
  const { loginType, setLoginType, isLoggedIn, setIsLoggedIn } =
  useContext(AuthContext);
  
  const handleStateClick = () => {
    setActiveState(!activeState);
  };
  return (
    <div className="bg-[#0D1412] h-screen">
      <div className="flex flex-row w-screen  bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 0 30 30"
            color="white"
            fill="white"
            boxSize={60}
            float={"left"}
            className="mx-[2rem] mt-[2.5vh]"
          />
        </Link>
        <div className="mt-[2vh] pt-[10px] text-2xl basis-3/4 text-left ml-[3vh]">
          My Orders
        </div>
      </div>
      {/* className="" */}
      <nav className=" text-white flex flex-row justify-between items-center">
        <div
          className={`${
            activeState
              ? "nav-link text-xl active text-[#E4E4E4] hover:text-[#E4E4E4] "
              : "nav-link text-xl text-[#666666] "
          }transition-all duration-300`}
          onClick={() => handleStateClick()}
        >
          Active
          <Divider
            width="25vw"
            className={`${
              activeState ? "" : "hidden"
            } bg-[#E4E4E4]  h-[0.1vh] mx-auto`}
          />
        </div>
        <div
          className={`${
            !activeState
              ? "nav-link text-xl text-[#E4E4E4] hover:text-[#E4E4E4] "
              : "nav-link text-xl text-[#666666] "
          } transition-all duration-300`}
          onClick={() => handleStateClick()}
        >
          Past
          <Divider
            width="25vw"
            className={`${
              !activeState ? "" : "hidden"
            } bg-[#E4E4E4] h-[0.1vh] mx-auto`}
          />
        </div>
      </nav>
      <Divider width="95vw" className="bg-[#515151] h-[.10vh] m-auto" />

      {activeState ? <Active /> : <Past />}
    </div>
  );
}

export default MyOrders;
