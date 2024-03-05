import React, {lazy} from "react";

const ViewOrder = lazy( () => import("../components/Service/viewOrder.jsx"));

function Vieworder() {
    return (
      <>
        <ViewOrder />
      </>
    );
  }
  
  export default Vieworder;