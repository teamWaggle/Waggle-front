import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getSirenList = async (
  keyword: string,
  sortParam: string,
  filterParam: string,
  currentPage: unknown
) => {
  const { data } = await axiosInstance.get<SirenListType>(
    END_POINTS.SIREN_LIST(keyword, sortParam, filterParam, currentPage)
  );

  return data;
};
