import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useQueryClient } from "@tanstack/react-query";

import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { ACCESS_TOKEN_KEY } from "@/constants/api";
import { PATH } from "@/constants/path";

export const useTokenError = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleTokenError = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);

    queryClient.clear();

    setIsLoggedIn(false);

    navigate(PATH.ROOT);

    toast.error("다시 로그인해 주세요.");
  };

  return { handleTokenError };
};
