import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getSirenCategory = async (category: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<SirenListType>(
    END_POINTS.SIREN_CATEGORY(category, currentPage)
  );

  return data;
};
