import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberInfo } from "@/api/member/getMemberInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { MemberInfoResponseType } from "@/types/auth";

export const useMemberInfoQuery = (userUrl?: string) => {
  const { data: memberData } = useSuspenseQuery<MemberInfoResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_INFO, userUrl],
    queryFn: () => getMemberInfo(userUrl),
    retry: 0,
  });

  return { memberData };
};
