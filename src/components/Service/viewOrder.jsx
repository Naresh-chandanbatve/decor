import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  Divider,
  flexbox,
  border,
  Textarea,
} from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import { IoLocationSharp } from "react-icons/io5";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useSearchParams } from "react-router-dom";

import { FaRegClock } from "react-icons/fa6";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function ViewOrder() {
  const defaultImageUrl = "/assets/23-CYX5G_Ke.png";

  const [searchParams] = useSearchParams();

  const [orderData, setOrderData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});
  const id = searchParams.get("id");
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`${BACK_URL}/order/get/${id}`);
        if (response.data.result) {
          setOrderData(response.data.result);
        }
        console.log(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, [id]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `${BACK_URL}/service/get/` + orderData.serviceID
        );
        setServiceData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchService();
  }, [orderData]);

  function getFormattedDate(data) {
    console.log(data);
    const [year, month, day] = new Date(`${data}`)
      .toISOString()
      .slice(0, 10)
      .split("-");
    const formattedDate = `${day} ${getFormattedMonth(month)} ${year}`;
    return formattedDate;
  }

  function getFormattedMonth(monthNumber) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[monthNumber - 1]; // Adjust index based on zero-based counting
  }

  function toTimeString(dateTimeString) {
    const parsedDate = new Date(dateTimeString);
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return parsedDate.toLocaleTimeString([], options);
  }

  return (
    <div className=" h-screen bg-gradient-to-tl from-[#1A1F1D] from-20% via-[#0A0E0D]/88 via-60% to-[#0A0E0D]/81">
      <Link to="/" style={{ color: "white" }}>
        <div className="flex flex-row w-screen bg-[#17201E] bg-opacity-[72%]">
          <ChevronLeftIcon
            viewBox="8 -4 30 30"
            boxSize={60}
            float={"left"}
            className="mx-4"
          />
        </div>
      </Link>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // Handle form 1 submission (store data)
          // try {
          //   const token = localStorage.getItem("jwtToken");
          //   const user = await axios.get(`${BACK_URL}/user/getUser`, {
          //     headers: {
          //       Authorization: `Bearer ${token}`,
          //     },
          //   });
          //   const userID = user.data._id;
          //   const serviceID = data._id;
          //   setFormData1({
          //     ...formData1,
          //     userID: userID,
          //     serviceID: serviceID,
          //   });
          // } catch (error) {
          //   console.log(error);
          // }
        }}
      >
        <img
          src={serviceData?.img_url || defaultImageUrl}
          alt="Preview"
          className="h-[34.11vh] mt-9 w-[94vw] mx-3 rounded-2xl"
        />

        <div className="flex flex-row items-center justify-between mx-3 mt-4">
          <div className="">
            <div className="text-xl font-semibold">Bed Decor</div>
            <div className="flex justify-start text-sm items-center my-2 text-[#CAC4C4]">
              <IoLocationSharp color="#CAC4C4" />
              ew4tgewg
            </div>
            <div> 20 Mar 2024 </div>
          </div>
          <div className="text-sm ">
            {/*{serviceData.title}
            { getFormattedDate(orderData.date)}
            {toTimeString(orderData.time_slot.start_time)} -{" "}
            {toTimeString(orderData.time_slot.end_time)}
            {serviceData.catagory}
            {orderData.address} 
            {orderData._id} */}
            <div className="flex justify-end items-start align-text-top mb-3">
              <div>5:46 PM - 6:43 PM</div>
              <FaRegClock size={12} className="ml-[1vh] self-center" />
            </div>
            <div className="flex justify-end my-2">Decoration </div>
            <div className="flex justify-end align-text-bottom mt-3 text-[#CAC4C4]">
              65e5122fb01a3f79988c51a7
            </div>
          </div>
        </div>

        <Divider
          orientation="horizontal"
          background="#3E3E3E"
          height={1}
          width="screen"
          className="mx-3 mt-[2vh]"
        />

        <div className="mx-3 mb-10">
          <div className="text-left text-xl mt-3 font-semibold">
            Description
          </div>
          <div className="text-justify  h-[15.47vh] text-sm">
            {serviceData.description}
          </div>
        </div>
        <Divider
          orientation="horizontal"
          background="#3E3E3E"
          height={1}
          width="screen"
          className="mx-3 mb-4"
        />

        <div className="flex flex-row align-bottom mx-3 mb-0 justify-between">
          <div className="text-3xl font-semibold">₹ {serviceData.price}</div>
          <Button
            background="#6CA18F"
            className="rounded-2xl w-[47.73vw] text-xl py-[1.5vh] "
            type="submit"
            onClick={() => setIsModalOpen(true)}
          >
            Mark as Done
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ViewOrder;