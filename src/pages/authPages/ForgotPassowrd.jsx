import React,{lazy} from "react";

const ForgotPassword = lazy( () => import("../../components/AuthPage/ForgotPassword"));

function forgotPassword() {
    return (
      <>
        <ForgotPassword />
      </>
    );
  }
  
  export default forgotPassword;