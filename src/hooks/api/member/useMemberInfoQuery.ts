import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberInfo } from "@/api/member/getMemberInfo";

import type { MemberInfoResponseType } from "@/types/auth";

export const useMemberInfoQuery = (memberId: number) => {
	const { data: memberData } = useSuspenseQuery<MemberInfoResponseType, AxiosError>({
		queryKey: ["memberInfo"],
		queryFn: () => getMemberInfo(memberId),
	});

	return { memberData };
};
