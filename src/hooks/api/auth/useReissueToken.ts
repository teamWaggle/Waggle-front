import { useSuspenseQuery } from "@tanstack/react-query";

import { postRefreshToken } from "@/api/auth/postRefreshToken";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useReissueToken = () => {
	const { data } = useSuspenseQuery({
		queryKey: [QUERY_KEYS.REISSUE_TOKEN],
		queryFn: postRefreshToken,
		staleTime: Infinity,
		retry: false,
	});
	const memberId = data.result.member.memberId;
	return memberId;
};
