import React from "react";
import { Input, Box, flexbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Footer from "../components/LandingPage/Footer";
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <>
    {/* 17201E */}
    {/*  */}
      <div className="flex flex-row w-screen bg-[#17201E] bg-opacity-[72%]">
        <Link to="/" style={{color:"white"}}><ChevronLeftIcon
          viewBox="8 0 30 30"
          boxSize={60}
          float={"left"}
          className="mx-[2rem] mt-[2vh] "
        /></Link>
        <div className="mt-[2vh] pt-[10px] text-2xl basis-3/4 text-left ml-[3vh]">
          Services
        </div>
      </div>
      <div className="flex flex-row w-[86vw] mx-auto overflow-x-scroll mt-[5vh]">
        <div className="w-[180.46px] h-[16.307vh] flex-shrink-0 bg-cover bg-[url('./assets/dj.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">DJ Events</div>
          </div>
        </div>
        <div className="w-[180.46px] h-[16.307vh] flex-shrink-0 bg-cover bg-[url('./assets/23.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">Birthday Decoration</div>
          </div>
        </div>
        <div className="w-[180.46px] h-[16.307vh] flex-shrink-0 bg-cover bg-[url('./assets/23.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">Birthday Decoration</div>
          </div>
        </div>
      </div>
      <div className="text-left w-fit ml-[6vw] mt-[4vh] mb-[1vh] text-md font-semibold">All Services</div>
      <div className="grid grid-cols-2 w-[93vw] h-[60vh] pb-[1vh] pt-[1vh] m-auto mb-[10vh] overflow-y-scroll justify-items-center">
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#1a2421] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 resize-none bg-[#202C29] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2">
          <img
            src="public/assets/dj-BPce03oC.png"
            className="h-[75%] bg-cover bg-center w-[197.6px] bg-no-repeat"
          ></img>
          <div className="flex flex-col-reverse flex-grow justify-items-start">
            <div className="w-fit align-self-top mx-2 pb-2">₹ 23,000</div>
            <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
              Simple kids Birthday Decoration
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
      
    </>
  );
}

export default ServicesPage;
