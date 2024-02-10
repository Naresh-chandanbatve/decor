import React, { useState } from "react";
import { CloseIcon, Icon } from "@chakra-ui/icons";
import { IoPersonCircleSharp } from "react-icons/io5";
import {PiShoppingCartSimpleFill} from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

function Sidebar({toggleNav}) {
  return (
    <div className="absolute flex flex-col  bg-[#111C18] right-0 top-0 w-[74.66vw] h-screen">
      <CloseIcon onClick={toggleNav} boxSize={22} className="self-end m-5" />
      <div className="flex flex-row my-3">
        <Icon
          boxSize={30}
          as={IoPersonCircleSharp}
          className="justify-self-start mx-[8.21vw]"
        />
        <div className="text-lg">
        My Profile
        </div>
      </div>
      <div className="flex flex-row my-3">
        <Icon
          boxSize={30}
          as={PiShoppingCartSimpleFill}
          className="justify-self-start mx-[8.21vw]"
        />
        <div className="text-lg">
        Cart
        </div>
      </div>
      <div className="flex flex-row my-3">
        <Icon
          boxSize={30}
          as={BsFillHandbagFill}
          className="justify-self-start mx-[8.21vw]"
        />
        <div className="text-lg">
        My Orders
        </div>
      </div>
      <div className="flex flex-row my-3">
        <Icon
          boxSize={30}
          as={RiLogoutCircleLine}
          className="justify-self-start mx-[8.21vw]"
        />
        <div className="text-lg">
        Log Out
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
