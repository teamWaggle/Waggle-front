import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { DefaultApiResponseType } from "@/types/api";
import type { TeamResultType } from "@/types/planning";

export const getMemberTeams = async () => {
	const memberId = Number(localStorage.getItem("MEMBER_ID"));
	const { data } = await axiosInstance.get<DefaultApiResponseType<TeamResultType>>(
		END_POINTS.MEMBER_TEAMS(memberId),
	);
	return data;
};
