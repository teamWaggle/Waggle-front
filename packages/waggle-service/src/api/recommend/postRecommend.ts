import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const postRecommend = async (boardId: number) => {
  return await authorizedAxiosInstance.post<number, AxiosResponse<CommonResponseType>>(
    END_POINTS.RECOMMEND(boardId)
  );
};
