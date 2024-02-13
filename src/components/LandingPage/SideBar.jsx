import React, { useState } from "react";
import { CloseIcon, Icon } from "@chakra-ui/icons";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

function Sidebar({ toggleNav }) {
  return (
    <div className="fixed flex flex-col z-50 bg-[#111C18] bg-opacity-[93%] bckdrop-blur-md right-0 top-0 w-[74.66vw] h-screen">
      <CloseIcon onClick={toggleNav} boxSize={22} className="self-end m-5" />
      <div className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]">
        <Icon
          boxSize={30}
          as={IoPersonCircleSharp}
          className="justify-self-start mx-[4vw]"
        />
        <div className="text-lg mx-[4vw]">My Profile</div>
      </div>
      <div className="flex flex-row my-3  mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]">
        <Icon
          boxSize={30}
          as={PiShoppingCartSimpleFill}
          className="justify-self-start mx-[4vw]"
        />
        <div className="text-lg mx-[4vw]">Cart</div>
      </div>
      <div className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]">
        <Icon
          boxSize={30}
          as={BsFillHandbagFill}
          className="justify-self-start mx-[4vw]"
        />
        <div className="text-lg mx-[4vw]">My Orders</div>
      </div>
      <div className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]">
        <Icon
          boxSize={30}
          as={RiLogoutCircleLine}
          className="justify-self-start mx-[4vw]"
        />
        <div className="text-lg mx-[4vw]">Log Out</div>
      </div>
    </div>
  );
}

export default Sidebar;
