import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getSirenFilter } from "@/api/siren/getSirenFilter";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useSirenFilterQuery = (filter: string, sort: string) => {
  const {
    data: sirenListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useSuspenseInfiniteQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_LIST],
    queryFn: ({ pageParam: currentPage }) => getSirenFilter(filter, sort, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { sirenListData, fetchNextPage, hasNextPage, isFetching, refetch };
};
