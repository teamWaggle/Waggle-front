import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";

export const getRecommendTeams = async (currentPage: unknown) => {
  const { data } = await axiosInstance.get<DefaultApiResponseType<TeamResultType>>(
    END_POINTS.RECOMMEND_TEAMS(currentPage)
  );
  return { ...data, nextPageParam: (currentPage as number) + 1 };
};
