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
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost";
const PORT = import.meta.env.VITE_PORT || 5000;

function ViewService() {
  const defaultImageUrl = "/assets/23-CYX5G_Ke.png";

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleChange2 = (event) => {
    setFormData2({ ...formData2, [event.target.name]: event.target.value });
  };

  const handleChange1 = (event) => {
    setFormData2({ ...formData2, [event.target.name]: event.target.checked });
    console.log(formData2);
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `${BACK_URL}:${PORT}/service/get/` + id
        );
        setData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchService();
  }, []);

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
        // If value is an object, recursively combine it
        combinedFormData.append(key, combineFormData(value, {}));
      } else {
        combinedFormData.append(key, value);
      }
    }
    return combinedFormData;
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
          try {
            const token = localStorage.getItem("jwtToken");
            const user = await axios.get(`${BACK_URL}:${PORT}/user/getUser`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const userID = user.data._id;
            const serviceID = data._id;
            setFormData1({
              ...formData1,
              userID: userID,
              serviceID: serviceID,
            });
          } catch (error) {
            console.log(error);
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
          <Button
            background="#6CA18F"
            className="rounded-2xl w-[47.73vw] text-xl py-[1.5vh] mb-[10vh]"
            type="submit"
            onClick={() => setIsModalOpen(true)}
          >
            Book Order
          </Button>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay className="bg-black/60" />
        <ModalContent className="grid place-content-center h-screen">
          <div className="bg-black py-10">
            <div className="w-screen grid grid-flow-col justify-content-between mx-9">
              <ModalHeader className="text-xl text-left">
                Order Confirmation
              </ModalHeader>
              <ModalCloseButton className="mr-4" />
            </div>
            <ModalBody>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  var combinedFormData = new FormData();
                  combinedFormData = combineFormData(formData1, formData2);
                  try {
                    if (formData2.isPayAfter) {
                      const response = await axios.post(
                        `${BACK_URL}:${PORT}/order/add`,
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
                    } else {
                      const response = await axios.post(
                        `${BACK_URL}:${PORT}/cart/add`,
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
                    }
                  } catch (error) {
                    console.error("Error submitting data:", error);
                  }
                  setIsModalOpen(false);
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
    </div>
  );
}

export default ViewService;
