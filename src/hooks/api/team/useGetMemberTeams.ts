import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getMemberTeams } from "@/api/team/getMemberTeams";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/api";
import type { TeamResultType } from "@/types/planning";

export const useGetMemberTeams = () => {
	const { data } = useQuery<DefaultApiResponseType<TeamResultType>, AxiosError>({
		queryKey: [QUERY_KEYS.MEMBER_TEAMS],
		queryFn: getMemberTeams,
	});
	const { teamList } = data?.result || {};
	return teamList;
};
