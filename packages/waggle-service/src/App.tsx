import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LogIn from "@/components/common/LogIn/LogIn";
import ScrollTop from "@/components/common/ScrollTop/ScrollTop";
import Header from "@/components/Header/Header";
import Error from "@/components/common/Error/Error";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";

import { useResetError } from "@/hooks/common/useResetError";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { handleErrorReset } = useResetError();

  return (
    <ErrorBoundary Fallback={Error} onReset={handleErrorReset}>
      <ScrollTop />
      <LogIn>
        <Header />
        <Outlet />
      </LogIn>
      <ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
    </ErrorBoundary>
  );
};

export default App;
