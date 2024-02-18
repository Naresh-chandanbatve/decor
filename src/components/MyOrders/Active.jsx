import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { VscKebabVertical } from "react-icons/vsc";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Divider } from "@chakra-ui/react";

function Active() {


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
    <div className="grid overflow-y-scroll h-[80vh] mt-5">
      
      {data.map((item) => (
          <MyComponent key={item.id} data={item} />
        ))}
      {/* pasting component for now reconfigure by maps */}
    </div>
  );
}

export default Active;
