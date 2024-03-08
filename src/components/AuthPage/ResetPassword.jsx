import React, { useEffect, useState } from "react";
import { Input, Box, flexbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = decodeURIComponent(searchParams.get("token"));
  const [data, setData] = useState({});
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  async function handlesubmit(e) {
    e.preventDefault();

    const response = await axios.post(`${BACK_URL}/auth/reset`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response) {
      console.log(response);
      toast.success("Password reset successfully!", {
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
  }

  return (
    <>
      <ChevronLeftIcon
        viewBox="8 0 30 30"
        boxSize={60}
        float={"left"}
        className="mx-[2rem] mt-[3vh]"
      />
      <div className="w-fit text-2xl mt-[13vh] font-bold text-left mx-[2rem]">
        Reset Password
      </div>
      <div className="w-fit mt-[1vh] text-left text-[#b0b0b0] mx-[2rem]">
        Enter the new password you want to set for your account. this will reset
        your password.
      </div>
      <form id="form" onSubmit={handlesubmit}>
        <Input
          variant="outline"
          id="newPassword"
          name="newPassword"
          paddingLeft={20}
          placeholder="new password"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[5vh]"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#6CA18F"
          backgroundColor="black"
          alt="new password"
          onChange={handleChange}
        ></Input>
        <Input
          variant="outline"
          paddingLeft={20}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm new password"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[5vh]"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#6CA18F"
          backgroundColor="black"
          onChange={handleChange}
          alt="confirm new password"
        ></Input>
        <Button
          type="submit"
          background="#6CA18F"
          className="rounded-full w-[67.73vw] mt-[26vh]"
        >
          Reset
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
    </>
  );
}

export default ResetPassword;
