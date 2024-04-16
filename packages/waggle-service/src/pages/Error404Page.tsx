import { useNavigate } from "react-router-dom";

import Error from "@/components/common/Error/Error";

import { PATH } from "@/constants/path";

const Error404Page = () => {
  const navigate = useNavigate();

  return <Error resetError={() => navigate(PATH.ROOT)} />;
};
export default Error404Page;
