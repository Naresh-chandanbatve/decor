import React, { useState } from "react";

import SignInPage from "../../components/AuthPage/SignInPage";
import SignUpPage from "../../components/AuthPage/SignUpPage";

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
