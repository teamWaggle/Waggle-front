import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberInfoSave } from "@/api/member/getMemberInfoSave";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useMemberInfoSaveQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.MEMBER_INFO_SAVE],
    queryFn: getMemberInfoSave,
    staleTime: Infinity,
    retry: false,
  });

  const memberId = data.result.memberId;
  const userUrl = data.result.userUrl;

  return { memberId, userUrl };
};
