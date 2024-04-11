import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSirenList } from "@/api/siren/getSirenList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useSirenListQuery = (currentPage: number) => {
  const { data: sirenListData } = useSuspenseQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_LIST],
    queryFn: () => getSirenList(currentPage),
  });

  return { sirenListData };
};
