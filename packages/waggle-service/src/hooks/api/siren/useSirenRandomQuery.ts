import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRandomSiren } from "@/api/siren/getRandomSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenRepresentativeType } from "@/types/siren";

export const useSirenRandomQuery = () => {
  const { data: sirenRandomListData } = useSuspenseQuery<SirenRepresentativeType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN_RANDOM],
    queryFn: () => getRandomSiren(),
  });

  return { sirenRandomListData };
};
