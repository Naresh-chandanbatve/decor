import React ,{lazy}from "react";
const ResetPassword = lazy( () => import("../../components/AuthPage/ResetPassword"));


function resetPassword() {
    return (
      <>
        <ResetPassword />
      </>
    );
  }
  
  export default resetPassword;