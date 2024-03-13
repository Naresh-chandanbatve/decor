import React from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import google from "../../assets/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import LoadingOverlay from "../loading";
import { Link } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function SignUpPage({ toggleForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginType, setIsLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await axios.post(`${BACK_URL}/auth/signup`, formData);

      if (response.status === 201) {
        // Handle successful sign-in (e.g., store token, redirect)
        console.log("Sign-up successful!");

        toast.success("Account created successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        toggleForm();
      } else if (response.status === 400) {
        console.log("user not found");
      } else {
        // Handle unexpected response status
        console.error("Unexpected response:", response.status);
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      toast(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="w-fit text-5xl mt-[4vh] font-bold mx-[2rem]">Sign Up</div>
      <div className="w-fit mt-[1vh] mx-[2rem]">
        Create an account to get started
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          variant="outline"
          paddingLeft={20}
          placeholder="name"
          id="name"
          name="name"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[4vh]"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#6CA18F"
          backgroundColor="black"
          onChange={handleChange}
          alt="name"
        ></Input>
        <Input
          type="email"
          variant="outline"
          paddingLeft={20}
          id="email"
          name="email"
          placeholder="email"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
          fontSize={20}
          borderWidth={1}
          borderColor="#6CA18F"
          _placeholder={{ color: "#4D4D4D" }}
          backgroundColor="black"
          alt="email"
          onChange={handleChange}
        ></Input>
        <Input
          type="password"
          variant="outline"
          paddingLeft={20}
          placeholder="password"
          id="password"
          name="password"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
          fontSize={20}
          borderWidth={1}
          borderColor="#6CA18F"
          _placeholder={{ color: "#4D4D4D" }}
          backgroundColor="black"
          alt="password"
          onChange={handleChange}
        ></Input>
        <Input
          type="password"
          variant="outline"
          paddingLeft={20}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
          fontSize={20}
          borderWidth={1}
          borderColor="#6CA18F"
          _placeholder={{ color: "#4D4D4D" }}
          backgroundColor="black"
          alt="confirm password"
          onChange={handleChange}
        ></Input>
        <Button
          background="#6CA18F"
          className="rounded-full w-[67.73vw] mt-[3vh]"
          type="submit"
        >
          Create an Account
        </Button>
      </form>
      <div className="flex flex-row items-center justify-center mt-[1vh]">
        <p>Already have an account?</p>
        <p className="ml-2 text-[#88AAA3]" onClick={toggleForm}>
          sign in
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-[3vh]">
        <Divider
          orientation="horizontal"
          background="#6CA18F"
          height={1}
          width="7.53vh"
        />
        <p className="px-3 basis-30">Or sign up with</p>
        <Divider
          orientation="horizontal"
          background="#6CA18F"
          height={1}
          width="7.53vh"
        />
      </div>
      <Button
        onClick={() => {
          window.location.href = `${BACK_URL}/googleAuth/google`;
        }}
        padding={0}
        background="#6CA18F"
        className="rounded-full w-fit mt-[3vh]"
      >
        <img src={google} className="rounded-full col-span-1"></img>
        <p className="mx-4">Sign up with Google</p>
      </Button>
      <div className="text-sm text-center mt-[3vh] mx-[2rem]">
        Creating an account means that you agree with our{" "}
        <Link to="/terms">
          <p className="inline text-[#88AAA3]">Terms and Condition </p>
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
      {isLoading && <LoadingOverlay isOpen={isLoading} />}
    </>
  );
}

export default SignUpPage;
