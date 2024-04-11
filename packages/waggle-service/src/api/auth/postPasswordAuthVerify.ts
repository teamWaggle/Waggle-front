import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { EmailAuthVerifyType } from "@/types/auth";
import type { CommonResponseType } from "@/types/common";

export const postPasswordAuthVerify = async ({ email, authCode }: EmailAuthVerifyType) => {
  const { data } = await axiosInstance.post<EmailAuthVerifyType, AxiosResponse<CommonResponseType>>(
    END_POINTS.PASSWORD_AUTH_VERIFY,
    {
      email,
      authCode,
    }
  );

  return data;
};
