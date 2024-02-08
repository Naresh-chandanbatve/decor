import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual client ID

const SignInButton = () => {
  const onSuccess = (response) => {
    console.log("Login successful:", response);
    // Handle successful login here, e.g., store user info in your app's state or redirect to a protected page
  };

  const onFailure = (error) => {
    console.error("Login failed:", error);
    // Handle login errors here, e.g., display an error message to the user
  };

  return (
    <GoogleLogin className="bg-primary"
      buttonText="Sign in with Google"
      style={{
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#6CA18F",
        border: "none",
        borderRadius: 4,
        padding: "8px 16px",
        cursor: "pointer",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default SignInButton;
