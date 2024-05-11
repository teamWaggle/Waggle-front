import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getSirenFilter = async (filter: string, sort: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<SirenListType>(
    END_POINTS.SIREN_FILTER(filter, sort, currentPage)
  );

  return data;
};
