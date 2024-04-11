import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const getCheckEmail = async (email: string) => {
  const { data } = await axiosInstance.get<CommonResponseType>(END_POINTS.CHECK_EMAIL(email));

  return data;
};
