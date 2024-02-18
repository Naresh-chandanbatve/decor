import React ,{lazy}from "react";
const AboutUs = lazy( () => import("../components/AboutUs"));

function Aboutus() {
  return (
    <>
      <AboutUs />
    </>
  );
}

export default Aboutus;
