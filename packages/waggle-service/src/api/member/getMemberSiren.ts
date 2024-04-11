import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenListType } from "@/types/siren";

export const getMemberSiren = async (memberId: number, currentPage: number) => {
  const { data } = await axiosInstance.get<SirenListType>(
    END_POINTS.MEMBER_SIREN(memberId, currentPage)
  );

  return data;
};
