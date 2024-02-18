import React , {lazy}from "react";
const MyCart  = lazy( () => import("../components/MyCart"));


function Mycart() {
return (
    <><MyCart/></>
)
}

export default Mycart;