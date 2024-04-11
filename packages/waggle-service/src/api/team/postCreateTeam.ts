import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const postCreateTeam = async (formData: FormData) => {
  return await authorizedAxiosInstance.post<FormData, AxiosResponse<CommonResponseType>>(
    END_POINTS.CREATE_TEAM,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};
