import React from "react";
import { Input, Box, flexbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  return (
    <>
      <Link to="/auth" style={{ color: "white" }}>
        <ChevronLeftIcon
          viewBox="8 0 30 30"
          boxSize={60}
          float={"left"}
          className="mx-[2rem] mt-[3vh]"
        />
      </Link>

      <div className="w-fit text-2xl mt-[14vh] font-bold text-left mx-[2rem]">
        Forgot Password
      </div>
      <div className="w-fit mt-[1vh] text-left text-[#b0b0b0] mx-[2rem]">
        Enter the email linked with your account below and we will send you
        reset link.
      </div>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="email"
        className="rounded-full h-[7.14vh] w-[81.86vw] mt-[5vh]"
        fontSize={20}
        borderWidth={1}
        focusBorderColor="#43675B"
        _placeholder={{ color: "#4D4D4D" }}
        borderColor="#6CA18F"
        backgroundColor="black"
        alt="email"
      ></Input>
      <Button
        background="#6CA18F"
        className="rounded-full w-[67.73vw] mt-[35vh]"
      >
        Continue
      </Button>
      <div className="text-sm text-center mt-[3vh] mx-[2rem]">
        Creating an account means that you agree with our{" "}
        <p className="inline text-[#88AAA3]">Terms and Condition </p>
        and <p className="inline text-[#88AAA3]">Privacy Policy</p>
      </div>
    </>
  );
}

export default ForgotPassword;
