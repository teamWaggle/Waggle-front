import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSetRecoilState } from "recoil";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteLogout } from "@/api/auth/deleteLogout";

import { isLoggedInState } from "@/recoil/atoms/auth";

export const useLogoutMutation = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const logOutMutation = useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("MEMBER_ID");
      queryClient.clear();

      setIsLoggedIn(false);
      navigate("/");
    },
    onError: () => {
      toast.error("로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return logOutMutation;
};
