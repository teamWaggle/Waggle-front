import { useMutation } from "@tanstack/react-query";

import { getMemberInfo } from "@/api/member/getMemberInfo";

export const useGetMemberInfoMutation = () => {
	const getMemberInfoMutation = useMutation({
		mutationFn: getMemberInfo,
	});

	return getMemberInfoMutation;
};
