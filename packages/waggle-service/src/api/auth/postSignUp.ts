import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { UserType } from "@/types/auth";
import type { CommonResponseType } from "@/types/common";

export const postSignUp = async ({ email, password }: UserType) => {
  const { data } = await axiosInstance.post<UserType, AxiosResponse<CommonResponseType>>(
    END_POINTS.SIGN_UP,
    {
      email,
      password,
    }
  );

  return data;
};
