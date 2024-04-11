import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRecommend } from "@/api/recommend/getRecommend";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommonResponseResultBooleanType } from "@/types/common";

export const useGetIsRecommend = (boardId: number) => {
  const { data: recommendData } = useSuspenseQuery<CommonResponseResultBooleanType, AxiosError>({
    queryKey: [QUERY_KEYS.RECOMMEND, boardId],
    queryFn: () => getRecommend(boardId),
  });

  const isRecommend = recommendData.result;

  return isRecommend;
};
