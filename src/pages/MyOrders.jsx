import React , {lazy}from "react";

const MyOrders = lazy( () => import("../components/MyOrders/MyOrders"));

function Myorders() {
  return (
    <>
      <MyOrders />
    </>
  );
}

export default Myorders;
