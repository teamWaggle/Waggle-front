import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteSiren = (sirenId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.SIREN(sirenId));
};
