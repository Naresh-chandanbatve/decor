import React, {lazy} from "react";

const ViewService = lazy( () => import("../components/Service/ViewService"));

function Viewservice() {
    return (
      <>
        <ViewService />
      </>
    );
  }
  
  export default Viewservice;