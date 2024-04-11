import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LogIn from "@/components/common/LogIn/LogIn";
import ScrollTop from "@/components/common/ScrollTop/ScrollTop";
import Header from "@/components/Header/Header";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ScrollTop />
      <LogIn>
        <Header />
        <Outlet />
      </LogIn>
      <ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
    </>
  );
};

export default App;
