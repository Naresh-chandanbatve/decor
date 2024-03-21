import React, { useState, useEffect, useContext } from "react";
import {
  Input,
  Box,
  Divider,
  flexbox,
  border,
  Textarea,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdDelete } from "react-icons/md";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../App";
import LoadingOverlay from "../loading";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost:5000";

function ViewService() {
  const [isLoading, setIsLoading] = useState(false);
  const { loginType, setLoginType, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  const nav = useNavigate();
  const defaultImageUrl = "https://raw.githubusercontent.com/Naresh-chandanbatve/decor/main/src/assets/gallary.jpg";

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleChange2 = (event) => {
    setFormData2({ ...formData2, [event.target.name]: event.target.value });
  };

  const handleChange1 = (event) => {
    setFormData2({ ...formData2, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`${BACK_URL}/service/get/` + id);
        setData(response.data.result);
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

    fetchService();
  }, []);

  async function handleDelete(id) {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BACK_URL}/service/delete/` + id);
      console.log(response.data.message);
      toast.success("service deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
    } finally {
      setIsLoading(false);
      setLoginType(loginType);
      nav("/");
    }
  }

  function combineFormData(formData1, formData2) {
    const combinedFormData = new FormData();

    if (
      !formData1 ||
      typeof formData1 !== "object" ||
      !formData2 ||
      typeof formData2 !== "object"
    ) {
      throw new Error("Both formData1 and formData2 must be valid objects.");
    }

    // Iterate over each key-value pair in formData1 and append to combinedFormData
    for (const [key, value] of Object.entries(formData1)) {
      combinedFormData.append(key, value);
    }

    for (const [key, value] of Object.entries(formData2)) {
      if (typeof value === "object") {
        combinedFormData.append(key, combineFormData(value, {}));
      } else {
        combinedFormData.append(key, value);
      }
    }
    return combinedFormData;
  }

  return (
    <div className=" h-screen bg-gradient-to-tl from-[#1A1F1D] from-20% via-[#0A0E0D]/88 via-60% to-[#0A0E0D]/81">
      <div className="flex flex-row w-screen justify-between bg-[#17201E] bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 -4 30 30"
            boxSize={60}
            float={"left"}
            className="mx-4"
          />
        </Link>
        {/* <MdDelete
          size={25}
          float={"left"}
          className="mx-2 mt-4"
          onClick={onOpen}
        /> */}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // Handle form 1 submission (store data)
          try {
            const token = localStorage.getItem("jwtToken");
            const user = await axios.get(`${BACK_URL}/user/getUser`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (user.statusCode === 403) {
              localStorage.removeItem("jwtToken");
              setIsLoggedIn(false);
              nav("/");
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
            const userID = user.data._id;
            const serviceID = data._id;
            setFormData1({
              ...formData1,
              userID: userID,
              serviceID: serviceID,
            });
          } catch (error) {
            console.log(error);
            localStorage.removeItem("jwtToken");
            setIsLoggedIn(false);
            nav("/auth");
          }
        }}
      >
        <img
          src={data?.img_url || defaultImageUrl}
          alt="Preview"
          className="h-[34.11vh] mt-9 w-[94vw] mx-3 rounded-2xl"
        />

        <div className="flex flex-row items-center justify-between mx-3 mt-4">
          <div className="text-xl font-semibold">{data.title}</div>
          <div className="text-sm ">{data.catagory}</div>
        </div>

        <Divider
          orientation="horizontal"
          background="#3E3E3E"
          height={1}
          width="screen"
          className="mx-3 mt-[5vh]"
        />

        <div className="mx-3 mb-10">
          <div className="text-left text-xl mt-3 font-semibold">
            Description
          </div>
          <div className="text-justify  h-[15.47vh] text-sm">
            {data.description}
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
          <div className="text-3xl font-semibold">₹ {data.price}</div>

          {loginType === "admin" ? (
            <Button
              background="#ff0000"
              className="rounded-2xl w-[47.73vw] text-xl py-[1.5vh]"
              type="submit"
              onClick={onOpen}
            >
              Delete Service
            </Button>
          ) : (
            <Button
              background="#6CA18F"
              className="rounded-2xl w-[47.73vw] text-xl py-[1.5vh] mb-[10vh]"
              type="submit"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Book Order
            </Button>
          )}
        </div>
      </form>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay className="bg-black/60">
          <AlertDialogContent className="grid  place-content-center h-screen ">
            <div className="bg-black p-3">
              <AlertDialogHeader fontSize="2xl" fontWeight="bold">
                Delete Service
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? Do You really want to delete this Service?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose} className="mx-1">
                  Cancel
                </Button>
                <Button
                  className="bg-[#ff0000] border-3 border-red"
                  onClick={() => {
                    handleDelete(id);
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay className="bg-black/60" />
        <ModalContent className="grid place-content-center h-screen">
          <div className="bg-black py-10">
            <div className="w-screen grid grid-flow-col justify-content-between mx-9">
              <ModalHeader className="text-xl text-left ">
                Order Confirmation
              </ModalHeader>
              <ModalCloseButton className="ml-5 w-[3vw] " />
            </div>
            <ModalBody>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  var combinedFormData = new FormData();
                  combinedFormData = combineFormData(formData1, formData2);
                  try {
                    if (formData2.isPayAfter) {
                      const response = await axios.post(
                        `${BACK_URL}/order/add`,
                        combinedFormData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      );
                      console.log("Order added successfully:", response.data);
                      toast.success("Order added successfully", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    } else {
                      const response = await axios.post(
                        `${BACK_URL}/cart/add`,
                        combinedFormData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      );
                      console.log(
                        "Order added to cart successfully:",
                        response.data
                      );
                      toast.success("Order added to cart successfully", {
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
                    console.error("Error submitting data:", error);
                  } finally {
                    setIsLoading(false);
                    setIsModalOpen(false);
                    nav("/");
                  }
                }}
              >
                {/* Form 2 fields */}

                <label className="flex flex-col px-9 mt-[3vh] text-left">
                  Date
                  <Input
                    type="date"
                    variant="outline"
                    className="rounded-2xl h-[6.14vh] w-[81.86vw] mt-2 px-3"
                    fontSize={20}
                    borderWidth={1}
                    placeholder="chandanbatven@gmail.com"
                    focusBorderColor="#43675B"
                    _placeholder={{ color: "white" }}
                    borderColor="#696969"
                    backgroundColor="#101614"
                    alt="email"
                    id="date"
                    name="date"
                    required="true"
                    onChange={handleChange2}
                  ></Input>
                </label>

                <label className="flex flex-col px-9 mt-[3vh] text-left">
                  Start Time
                  <Input
                    type="time"
                    variant="outline"
                    className="rounded-2xl h-[6.14vh] w-[81.86vw] mt-2 px-3"
                    fontSize={20}
                    borderWidth={1}
                    focusBorderColor="#43675B"
                    placeholder="+91 7447557386"
                    _placeholder={{ color: "white" }}
                    borderColor="#696969"
                    backgroundColor="#101614"
                    alt="email"
                    id="start_time"
                    name="start_time"
                    required="true"
                    onChange={handleChange2}
                  />
                </label>

                <label className="flex flex-col px-9 mt-[3vh] text-left">
                  End Time
                  <Input
                    type="time"
                    variant="outline"
                    className="rounded-2xl h-[6.14vh] w-[81.86vw] mt-2 px-3"
                    fontSize={20}
                    borderWidth={1}
                    focusBorderColor="#43675B"
                    placeholder="+91 7447557386"
                    _placeholder={{ color: "white" }}
                    borderColor="#696969"
                    backgroundColor="#101614"
                    alt="email"
                    id="end_time"
                    name="end_time"
                    required="true"
                    onChange={handleChange2}
                  ></Input>
                </label>

                <label className="flex flex-col px-9 mt-[2vh] text-left">
                  Address
                  <Textarea
                    variant="outline"
                    id="address"
                    name="address"
                    className="rounded-2xl h-[12vh] w-[81.86vw] mt-2 px-3"
                    fontSize={20}
                    borderWidth={1}
                    placeholder="koka Jungle, Bhandara, 441904"
                    focusBorderColor="#43675B"
                    _placeholder={{ color: "grey" }}
                    borderColor="#696969"
                    backgroundColor="#101614"
                    style={{
                      lineHeight: "1.9 em",
                      paddingTop: "5px",
                    }}
                    required="true"
                    onChange={handleChange2}
                  ></Textarea>
                </label>

                <label
                  htmlFor="checkbox"
                  borderWidth={3}
                  fontSize={30}
                  className="w-screen  flex justify-start mt-3 px-9"
                >
                  <Input
                    type="checkbox"
                    id="isPayAfter"
                    name="isPayAfter"
                    className="mr-3"
                    onChange={handleChange1}
                  />
                  Pay after the event
                </label>

                <div className="w-screen grid place-content-center">
                  <Button
                    type="submit"
                    background="#6CA18F"
                    className="rounded-full w-[67.73vw] mx-auto  mt-[5vh]"
                  >
                    {" "}
                    {formData2.isPayAfter ? "Book Order" : "Add to Cart"}
                  </Button>
                </div>
              </form>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
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
    </div>
  );
}

export default ViewService;
