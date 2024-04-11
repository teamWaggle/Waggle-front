import { useSuspenseQuery } from "@tanstack/react-query";

import { postRefreshToken } from "@/api/auth/postRefreshToken";

import { ACCESS_TOKEN_KEY } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useReissueToken = () => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.REISSUE_TOKEN],
    queryFn: postRefreshToken,
    staleTime: Infinity,
    retry: false,
  });
  localStorage.setItem(ACCESS_TOKEN_KEY, data.result.accessToken);
  const memberId = data.result.member.memberId;
  return memberId;
};
