import React, { useState } from "react";
import {
  Input,
  Box,
  Divider,
  flexbox,
  border,
  Textarea,
} from "@chakra-ui/react";
import { InputGroup, Icon, InputLeftElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HiOutlineUpload } from "react-icons/hi";
import Footer from "../LandingPage/Footer";

function ViewService() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedFile({ file, previewUrl });
    }
  };

  const defaultImageUrl = "/assets/23-CYX5G_Ke.png";

  return (
    <div className=" h-screen bg-gradient-to-tl from-[#1A1F1D] from-20% via-[#0A0E0D]/88 via-60% to-[#0A0E0D]/81">
      <div className="flex flex-row w-screen bg-[#17201E] bg-opacity-[72%]">
        <ChevronLeftIcon
          viewBox="8 -4 30 30"
          boxSize={60}
          float={"left"}
          className="mx-4"
        />
      </div>

      <img
        src={selectedFile?.previewUrl || defaultImageUrl}
        alt="Preview"
        className="h-[34.11vh] mt-9 w-[94vw] mx-3"
      />

      <div className="flex flex-row items-center justify-between mx-3 mt-4">
        <div className="text-xl font-semibold">Small Birthday Decor</div>
        <div className="text-sm ">Birthday Decoration</div>
      </div>

      <Divider
        orientation="horizontal"
        background="#3E3E3E"
        height={1}
        width="screen"
        className="mx-3 mt-[5vh]"
      />

      <div className="mx-3 mb-10">
        <div className="text-left text-xl mt-3 font-semibold">Description</div>
        <div className="text-justify text-sm">
          This is temporrary deschoif where you dont know any thing here tis
          thaat This is temporrary deschoif where you dont know any thing here
          tis thaat This is temporrary deschoif where you dont know any thing
          here tis thaat This is temporrary deschoif where you dont know any
          thing here tis thaat
        </div>
      </div>
      <Divider
        orientation="horizontal"
        background="#3E3E3E"
        height={1}
        width="screen"
        className="mx-3 mb-4"
      />

      <div className="flex flex-row mx-3 justify-between ">
        <div className="text-3xl font-semibold">₹ 23,000</div>
        <Button
          background="#6CA18F"
          className="rounded-2xl w-[47.73vw] text-xl py-[1.5vh] mb-[10vh]"
        >
          Book Order
        </Button>
      </div>

    </div>
  );
}

export default ViewService;
