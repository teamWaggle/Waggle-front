import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getSirenList } from "@/api/siren/getSirenList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useSirenListQuery = (keyword: string, sortParam: string, filterParam: string) => {
  const {
    data: sirenListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useSuspenseInfiniteQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_LIST],
    queryFn: ({ pageParam: currentPage }) =>
      getSirenList(keyword, sortParam, filterParam, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { sirenListData, fetchNextPage, hasNextPage, isFetching, refetch };
};
