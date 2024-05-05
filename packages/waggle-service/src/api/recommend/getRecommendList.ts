import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";

interface RecommendResultType {
  memberList: MemberType[];
  memberCount: number;
}

export interface RecommendListType extends CommonResponseBaseType {
  result: RecommendResultType;
}

export const getRecommendList = async (boardId: number) => {
  const { data } = await axiosInstance.get<RecommendListType>(END_POINTS.RECOMMEND_LIST(boardId));

  return data;
};
