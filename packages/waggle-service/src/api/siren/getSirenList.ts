import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getSirenList = async (currentPage: number) => {
  const { data } = await axiosInstance.get<SirenListType>(END_POINTS.SIREN_LIST(currentPage));

  return data;
};
