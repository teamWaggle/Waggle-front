import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberSiren } from "@/api/member/getMemberSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useMemberSirenQuery = (currentPage: number, userUrl?: string) => {
  const { data: memberSirenData } = useSuspenseQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_SIREN, userUrl],
    queryFn: () => getMemberSiren(currentPage, userUrl),
  });

  return { memberSirenData };
};
