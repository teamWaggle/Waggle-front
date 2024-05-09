import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberSiren } from "@/api/member/getMemberSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useMemberSirenQuery = (userUrl?: string) => {
  const {
    data: memberSirenData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_SIREN, userUrl],
    queryFn: ({ pageParam: currentPage }) => getMemberSiren(currentPage, userUrl),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberSirenData, fetchNextPage, hasNextPage, isFetching };
};
