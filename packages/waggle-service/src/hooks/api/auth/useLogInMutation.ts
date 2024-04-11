import { toast } from "react-toastify";

import { useSetRecoilState } from "recoil";

import { useMutation } from "@tanstack/react-query";

import { postLogIn } from "@/api/auth/postLogin";
import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { TokenType } from "@/types/auth";

export const useLogInMutation = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const logInMutation = useMutation({
    mutationFn: postLogIn,
    onSuccess: ({ result }: TokenType) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.accessToken);
      localStorage.setItem("MEMBER_ID", String(result.member.memberId));

      authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${result.accessToken}`;

      setIsLoggedIn(true);
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");

      setIsLoggedIn(false);
    },
  });

  return logInMutation;
};
