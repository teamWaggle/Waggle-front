import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const putPasswordChange = async ({ password }: { password?: string }) => {
  const { data } = await authorizedAxiosInstance.put<AxiosResponse<CommonResponseType>>(
    END_POINTS.PASSWORD_CHANGE,
    {
      password,
    }
  );

  return data;
};
