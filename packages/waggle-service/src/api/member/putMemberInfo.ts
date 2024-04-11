import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const putMemberInfo = async (formData: FormData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return await authorizedAxiosInstance.put<FormData, AxiosResponse<CommonResponseType>>(
    END_POINTS.SIGN_UP,
    formData,
    config
  );
};
