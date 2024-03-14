import React, {lazy} from "react";

const ViewOrder = lazy( () => import("../components/Service/viewOrder.jsx?t=${Date.now()}"));

function Vieworder() {
    return (
      <>
        <ViewOrder />
      </>
    );
  }
  
  export default Vieworder;