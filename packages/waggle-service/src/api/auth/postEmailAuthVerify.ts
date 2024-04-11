import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { EmailAuthVerifyType } from "@/types/auth";
import type { CommonResponseType } from "@/types/common";

export const postEmailAuthVerify = async ({ email, authCode }: EmailAuthVerifyType) => {
  const { data } = await axiosInstance.post<EmailAuthVerifyType, AxiosResponse<CommonResponseType>>(
    END_POINTS.EMAIL_AUTH_VERIFY,
    {
      email,
      authCode,
    }
  );

  return data;
};
