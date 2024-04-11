import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberInfo } from "@/api/member/getMemberInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { MemberInfoResponseType } from "@/types/auth";

export const useMemberInfoQuery = (memberId: number) => {
  const { data: memberData } = useSuspenseQuery<MemberInfoResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_INFO, memberId],
    queryFn: () => getMemberInfo(memberId),
  });

  return { memberData };
};
