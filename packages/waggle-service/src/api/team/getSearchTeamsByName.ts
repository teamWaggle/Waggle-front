import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const getSearchTeamsByName = async (name: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get(END_POINTS.SEARCH_TEAM_BY_NAME(name, currentPage));
  return { ...data, nextPageParam: (currentPage as number) + 1 };
};
