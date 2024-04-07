import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";

export const getMemberTeams = async (memberId: number | null) => {
	const { data } = await axiosInstance.get<DefaultApiResponseType<TeamResultType>>(
		END_POINTS.MEMBER_TEAMS(memberId || null),
	);
	return data;
};
