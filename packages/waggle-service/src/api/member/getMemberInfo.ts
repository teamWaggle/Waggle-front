import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { MemberInfoResponseType } from "@/types/auth";

export const getMemberInfo = async (memberId: number) => {
  const { data } = await axiosInstance.get<MemberInfoResponseType>(
    END_POINTS.GET_MEMBER_INFO(memberId)
  );

  return data;
};
