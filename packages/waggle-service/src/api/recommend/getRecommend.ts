import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseResultBooleanType } from "@/types/common";

export const getRecommend = async (boardId: number) => {
  const { data } = await authorizedAxiosInstance.get<CommonResponseResultBooleanType>(
    END_POINTS.RECOMMEND(boardId)
  );

  return data;
};
