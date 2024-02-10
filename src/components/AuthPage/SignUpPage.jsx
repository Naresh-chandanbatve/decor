import React from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import google from "../../assets/google.png";

function SignUpPage({ toggleForm }) {
  return (
    <>
      <div className="w-fit text-5xl mt-[4vh] font-bold mx-[2rem]">Sign Up</div>
      <div className="w-fit mt-[1vh] mx-[2rem]">Create an account to get started</div>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="name"
        className="rounded-full h-[7.14vh] w-[81.86vw] mt-[4vh]"
        fontSize={20}
        borderWidth={1}
        focusBorderColor="#43675B"
        _placeholder={{ color: "#4D4D4D" }}
        borderColor="#6CA18F"
        backgroundColor="black"
        alt="name"
      ></Input>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="email"
        className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
        fontSize={20}
        borderWidth={1}
        borderColor="#6CA18F"
        _placeholder={{ color: "#4D4D4D" }}
        backgroundColor="black"
        alt="email"
      ></Input>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="password"
        className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
        fontSize={20}
        borderWidth={1}
        borderColor="#6CA18F"
        _placeholder={{ color: "#4D4D4D" }}
        backgroundColor="black"
        alt="password"
      ></Input>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="confirm password"
        className="rounded-full h-[7.14vh] w-[81.86vw] mt-[2vh]"
        fontSize={20}
        borderWidth={1}
        borderColor="#6CA18F"
        _placeholder={{ color: "#4D4D4D" }}
        backgroundColor="black"
        alt="confirm password"
      ></Input>
      <Button
        background="#6CA18F"
        className="rounded-full w-[67.73vw] mt-[3vh]"
      >
        Create an Account
      </Button>
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
        padding={0}
        background="#6CA18F"
        className="rounded-full w-fit mt-[3vh]"
      >
        <img src={google} className="rounded-full col-span-1"></img>
        <p className="mx-4">Sign up with Google</p>
      </Button>
      <div className="text-sm text-center mt-[3vh] mx-[2rem]">
        Creating an account means that you agree with our{" "}
        <p className="inline text-[#88AAA3]">Terms and Condition </p>
        and <p className="inline text-[#88AAA3]">Privacy Policy</p>
      </div>
    </>
  );
}

export default SignUpPage;
