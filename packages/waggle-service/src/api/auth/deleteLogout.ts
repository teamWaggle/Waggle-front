import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteLogout = () => {
  return authorizedAxiosInstance.delete(END_POINTS.LOGIN);
};
