import React, {lazy} from "react";

const AddService  = lazy( () => import("../components/AddService.jsx"));

function Addservice() {
    return (
      <>
        <AddService />
      </>
    );
  }
  
  export default Addservice;