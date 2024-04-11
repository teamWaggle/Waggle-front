import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { TokenType, UserType } from "@/types/auth";

export const postLogIn = async ({ email, password }: UserType) => {
  const { data } = await axiosInstance.post<UserType, AxiosResponse<TokenType>>(END_POINTS.LOGIN, {
    email,
    password,
  });

  return data;
};
