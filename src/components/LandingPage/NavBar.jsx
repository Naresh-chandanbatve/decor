import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar({ toggleNav }) {
  return (
    <div className="fixed top-0 z-50 backdrop-blur-mdl grid grid-flow-col w-screen h-[7.38vh] bg-[rgb(19,19,19)] bg-opacity-[74%] items-center">
      <div className="flex flex-row items-center h-fit">
        <img
          src="https://github.com/Naresh-chandanbatve/decor/blob/main/src/assets/logo2.png"
          className="h-[7vw] w-[35vw] m-4"
        ></img>
      </div>

      <HamburgerIcon
        onClick={toggleNav}
        boxSize={40}
        color="#ffffff"
        className=" mx-2 justify-self-end hover:opacity-0"
      />
    </div>
  );
}

export default Navbar;
