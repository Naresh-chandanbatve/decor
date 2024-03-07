import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";
import axios from "axios";
import * as CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function SignInPage({ toggleForm }) {
  const nav = useNavigate();
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

  function encrypt(data, key) {
    return CryptoJS.AES.encrypt(data, key).toString();
  }

  function decrypt(data, key) {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${BACK_URL}/auth/signin`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        // Handle successful sign-in (e.g., store token, redirect)
        console.log("Sign-in successful!");
        const token = response.data.token;

        localStorage.setItem("jwtToken", token);
        // ... navigate to protected home page

        if (response.data.isAdmin) {
          setLoginType("admin");
          setIsLoggedIn(true);
          nav("/");
        } else {
          setLoginType("user");
          setIsLoggedIn(true);
          nav("/");
        }
      } else if (response.status === 400) {
        console.log("user not found");
        toast("User not Found", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
      } else {
        // Handle unexpected response status
        console.error("Unexpected response:", response.status);
        toast("Could not sign in! Please Login Again!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
      }
    } catch (error) {
      // Handle errors (e.g., network issues, invalid credentials)
      console.error("Sign-in error:", error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
      // ... display error message to user
    }
  }

  return (
    <>
      <div className="w-fit text-5xl mt-[10vh] font-bold mx-[2rem]">
        Sign In
      </div>
      <div className="w-fit mt-[1vh] mx-[2rem]">
        Welcome back! sign in to continue
      </div>
      <form onSubmit={handleSubmit}>
        <Input
        type="email"
          variant="outline"
          paddingLeft={20}
          placeholder="email"
          id="email"
          name="email"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[10vh]"
          fontSize={20}
          borderWidth={1}
          focusBorderColor="#43675B"
          _placeholder={{ color: "#4D4D4D" }}
          borderColor="#6CA18F"
          backgroundColor="black"
          alt="email"
          onChange={handleChange}
        ></Input>
        <Input
        type="password"
          variant="outline"
          paddingLeft={20}
          placeholder="password"
          name="password"
          id="password"
          className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
          fontSize={20}
          borderWidth={1}
          borderColor="#6CA18F"
          _placeholder={{ color: "#4D4D4D" }}
          backgroundColor="black"
          alt="password"
          onChange={handleChange}
        ></Input>
        <Link to="/forgot">
          <p className="text-[#88AAA3] mt-[1vh]">Forgot password</p>
        </Link>

        <Button
          background="#6CA18F"
          className="rounded-full w-[67.73vw] mt-[3vh]"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <div className="flex flex-row items-center justify-center mt-[1vh]">
        <p>Don't have an account?</p>
        <p className="ml-2 text-[#88AAA3]" onClick={toggleForm}>
          sign up
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-[3vh]">
        <Divider
          orientation="horizontal"
          background="#6CA18F"
          height={1}
          width="7.53vh"
        />
        <p className="px-3 basis-30">Or sign in with</p>
        <Divider
          orientation="horizontal"
          background="#6CA18F"
          height={1}
          width="7.53vh"
        />
      </div>
      <Button
        onClick={async () => {

          window.location.href = `${BACK_URL}/googleAuth/google`;

        }}
        padding={0}
        background="#6CA18F"
        className="rounded-full w-fit mt-[3vh]"
      >
        <img src={google} className="rounded-full col-span-1"></img>
        <p className="mx-4">Sign in with Google</p>
      </Button>
      <div className="text-sm text-center mt-[3vh] mx-[2rem]">
        Creating an account means that you agree with our{" "}
        <p className="inline text-[#88AAA3]">Terms and Condition </p>
        and <p className="inline text-[#88AAA3]">Privacy Policy</p>
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

export default SignInPage;
