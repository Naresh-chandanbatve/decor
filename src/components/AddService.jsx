import React, { useState } from "react";
import { Input, Box, flexbox, border, Textarea } from "@chakra-ui/react";
import { InputGroup, Icon, InputLeftElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HiOutlineUpload } from "react-icons/hi";
import Footer from "./LandingPage/Footer";

function AddService() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedFile({ file, previewUrl });
    }
  };

  const defaultImageUrl = "../src/assets/23.png";

  return (
    <>
      <div className="flex flex-row w-screen bg-[#17201E] bg-opacity-[72%]">
        {" "}
        <ChevronLeftIcon
          viewBox="8 0 30 30"
          boxSize={60}
          float={"left"}
          className="mx-[2.4rem] mt-[2vh]"
        />
      </div>

      <div>
        {
          <div className="pt-[5vh] h-fit">
            <img
              src={selectedFile?.previewUrl || defaultImageUrl}
              alt="Preview"
              className="h-[34.11vh] w-[80vw] mx-[auto]"
            />
            {/* <span>File name: {selectedFile?.file.name}</span> */}
          </div>
        }
        <div aria-labelledby="fileInputLabel" className="mt-[2vh]">
          <label
            for="upload"
            id="fileInputLabel"
            className="rounded-xl bg-[#B0BDB9] text-lg px-[29vw] font-semibold py-[1vh] text-black"
          >
            <IconButton
              variant="ghost"
              background="transparent"
              backgroundColor="transparent"
              onClick={() => document.getElementById("upload").click()}
              _focus={{
                outline: "none",
                border: "none",
              }}
              icon={<HiOutlineUpload size={20} className="mx-1" />}
            />
            Upload
          </label>
        </div>

        <Input
          accept="image/*"
          onChange={handleFileChange}
          type="file"
          hidden="true"
          name="name"
          id="upload"
        />
      </div>
      <label className="flex flex-col px-9 mt-[5vh] text-left">
        Title
        <Input
          variant="outline"
          className="rounded-2xl h-[7.14vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#696969"
          backgroundColor="black"
          alt="email"
        ></Input>
      </label>

      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Catagory
        <Input
          variant="outline"
          className="rounded-2xl h-[7.14vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#696969"
          backgroundColor="black"
          alt="email"
        ></Input>
      </label>
      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Price
        <Input
          variant="outline"
          className="rounded-2xl h-[7.14vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#696969"
          backgroundColor="black"
          alt="email"
        ></Input>
      </label>
      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Description
        <Textarea
          variant="outline"
          className="rounded-2xl h-[30vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#696969"
          backgroundColor="black"
          style={{
            lineHeight: "1.9 em",
            paddingTop: "5px",
          }}
        />
      </label>

      <Button
        background="#6CA18F"
        className="rounded-full w-[67.73vw] mt-[5vh] mb-[10vh]"
      >
        Add Service
      </Button>
      <Footer />
    </>
  );
}

export default AddService;
