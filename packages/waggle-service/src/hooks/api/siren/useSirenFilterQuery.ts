import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSirenFilter } from "@/api/siren/getSirenFilter";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

// export const useSirenFilterQuery = (filter: string) => {
//   const {
//     data: sirenListData,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     refetch,
//   } = useSuspenseInfiniteQuery<SirenListType, AxiosError>({
//     queryKey: [QUERY_KEYS.SIREN_FILTER],
//     queryFn: ({ pageParam: currentPage }) => getSirenFilter(filter, currentPage),
//     initialPageParam: 0,
//     getNextPageParam: (lastPage) => {
//       return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
//     },
//   });
// };

export const useSirenFilterQuery = (filter: string, currentPage: number) => {
  const { data: sirenListData, refetch } = useSuspenseQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_FILTER],
    queryFn: () => getSirenFilter(filter, currentPage),
  });

  return { sirenListData, refetch };
};
