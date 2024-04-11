import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSiren } from "@/api/siren/getSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenType } from "@/types/siren";

export const useSirenQuery = (sirenId: number) => {
  const { data: sirenData } = useSuspenseQuery<SirenType, AxiosError>({
    queryKey: [QUERY_KEYS.SIREN, sirenId],
    queryFn: () => getSiren(sirenId),
  });

  return { sirenData };
};
