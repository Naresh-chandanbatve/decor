import React from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import GoogleButton from "react-google-button";
import google from "../../assets/google.png";
import SignInButton from "./GoogleLogin";

function SignInPage() {
  return (
    <>
      <div>Sign In</div>
      <div>Welcome back! sign in to continue</div>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="email"
        className="rounded-full h-[7.14vh] w-[81.86vw]"
        fontSize={20}
        borderWidth={1}
        borderColor="#6CA18F"
        alt="email"
      ></Input>
      <Input
        variant="outline"
        paddingLeft={20}
        placeholder="password"
        className="rounded-full h-[7.14vh] w-[81.86vw]"
        fontSize={20}
        borderWidth={1}
        borderColor="#6CA18F"
        alt="password"
      ></Input>
      <p>forgot password</p>
      <Button background="#6CA18F" className="rounded-full w-[67.73vw]">
        Sign In
      </Button>
      <div className="flex flex-row items-center justify-center">
        <p>Don't have an account?</p>
        <p className="ml-2">sign up</p>
      </div>
      <div className="flex flex-row items-center justify-center">
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
      padding={0}
        background="#6CA18F"
        className="rounded-full w-fit"
      >
        <img
          src={google}
          className="rounded-full col-span-1"
        ></img>
        <p className="mx-4">
        Sign in with Google
        </p>
      </Button>
      <p className="text-sm col-span-3">
        Creating an account means that you agree with our Terms and Condition
        and Privacy Policy
      </p>
    </>
  );
}

export default SignInPage;
