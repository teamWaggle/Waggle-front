import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRecommendList } from "@/api/recommend/getRecommendList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { RecommendListType } from "@/api/recommend/getRecommendList";

export const useRecommendListQuery = (boardId: number) => {
  const { data: recommendListData } = useSuspenseQuery<RecommendListType, AxiosError>({
    queryKey: [QUERY_KEYS.RECOMMEND_LIST, boardId],
    queryFn: () => getRecommendList(boardId),
  });

  return { recommendListData };
};
