import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSirenCategory } from "@/api/siren/getSirenCategory";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useSirenCategoryQuery = (category: string, currentPage: number) => {
  const { data: sirenListData, refetch } = useSuspenseQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_CATEGORY],
    queryFn: () => getSirenCategory(category, currentPage),
  });

  return { sirenListData, refetch };
};
