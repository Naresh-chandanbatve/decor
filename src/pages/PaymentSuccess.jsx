import React, {lazy} from "react";

const PaymentSuccess = lazy( () => import("../components/PaymentSuccess.jsx"));

function paymentSucess() {
    return (
      <>
        <PaymentSuccess />
      </>
    );
  }
  
  export default paymentSucess;