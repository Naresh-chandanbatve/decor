import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { MdEdit } from "react-icons/md";
import { Input, Textarea, Button } from "@chakra-ui/react";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost";
const PORT = import.meta.env.VITE_PORT || 5000;

function MyProfile() {
  const [isEditEnabled, setIsEditEnabled] = useState(true);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(
      `${BACK_URL}:${PORT}/user/add`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if(response.data){
      console.log("profile updated successfully");
    }
    else {
      console.log("error updating profile");
    }

  }

  return (
    <div className="h-fit bg-[#0A0E0D]">
      <div className="flex flex-row w-screen  bg-opacity-[72%] justify-between">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 0 30 30"
            color="white"
            fill="white"
            boxSize={60}
            float={"left"}
            className="mx-[2rem] mt-[2vh]"
          />
        </Link>
        <div className="mt-[2vh] pt-[10px] text-xl basis-3/4 text-left ml-[3vh]">
          My Profile
        </div>
        <Link
          style={{ color: "white" }}
          className="flex justify-center items-center mx-[2vh]"
        >
          <MdEdit
            color="white"
            fill="white"
            onClick={() => setIsEditEnabled(!isEditEnabled)}
            size={30}
            className=" "
          />
        </Link>
      </div>

      <img
        src="/assets/dj-BPce03oC.png"
        className="m-auto rounded-full w-[35.73vw] h-[35.73vw] mt-[4vh]"
      ></img>
      <form onSubmit={handleSubmit}>
      <div className="text-2xl font-bold mt-[2vh]">Name Lastname</div>
      <label className="flex flex-col px-9 mt-[2vh] text-left">
        Username
        <Input
          disabled={isEditEnabled}
          variant="outline"
          id="name"
          name="name"
          onChange={handleChange}
          fontSize={20}
          borderWidth={1}
          backdropFilter={{ opacity: 0.0 }}
          focusBorderColor="#43675B"
          placeholder="@username"
          borderColor="#696969"
          _placeholder={{ color: "white" }}
          backgroundColor="#101614"
          className="rounded-2xl h-[6.14vh] w-[81.86vw] bg-opacity-15 mt-2 px-3"
          alt="email"
        ></Input>
      </label>

      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Phone
        <Input
          disabled={isEditEnabled}
          variant="outline"
          id="phone"
          name="phone"
          onChange={handleChange}
          className="rounded-2xl h-[6.14vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          placeholder="+91 7447557386"
          _placeholder={{ color: "white" }}
          borderColor="#696969"
          backgroundColor="#101614"
          alt="email"
        ></Input>
      </label>
      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Mail
        <Input
          disabled={isEditEnabled}
          id="email"
          name="email"
          onChange={handleChange}
          variant="outline"
          className="rounded-2xl h-[6.14vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          placeholder="chandanbatven@gmail.com"
          focusBorderColor="#43675B"
          _placeholder={{ color: "white" }}
          borderColor="#696969"
          backgroundColor="#101614"
          alt="email"
        ></Input>
      </label>
      <label className="flex flex-col px-9 mt-[3vh] text-left">
        Address
        <Textarea
          disabled={isEditEnabled}
          variant="outline"
          id="address"
          name="address"
          onChange={handleChange}
          className="rounded-2xl h-[12vh] w-[81.86vw] mt-2 px-3"
          fontSize={20}
          borderWidth={1}
          placeholder="koka Jungle, Bhandara, 441904"
          focusBorderColor="#43675B"
          _placeholder={{ color: "white" }}
          borderColor="#696969"
          backgroundColor="#101614"
          style={{
            lineHeight: "1.9 em",
            paddingTop: "5px",
          }}
        />
      </label>

      {!isEditEnabled && (
        <Button
        type="submit"
          background="#6CA18F"
          className={`${isEditEnabled ? "" : "hidden"} rounded-full w-[67.73vw] mt-[5vh] mb-[10vh]`}
        >
          Update Profile
        </Button>
      )}
      </form>
    </div>
  );
}

export default MyProfile;
