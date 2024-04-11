import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface ChangePasswordRequestType {
  memberId?: number;
  password: string;
}

export const putChangePassword = async ({ memberId, password }: ChangePasswordRequestType) => {
  const { data } = await axiosInstance.put<AxiosResponse<CommonResponseType>>(
    END_POINTS.CHANGE_PASSWORD(memberId),
    {
      password,
    }
  );

  return data;
};
