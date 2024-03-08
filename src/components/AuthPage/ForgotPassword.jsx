import React, { useState } from "react";
import { Input, Box, flexbox, useStatStyles } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function ForgotPassword() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setEmail] = useState({
    email: "",
  });
  const handleChange = (event) => {
    setEmail({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  async function handlesubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(`${BACK_URL}/auth/forgot`, {
        email: data.email,
      });
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Failed to send the reset link", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Failed to send the reset link", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    finally{
      setIsLoading(false);
    }
  }
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
      <form onSubmit={handlesubmit}>
        <Input
          variant="outline"
          paddingLeft={20}
          id="email"
          name="email"
          placeholder="email"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[5vh]"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#6CA18F"
          backgroundColor="black"
          onChange={handleChange}
          alt="email"
        ></Input>
        <Button
          type="submit"
          background="#6CA18F"
          className="rounded-full w-[67.73vw] mt-[35vh]"
        >
          Continue
        </Button>
      </form>
      <div className="text-sm text-center mt-[3vh] mx-[2rem]">
        Creating an account means that you agree with our
        <Link to="/terms">
          <p className="inline text-[#88AAA3]"> Terms and Condition </p>
        </Link>
        and{" "}
        <Link to="/privacy">
          <p className="inline text-[#88AAA3]">Privacy Policy</p>
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      {isLoading && <LoadingOverlay isOpen={isLoading}/>}
    </>
  );
}

export default ForgotPassword;
