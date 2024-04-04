import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberSiren } from "@/api/member/getMemberSiren";

import type { SirenListType } from "@/types/siren";

export const useMemberSirenQuery = (memberId: number, currentPage: number) => {
	const { data: memberSirenData } = useSuspenseQuery<SirenListType, AxiosError>({
		queryKey: ["memberSiren"],
		queryFn: () => getMemberSiren(memberId, currentPage),
	});

	return { memberSirenData };
};
