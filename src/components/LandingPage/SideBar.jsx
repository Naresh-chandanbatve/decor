import React from "react";
import { CloseIcon, Icon } from "@chakra-ui/icons";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../App";
import { AiFillFileAdd } from "react-icons/ai";

function Sidebar({ toggleNav }) {
  const { loginType, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="fixed flex flex-col z-50 bg-[#111C18] bg-opacity-[93%] bckdrop-blur-md right-0 top-0 w-[74.66vw] h-screen">
      <CloseIcon onClick={toggleNav} boxSize={22} className="self-end m-5" />
      {isLoggedIn && (
        <>
          {loginType === "user" && (
            <>
              <Link
                to="/myprofile"
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={IoPersonCircleSharp}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">My Profile</div>
              </Link>
              <Link
                to="/mycart"
                style={{ color: "white" }}
                className="flex flex-row my-3  mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={PiShoppingCartSimpleFill}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">Cart</div>
              </Link>
              <Link
                to="/myorders"
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={BsFillHandbagFill}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">My Orders</div>
              </Link>
              <Link
                onClick={() => setIsLoggedIn(false)}
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={RiLogoutCircleLine}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">Log Out</div>
              </Link>
            </>
          )}
          {loginType === "admin" && (
            <>
              <Link
                to="/myprofile"
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={IoPersonCircleSharp}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">My Profile</div>
              </Link>
              <Link
                to="/myorders"
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={BsFillHandbagFill}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">Orders</div>
              </Link>
              <Link
                to="/add"
                style={{ color: "white" }}
                className="flex flex-row my-3  mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={AiFillFileAdd}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">Add Service</div>
              </Link>

              <Link
                onClick={() => setIsLoggedIn(false)}
                style={{ color: "white" }}
                className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
              >
                <Icon
                  boxSize={30}
                  as={RiLogoutCircleLine}
                  className="justify-self-start mx-[4vw]"
                />
                <div className="text-lg mx-[4vw]">Log Out</div>
              </Link>
            </>
          )}
        </>
      )}

      {!isLoggedIn && (
        <Link
          to="/auth"
          style={{ color: "white" }}
          className="flex flex-row my-3 mx-4 rounded-xl py-1 hover:bg-[#6ca18f] hover:bg-opacity-[49%]"
        >
          <Icon
            boxSize={30}
            as={BsPersonFillAdd}
            className="justify-self-start mx-[4vw]"
          />
          <div className="text-lg mx-[4vw]">Signin / Signup</div>
        </Link>
      )}
    </div>
  );
}

export default Sidebar;
