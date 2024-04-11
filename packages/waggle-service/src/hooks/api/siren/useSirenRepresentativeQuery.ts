import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRepresentativeSiren } from "@/api/siren/getRepresentativeSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenRepresentativeType } from "@/types/siren";

export const useSirenRepresentativeQuery = () => {
  const { data: sirenRepresentativeListData } = useSuspenseQuery<
    SirenRepresentativeType,
    AxiosError
  >({
    queryKey: [QUERY_KEYS.SIREN_REPRESENTATIVE],
    queryFn: () => getRepresentativeSiren(),
  });

  return { sirenRepresentativeListData };
};
