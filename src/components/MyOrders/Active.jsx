import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Divider, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost";
const PORT = import.meta.env.VITE_PORT || 5000;

function Active() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACK_URL}:${PORT}/order/all`);

        setOrders(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const MyComponent = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const [fetchedData, setFetchedData] = useState(null);
    const [year, month, day] = new Date(`${data.date}`)
      .toISOString()
      .slice(0, 10)
      .split("-");

    const formattedDate = `${day} ${getFormattedMonth(month)} ${year}`;

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

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${BACK_URL}:${PORT}/service/get/${data.serviceID}`
          );
          setFetchedData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, [data]);

    if (!fetchedData) {
      return <div>Loading...</div>;
    }

    async function deleteOrder(orderID) {
      try {
        const response = await axios.delete(
          `${BACK_URL}:${PORT}/order/delete/${orderID}`
        );
        if (response){
          console.log("order deleted successfully");
        }
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <div className="bg-[#303735] bg-opacity-[40%] flex-shrink-0 rounded-3xl w-[95vw] h-[16vh] m-auto my-3 drop-shadow-[0_11px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row justify-between">
          <div className="mx-3 mt-2 text-lg text-white">
            {fetchedData.result.catagory}
          </div>
          <div className="flex flex-row">
            <div className="text-xs my-3">{data._id}</div>
            <MdDelete
              onClick={onOpen}
              fill="#E8E8E8"
              size={20}
              className="m-2"
            ></MdDelete>
          </div>
        </div>

        <Divider width="94%" className="bg-[#CAC4C4] h-[.10vh] m-auto" />
        <div className="flex flex-row justify-between w-[94%] m-auto mt-2">
          <img
            src={fetchedData.result.img_url}
            className="bg-white rounded-lg w-[23.92vw] h-[8.96vh]"
          ></img>
          <div className="flex basis- flex-col justify-between ml-2">
            <div className="text-left h-fit text-white">
              {fetchedData.result.title}
            </div>
            <div className="flex flex-row h-fit">
              <IoLocationSharp />
              <div className="text-[10px] text-left text-[#CAC4C4]">
                {data.address}
              </div>
            </div>
            <div className="text-left h-fit text-[#E8E8E8]">
              {formattedDate}
            </div>
          </div>
          <div className="flex basis-22 flex-col justify-between">
            <div className="flex flex-row">
              <div className="text-left text-[10px]">
                {toTimeString(data.time_slot.start_time)} -{" "}
                {toTimeString(data.time_slot.end_time)}
              </div>
              <FaRegClock size={12} className="ml-[1vh]" />
            </div>
            <div className="text-right text-lg text-white">
              ₹ {fetchedData.result.price}
            </div>
          </div>
        </div>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay className="bg-black/60">
            <AlertDialogContent className="grid  place-content-center h-screen ">
              <div className="bg-black p-3"><AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? Do You really want to delete this Order?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() =>{
                   deleteOrder(data._id)
                   onClose();
                   }} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter></div>
              
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    );
  };

  return (
    <div className="grid content-start overflow-y-scroll h-[80vh] mt-5">
      {orders.map((item) => (
        <MyComponent key={item._id} data={item} />
      ))}
    </div>
  );
}

export default Active;
