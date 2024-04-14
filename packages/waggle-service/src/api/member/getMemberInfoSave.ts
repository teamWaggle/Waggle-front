import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getMemberInfoSave = async () => {
  const { data } = await authorizedAxiosInstance.get(END_POINTS.MEMBER_INFO_FIRST);

  return data;
};
