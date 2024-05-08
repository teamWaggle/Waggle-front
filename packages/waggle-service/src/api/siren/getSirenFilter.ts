import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getSirenFilter = async (filter: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<SirenListType>(
    END_POINTS.SIREN_FILTER(filter, currentPage)
  );

  return data;
};
