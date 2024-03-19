import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { CiMenuKebab } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Divider } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function MyCart() {
  const [carts, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loginType, setLoginType, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(`${BACK_URL}/cart/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data.result);
      } catch (error) {
        console.error(error);
        if (error.response.status === 403) {
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
        }
      }
    };

    fetchData();
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = async () => {
      const itemPrices = await Promise.all(
        carts.map(async (cartItem) => {
          const response = await axios.get(
            `${BACK_URL}/service/get/${cartItem.serviceID}`
          );
          return parseFloat(response.data.result.price);
        })
      );
      setTotalPrice(itemPrices.reduce((acc, price) => acc + price, 0));
    };

    calculateTotalPrice();
  }, [carts]);

  const payout = async () => {
    setIsLoading(true);
   try {
    
    const cashfree = Cashfree({
      mode: "sandbox", //or production
    });

    const token = localStorage.getItem("jwtToken");
    const response = await axios.get(
      `${BACK_URL}/cashfree/create/${totalPrice}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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

    let checkoutOptions = {
      paymentSessionId: response.data.payment_session_id,
      redirectTarget: "_blank",
    };

    cashfree.checkout(checkoutOptions);
   } catch (error) {
     console.error(error);
   }
   finally{
     setIsLoading(false);
     setLoginType(loginType);
     nav("/");
   }

  };

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
            `${BACK_URL}/service/get/${data.serviceID}`
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

    async function deleteCart(cartID) {
      setIsLoading(true);
      try {
        const response = await axios.delete(
          `${BACK_URL}/cart/delete/${cartID}`
        );
        if (response) {
          console.log("cart deleted successfully");
          toast.success("cart Item deleted successfully", {
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
      } catch (error) {
        console.error(error);
        toast.error(error.response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } finally {
        setIsLoading(false);
        onClose();
      }
    }

    return (
      <div className="bg-[#303735] bg-opacity-[40%] flex-shrink-0 rounded-3xl w-[95vw] h-[16vh] m-auto my-3 drop-shadow-[0_11px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row justify-between">
          <div className="mx-3 mt-2 text-lg text-white">
            {fetchedData.result.catagory}
          </div>
          <div className="flex flex-row">
            <div className="text-xs my-3">{fetchedData.result._id}</div>
            <MdDelete
              onClick={onOpen}
              fill="#E8E8E8"
              size={20}
              className="m-2"
            ></MdDelete>
          </div>
        </div>

        <Divider width="94%" className="bg-[#605C5C] h-[.10vh] m-auto" />
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
              <IoLocationSharp size={12} fill="#CAC4C4" />
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
              <div className="bg-black p-3">
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Cart Item
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? Do You really want to delete this Item?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose} className="mx-1">
                    Cancel
                  </Button>
                  <Button
                    className="bg-[#ff0000] border-3 border-red"
                    onClick={() => {
                      deleteCart(data._id);
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
    <>
      <div className="fixed flex flex-row w-screen bg-[#29332F] bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 -4 30 30"
            color="white"
            fill="white"
            boxSize={60}
            float={"left"}
            className="mx-[2rem]"
          />
        </Link>
        <div className="flex text-2xl basis-3/4 text-left ml-[3vh] items-center">
          My Cart
        </div>
        {/* <Link
          to="/"
          style={{ color: "white" }}
          className="flex justify-center items-center mx-[2vh]"
        >
          <CiMenuKebab color="white" fill="white" size={30} className=" " />
        </Link> */}
      </div>
      <div className="grid content-start overflow-y-scroll w-screen h-[80vh] mt-20 pb-[25.43vh]">
        {carts.map((item) => (
          <MyComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="fixed bottom-0 grid place-items-center bg-[#313131] bg-opacity-[94%] rounded-t-2xl h-[36.57vh] w-screen ">
        <div className="flex flex-row justify-between w-[90vw] m-auto mt-4">
          <div>MRP ({carts.length} Items)</div>
          <div>₹ {totalPrice}</div>
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
          <div>₹ {totalPrice}</div>
        </div>
        <Button
          padding={0}
          background="#6CA18F"
          className="rounded-xl w-[90vw] h-[6.4vh] "
          onClick={payout}
        >
          <p className="mx-4">Checkout</p>
        </Button>
      </div>
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
      {isLoading && <LoadingOverlay isOpen={isLoading} />}
    </>
  );
}

export default MyCart;
