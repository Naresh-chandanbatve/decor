import React, { lazy, useState, useEffect } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import load from "../assets/tube-spinner.svg";

const BACK_URL = import.meta.env.VITE_BACK_URL || "http://localhost";
const PORT = import.meta.env.VITE_PORT || 5000;

const Footer = lazy(() => import("../components/LandingPage/Footer.jsx"));

// const services = [
//   {
//     id: "ID3729730",
//     title: "Small Birthday Decoration",
//     price: "23000",
//     catagory: "birthday",
//     image_url: "/assets/dj-BPce03oC.png",
//   },
//   {
//     id: "ID3729730",
//     title: "Small Birthday Decoration",
//     price: "23000",
//     catagory: "birthday",
//     image_url: "/assets/dj-BPce03oC.png",
//   },
//   {
//     id: "ID3729730",
//     title: "Small Birthday Decoration",
//     price: "23000",
//     catagory: "birthday",
//     image_url: "/assets/dj-BPce03oC.png",
//   },
//   {
//     id: "ID3729730",
//     title: "Small Birthday Decoration",
//     price: "23000",
//     catagory: "birthday",
//     image_url: "/assets/dj-BPce03oC.png",
//   },
//   {
//     id: "ID3729730",
//     title: "Small Birthday Decoration",
//     price: "23000",
//     catagory: "birthday",
//     image_url: "/assets/dj-BPce03oC.png",
//   },
// ];

const ServiceComponent = ({ data }) => {

  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(false); 

  useEffect(() => {
    const image = new Image();
    image.src = data.img_url; 

    image.onload = () => setIsLoading(false); 
    image.onerror = () => setError(true);

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [data.img_url]);
  return (
    <div className="flex flex-col flex-shrink-0 resize-none bg-[#1a2421] h-[27.55vh] w-[41.6vw] rounded-[20px] m-2 mb-5">
      {isLoading ? <img
        src={load}
        className="h-[75%] bg-cover rounded-t-[20px] bg-center w-[197.6px] p-[6vh] bg-no-repeat"
      ></img> : <img
      src={data.img_url}
      className="h-[75%] bg-cover rounded-t-[20px] bg-center w-[197.6px] bg-no-repeat"
    ></img>}
      
      <div className="flex flex-col-reverse flex-grow justify-items-start">
        <div className="w-fit align-self-top mx-2 pb-2">₹ {data.price}</div>
        <div className="text-sm w-fit mt-[1vh] mx-2 text-left text-[#D2D2D2]">
          {data.title}
        </div>
      </div>
    </div>
  );
};

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACK_URL}/service/all`);
        setServices(response.data.result);
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
          theme: "dark"
          });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-row w-screen h-[7vh] bg-[#17201E] bg-opacity-[72%]">
        <Link to="/" style={{ color: "white" }}>
          <ChevronLeftIcon
            viewBox="8 0 30 30"
            boxSize={50}
            float={"left"}
            className="mx-[2rem] mt-[1vh]"
          />
        </Link>
        <div className="mt-[1.5vh] text-2xl basis-3/4 text-left ml-[3vh]">
          Services
        </div>
      </div>
      <div className="flex flex-row w-[95vw] mx-auto overflow-x-scroll mt-[5vh]">
        <div onClick={()=>setSelectedCatagory("Sound")} className="w-[180.46px] h-[16.307vh] flex-shrink-0 mb-2 bg-cover bg-[url('./assets/dj.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">DJ Events</div>
          </div>
        </div>
        <div onClick={()=>setSelectedCatagory("Decoration")} className="w-[180.46px] h-[16.307vh] flex-shrink-0 mb-2 bg-cover bg-[url('./assets/23.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">Birthday Decoration</div>
          </div>
        </div>
        <div onClick={()=>setSelectedCatagory("Event")} className="w-[180.46px] h-[16.307vh] flex-shrink-0 mb-2 bg-cover bg-[url('./assets/23.png')] mx-1">
          <div className="w-full h-full bg-gradient-to-t from-black via-black/48.4 via-10% to-transparent flex flex-col-reverse">
            <div className="mb-2">Birthday Decoration</div>
          </div>
        </div>
      </div>
      <div className="text-left w-fit ml-[6vw] mt-[4vh] mb-[1vh] text-md font-semibold">
        All Services
      </div>
      <div className="grid grid-cols-2 w-[98vw] h-[60vh] pb-[1vh] pt-[1vh] m-auto mb-[10vh] overflow-y-scroll justify-items-center">
        {services.filter((element)=> selectedCatagory === null || element.catagory === selectedCatagory).map((item) => (
          <Link to={`/view?id=${item._id}`} style={{ color: "white" }}>
            <ServiceComponent key={item._id} data={item} />
          </Link>
        ))}
      </div>
      <Footer />
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
    </>
  );
}

export default ServicesPage;
