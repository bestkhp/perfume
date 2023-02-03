import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserName from "../pages/UserName/UserName";
import Slider from "../pages/Slider/Slider";
import { AnimatePresence } from "framer-motion";
import Question01 from "../pages/Question/Question01/Question01";
import Services from "../pages/Services/Services";

export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Slider />} />
        <Route path='/userName' element={<UserName />} />
        <Route path='/:userName/services' element={<Services />} />
        <Route path='/:userName/question01' element={<Question01 />} />
      </Routes>
    </AnimatePresence>
  );
}