import React, {lazy} from "react";

const MyProfile = lazy( () => import("../components/MyProfile"));

function Myprofile() {
  return (
    <>
      <MyProfile />
    </>
  );
}

export default Myprofile;
