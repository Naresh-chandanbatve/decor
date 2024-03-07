import React from "react";
import success from "../assets/success.json";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: success,
  renderer: "svg"
};

function PaymentSuccess() {
  return (
    <div className="h-screen w-screen">
      <Lottie
        options={defaultOptions}
        height="100%"
        width={350}
        speed={0.2}
      ></Lottie>
    </div>
  );
}

export default PaymentSuccess;
