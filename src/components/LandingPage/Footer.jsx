import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#171E1C] bg-opacity-[42%] pb-[3vh]">
      <div>
        <Link to="https://wa.me/8412025448" style={{ color: "white" }}>
          <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
            Contact
          </div>
        </Link>
        <Link to="/aboutus" style={{ color: "white" }}>
          <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
            About Us
          </div>
        </Link>

        <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">Career</div>
        <Link to="/terms" style={{ color: "white" }}>
          <div className="border-b-[1px] border-[#8B8B8B] py-[1.5vh]">
            Terms and Conditions
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center m-3">
        <Link
          to="https://www.instagram.com/deejayraku_09"
          style={{ color: "white" }}
        >
          <FaInstagram size={35} className="m-4" />
        </Link>
        <Link to="https://wa.me/8412025448" style={{ color: "white" }}>
          <FaWhatsapp size={35} className="m-4" />
        </Link>
        <Link
          to="https://www.facebook.com/rakesh.pachare.1"
          style={{ color: "white" }}
        >
          <RiFacebookCircleLine size={35} className="m-4" />
        </Link>
        <Link to="tel:8412025448" style={{ color: "white" }}>
          <FiPhone size={30} className="m-4" />
        </Link>
      </div>
      {/* <div className="flex flex-row justify-between w-fit m-auto items-center"><div className="text-sm mx-1">+91 8412025448  {" | "} </div>  <div className="text-sm">pacharerakesh09@gmail.com</div></div> */}
      <div className="inline text-sm text-center ">
        ©2024 maintained by DJ Raku Decor and Sounds
        <Link to="/terms">
          <p className="inline text-[#88AAA3] w-fit">
            <br /> Terms and Condition{" "}
          </p>
        </Link>
        |
        <Link to="/privacy">
          {" "}
          <p className="inline text-[#88AAA3]">Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
