import React, {lazy} from "react";

const ViewService = lazy( () => import("../components/Service/ViewService"));

function paymentSucess() {
    return (
      <>
        <ViewService />
      </>
    );
  }
  
  export default paymentSucess;