import { useState } from "react";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LogIn from "@/components/common/LogIn/LogIn";
import ScrollTop from "@/components/common/ScrollTop/ScrollTop";
import Header from "@/components/Header/Header";
import Notification from "./components/common/Notification/Notification";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const handleNotiOpen = () => {
    setIsNotiOpen((prev) => !prev);
  };

  return (
    <>
      <ScrollTop />
      <LogIn>
        <Header handleNotiOpen={handleNotiOpen} />
        <Outlet />
      </LogIn>
      {isNotiOpen && <Notification />}
      <ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
    </>
  );
};

export default App;
