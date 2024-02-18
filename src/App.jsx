import "./App.css";
import React, { useState, createContext,Suspense, useContext, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import load from '../src/assets/tube-spinner.svg'

const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const MyCart = lazy(() => import("./pages/MyCart.jsx"));
const Auth = lazy(() => import("./pages/authPages/AuthPage.jsx"));
const ForgotPassword = lazy(() =>
  import("./pages/authPages/ForgotPassowrd.jsx")
);
const ResetPassword = lazy(() => import("./pages/authPages/ResetPassword.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const AddService = lazy(() => import("./pages/AddService.jsx"));
const ViewService = lazy(() => import("./pages/ViewService.jsx"));
const MyOrders = lazy(() => import("./pages/MyOrders.jsx"));
const MyProfile = lazy(() => import("./pages/MyProfile.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));

const AuthContext = createContext(null);
function App() {
  const [loginType, setLoginType] = useState('t');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AuthContext.Provider
        value={{ loginType, setLoginType, isLoggedIn, setIsLoggedIn }}
      >
        <BrowserRouter>
          <Suspense fallback={<div className="grid h-screen items-center"><img src={load} height={100} width={100}></img></div>}>
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
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
export { AuthContext };
