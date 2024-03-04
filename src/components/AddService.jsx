import React, { useState, useContext } from "react";
import { Input, Box, flexbox, border, Textarea } from "@chakra-ui/react";
import { InputGroup, Icon, InputLeftElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HiOutlineUpload } from "react-icons/hi";
import Footer from "./LandingPage/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function AddService() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { loginType, setLoginType, setIsLoggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  const handleFileChange = (event) => {
    if (event.target.name === "image") {
      const file = event.target.files[0];
      console.log(event.target);
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setSelectedFile({ file, previewUrl });
        setFormData({
          ...formData,
          [event.target.name]: event.target.files[0],
        });
      }
    }
  };

  const [formData, setFormData] = useState({
    img_url: "",
    title: "",
    catagory: "",
    price: "",
    description: "",
    image: null,
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("image", formData.image);
    formdata.append("title", formData.title);
    formdata.append("catagory", formData.catagory);
    try {
      const response = await axios.post(
        `${BACK_URL}/service/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        // Handle successful sign-in (e.g., store token, redirect)
        console.log("Sign-in successful!", response);
        // const token = response.data.token;

        // const encryptedToken = encrypt(token, "your_secure_key");
        // localStorage.setItem("jwtToken", encryptedToken);
        // // ... navigate to protected home page
        // if (response.data.isAdmin) {
        //   setLoginType("admin");
        //   setIsLoggedIn(true);
        //   nav("/");
        // } else {
        setLoginType(loginType);
        nav("/");
        // }
      } else if (response.status === 400) {
        console.log("user not found");
      } else {
        // Handle unexpected response status
        console.error("Unexpected response:", response.status);
      }
    } catch (error) {
      // Handle errors (e.g., network issues, invalid credentials)
      console.error("Sign-in error:", error);
      // ... display error message to user
    }
  }

  const defaultImageUrl = "/assets/23-CYX5G_Ke.png";

  return (
    <>
      <div className="flex flex-row w-screen bg-[#17201E] bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 0 30 30"
            boxSize={60}
            float={"left"}
            className="mx-[2.4rem] mt-[2vh]"
          />
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
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
              for="image"
              id="fileInputLabel"
              className="rounded-xl bg-[#B0BDB9] text-lg px-[29vw] font-semibold py-[1vh] text-black"
            >
              <IconButton
                variant="ghost"
                background="transparent"
                backgroundColor="transparent"
                onClick={() => document.getElementById("image").click()}
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
            name="image"
            id="image"
          />
        </div>
        <label className="flex flex-col px-9 mt-[5vh] text-left">
          Title
          <Input
            variant="outline"
            name="title"
            id="title"
            className="rounded-2xl h-[7.14vh] w-[81.86vw] mt-2 px-3"
            fontSize={20}
            borderWidth={1}
            focusBorderColor="#43675B"
            _placeholder={{ color: "#4D4D4D" }}
            borderColor="#696969"
            backgroundColor="black"
            onChange={handleChange}
            alt="email"
          ></Input>
        </label>

        <label className="flex flex-col px-9 mt-[3vh] text-left">
          Catagory
          <select
            variant="outline"
            name="catagory"
            id="catagory"
            className="rounded-2xl h-[7.14vh] w-[81.86vw] bg-black border-[#696969] border-[1px] mt-2 px-3"
            fontSize={20}
            focusBorderColor="#43675B"
            onChange={handleChange}
            _placeholder={{ color: "#4D4D4D" }}
            alt="email"
          >
            <option value="">Select a Category</option>
            <option value="Decoration">Decoration</option>
            <option value="Sound">Sound Management</option>
            <option value="Event">Event Management</option>
          </select>
        </label>
        <label className="flex flex-col px-9 mt-[3vh] text-left">
          Price
          <Input
            variant="outline"
            name="price"
            id="price"
            type="number"
            className="rounded-2xl h-[7.14vh] w-[81.86vw] mt-2 px-3"
            fontSize={20}
            borderWidth={1}
            focusBorderColor="#43675B"
            _placeholder={{ color: "#4D4D4D" }}
            borderColor="#696969"
            onChange={handleChange}
            backgroundColor="black"
            alt="email"
          ></Input>
        </label>
        <label className="flex flex-col px-9 mt-[3vh] text-left">
          Description
          <Textarea
            variant="outline"
            name="description"
            id="description"
            className="rounded-2xl h-[30vh] w-[81.86vw] mt-2 px-3"
            fontSize={20}
            borderWidth={1}
            focusBorderColor="#43675B"
            _placeholder={{ color: "#4D4D4D" }}
            borderColor="#696969"
            onChange={handleChange}
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
          type="submit"
        >
          Add Service
        </Button>
      </form>
      <Footer />
    </>
  );
}

export default AddService;
