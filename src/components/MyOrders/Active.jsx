import React, { useEffect, useState, useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Divider, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../App";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function Active() {
  const [orders, setOrders] = useState([]);

  const { loginType, setLoginType, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  const nav = useNavigate();

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      let response;
      if (loginType === "admin") {
        response = await axios.get(`${BACK_URL}/order/admin`);
      } else {
        response = await axios.get(`${BACK_URL}/order/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      if (response.statusCode === 403) {
        localStorage.removeItem("jwtToken");
        setIsLoggedIn(false);
        toast("Not Authorized! Please Login Again!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        nav("/");
      }
      setOrders(response.data.result);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchOrders();
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

    const fetchService = async () => {
      try {
        const response = await axios.get(
          `${BACK_URL}/service/get/${data.serviceID}`
        );
        setFetchedData(response.data);
      } catch (error) {
        console.error(error);
        toast(error.response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    useEffect(() => {
      fetchService();
    }, [data]);

    if (!fetchedData) {
      return <div>Loading...</div>;
    }

    async function deleteOrder(orderID) {
      try {
        const response = await axios.delete(
          `${BACK_URL}/order/delete/${orderID}`
        );
        if (response) {
          console.log("order deleted successfully");
          toast.success("order deleted successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          fetchOrders();
          fetchService();
        }
      } catch (error) {
        console.error(error);
        toast(error.response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    const handleDelete = (event) => {
      event.preventDefault(); // Prevent redirection
      // Perform intended actions for the component
      onOpen();
    };

    // 303735
    return (
      <div className="bg-[#1A1F1D] bg-opacity-[40%] flex-shrink-0 rounded-3xl w-[95vw] h-[16vh] m-auto my-3 drop-shadow-[0_11px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row justify-between">
          <div className="mx-3 mt-2 text-lg text-white">
            {fetchedData.result.catagory}
          </div>
          <div className="flex flex-row">
            <div className="text-xs my-3">{data._id}</div>
            <MdDelete
              onClick={handleDelete}
              fill="#E8E8E8"
              size={20}
              className="m-2"
            ></MdDelete>
          </div>
        </div>

        <Divider width="94%" className="bg-[#CAC4C4] h-[.10vh] m-auto" />
        <div className="flex flex-row justify-start w-[94%] m-auto mt-2">
          <img
            src={fetchedData.result.img_url}
            className="bg-white rounded-lg w-[23.92vw] h-[8.96vh]"
          ></img>
          <div className="flex flex-col basis-2/3 justify-between ml-2">
            <div className="text-left h-fit text-white">
              {fetchedData.result.title}
            </div>
            <div className="flex flex-row items-center">
              <FaRegClock size={12} className="mr-[1vh]" />
              <div className="text-left text-[10px]">
                {toTimeString(data.time_slot.start_time)} -{" "}
                {toTimeString(data.time_slot.end_time)}
              </div>
            </div>

            <div className="flex flex-row items-baseline text-base h-fit justify-between">
              <div className="text-left align-text-bottom h-fit text-[#E8E8E8]">
                {formattedDate}
              </div>
              <div className="text-right align-baseline text-lg h-fit text-white ">
                ₹ {fetchedData.result.price}
              </div>
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
              <div className="bg-black p-3">
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Order
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? Do You really want to delete this Order?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose} className="mx-1">
                    Cancel
                  </Button>
                  <Button
                    className="bg-[#ff0000] border-3 border-red"
                    onClick={() => {
                      deleteOrder(data._id);
                      onClose();
                    }}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    );
  };

  return (
    <div className="grid content-start overflow-y-scroll h-[80vh] mt-5">
      {orders
        .filter((item) => item.status === "PAID" || item.status === "PENDING")
        .map((item) => (
          <Link to={`/vieworder?id=${item._id}`} style={{ color: "white" }}>
            <MyComponent key={item._id} data={item} />
          </Link>
        ))}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
}

export default Active;
