import React, { useState, lazy } from "react";


const SignInPage = lazy( () => import("../../components/AuthPage/SignInPage"));
const SignUpPage  = lazy( () => import("../../components/AuthPage/SignUpPage"));
function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-container">
      {isSignIn ? (
        <SignInPage toggleForm={toggleForm} />
      ) : (
        <SignUpPage toggleForm={toggleForm} />
      )}
    </div>
  );
}

function Auth() {
  return (
    <>
      <AuthForm />
    </>
  );
}

export default Auth;
