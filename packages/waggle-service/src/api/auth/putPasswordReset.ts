import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface PasswordResetRequest {
  memberId?: number;
  password: string;
}

export const putPasswordReset = async ({ memberId, password }: PasswordResetRequest) => {
  const { data } = await axiosInstance.put<AxiosResponse<CommonResponseType>>(
    END_POINTS.PASSWORD_RESET(memberId),
    {
      password,
    }
  );

  return data;
};
