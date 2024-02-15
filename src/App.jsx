import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import MyCart from "./pages/MyCart.jsx";
import Auth from "./pages/authPages/AuthPage.jsx";
import ForgotPassword from "./pages/authPages/ForgotPassowrd.jsx";
import ResetPassword from "./pages/authPages/ResetPassword.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AddService from "./pages/AddService.jsx";
import ViewService from "./pages/ViewService.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile.jsx";
function forgotPassword() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/add" element={<AddService />} />
          <Route path="/view" element={<ViewService />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default forgotPassword;
