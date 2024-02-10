import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar({ toggleNav }) {
  return (
    <div className="grid grid-flow-col w-screen h-[7.38vh] bg-[rgb(102,102,102)] bg-opacity-[14%] items-center">
      <p className="justify-self-start m-4">Raku Sounds and decor</p>

      <HamburgerIcon
        onClick={toggleNav}
        boxSize={40}
        color="#ffffff"
        className=" mx-2 justify-self-end"
      />
    </div>
  );
}

export default Navbar;
