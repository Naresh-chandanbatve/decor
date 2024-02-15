import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { CiMenuKebab } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Divider } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";

function MyCart() {
  const data = [
    {
      id: 'ID39784589',
      title: "Rinjani Villa",
      catagory: "SOUND",
      price: 23000,
      img: "",
      address: "Koka Jungle Bhandara",
      date: "8 April - 9 April",
      time: "10 am - 11 am",
    },
    {
        id: 'ID39784589',
        title: "Rinjani Villa",
        catagory: "SOUND",
        price: 23000,
        img: "",
        address: "Koka Jungle Bhandara",
        date: "8 April - 9 April",
        time: "10 am - 11 am",
      },
      {
        id: 'ID39784589',
        title: "Rinjani Villa",
        catagory: "SOUND",
        price: 23000,
        img: "",
        address: "Koka Jungle Bhandara",
        date: "8 April - 9 April",
        time: "10 am - 11 am",
      },
      {
        id: 'ID39784589',
        title: "Rinjani Villa",
        catagory: "SOUND",
        price: 23000,
        img: "",
        address: "Koka Jungle Bhandara",
        date: "8 April - 9 April",
        time: "10 am - 11 am",
      },
      {
        id: 'ID39784589',
        title: "Rinjani Villa",
        catagory: "SOUND",
        price: 23000,
        img: "",
        address: "Koka Jungle Bhandara",
        date: "8 April - 9 April",
        time: "10 am - 11 am",
      },

  ];

  const MyComponent = ({ data }) => {
    // Use data.property1, data.property2, etc. to render content
    return (
      <div className="bg-[#303735] bg-opacity-[40%] flex-shrink-0 rounded-3xl w-[95vw] h-[16vh] m-auto my-3 drop-shadow-[0_11px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row justify-between">
          <div className="mx-3 mt-2 text-lg text-white">{data.catagory}</div>
          <div className="flex flex-row">
            <div className="text-xs my-3">{data.id}</div>
            <CiMenuKebab size={25} className="m-2"></CiMenuKebab>
          </div>
        </div>

        <Divider width="94%" className="bg-[#605C5C] h-[.10vh] m-auto" />
        <div className="flex flex-row justify-between w-[94%] m-auto mt-2">
          <img className="bg-white rounded-lg w-[23.92vw] h-[8.96vh]"></img>
          <div className="flex basis- flex-col justify-between ml-2">
            <div className="text-left h-fit text-white">{data.title}</div>
            <div className="flex flex-row h-fit">
              <IoLocationSharp />
              <div className="text-[10px] text-left text-[#CAC4C4]">
                {data.address}
              </div>
            </div>
            <div className="text-left h-fit text-[#E8E8E8]">{data.date}</div>
          </div>
          <div className="flex basis-22 flex-col justify-between">
            <div className="flex flex-row">
              <div className="text-left text-[10px]">{data.time}</div>
              <FaRegClock size={12} className="ml-[1vh]" />
            </div>
            <div className="text-right text-lg text-white">₹ {data.price}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed flex flex-row w-screen bg-[#29332F] bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 0 30 30"
            color="white"
            fill="white"
            boxSize={60}
            float={"left"}
            className="mx-[2rem] mt-[2vh]"
          />
        </Link>
        <div className="mt-[2vh] pt-[10px] text-2xl basis-3/4 text-left ml-[3vh]">
          My Orders
        </div>
        <Link
          to="/"
          style={{ color: "white" }}
          className="flex justify-center items-center mx-[2vh]"
        >
          <CiMenuKebab color="white" fill="white" size={30} className=" " />
        </Link>
      </div>
      <div className="grid overflow-y-scroll w-screen h-[80vh] mt-20 pb-[25.43vh]">
        {data.map((item) => (
          <MyComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="fixed bottom-0 grid place-items-center bg-[#313131] bg-opacity-[94%] rounded-t-2xl h-[36.57vh] w-screen ">
        <div className="flex flex-row justify-between w-[90vw] m-auto mt-4">
          <div>MRP (2 Items)</div>
          <div>₹ 35000</div>
        </div>
        <div className="flex flex-row justify-between w-[90vw] m-auto mt-4">
          <div>Add On charges </div>
          <div>-</div>
        </div>
        <div className="flex flex-row justify-between w-[90vw] m-auto mt-4">
          <div>Other charges </div>
          <div>-</div>
        </div>
        <Divider width="90%" className="bg-[#605C5C] h-[.10vh] m-auto" />
        <div className="flex flex-row justify-between w-[90vw] m-auto mt-4">
          <div>Total</div>
          <div>₹ 35,000</div>
        </div>
        <Button
          padding={0}
          background="#6CA18F"
          className="rounded-full w-[90vw] h-[6.4vh] "
        >
          <p className="mx-4">Checkout</p>
        </Button>
      </div>
    </>
  );
}

export default MyCart;
