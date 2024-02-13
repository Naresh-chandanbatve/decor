import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    // 171E1C
    // 322D2D
    <div className="bg-[#171E1C] bg-opacity-[42%] pb-[3vh]">
      <div>
        <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
          Contact
        </div>
        <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
          About Us
        </div>
        <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">Career</div>
        <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
          Terms and Conditions
        </div>
      </div>
      <div className="flex flex-row items-center justify-center m-3">
        <FaInstagram size={35} className="m-4" />
        <FaWhatsapp size={35} className="m-4" />
        <RiFacebookCircleLine size={35} className="m-4" />
      </div>
      <div className="inline text-sm text-center ">
        ©2024 maintained by DJ Raku Decor and Sounds
        <p className="inline text-[#88AAA3] w-fit">
          <br /> Terms and Condition{" "}
        </p>
        | <p className="inline text-[#88AAA3]">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
