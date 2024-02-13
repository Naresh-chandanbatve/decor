import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";

import Auth from "./pages/authPages/AuthPage.jsx";
import ForgotPassword from "./pages/authPages/ForgotPassowrd.jsx";
import ResetPassword from "./pages/authPages/ResetPassword.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AddService from "./pages/AddService.jsx";
import ViewService from "./pages/ViewService.jsx";
import MyOrders from "./pages/MyOrders.jsx";
function forgotPassword() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <ResetPassword/> */}
      {/* <ForgotPassword /> */}
      {/* <Auth/> */}
      {/* <ServicesPage /> */}
      {/* <AddService/> */}
      {/* <ViewService/> */}
      <MyOrders/>
    </>
  );
}

export default forgotPassword;
