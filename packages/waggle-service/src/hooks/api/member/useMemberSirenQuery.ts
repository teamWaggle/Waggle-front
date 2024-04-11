import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberSiren } from "@/api/member/getMemberSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { SirenListType } from "@/types/siren";

export const useMemberSirenQuery = (memberId: number, currentPage: number) => {
  const { data: memberSirenData } = useSuspenseQuery<SirenListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_SIREN, memberId],
    queryFn: () => getMemberSiren(memberId, currentPage),
  });

  return { memberSirenData };
};
