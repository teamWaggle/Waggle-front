import { isLoggedInState } from "@/recoil/atoms/auth";
import { useQuery } from "@tanstack/react-query";

import { getMemberInfoSave } from "@/api/member/getMemberInfoSave";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { useRecoilValue } from "recoil";

export const useMemberInfoSaveQuery = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.MEMBER_INFO_SAVE],
    queryFn: getMemberInfoSave, // Update the queryFn assignment
    enabled: isLoggedIn === true,
    staleTime: Infinity,
    retry: false,
    meta: { errorMessage: false },
  });

  const memberId = data?.result.memberId;
  const userUrl = data?.result.userUrl;

  return { memberId, userUrl };
};
