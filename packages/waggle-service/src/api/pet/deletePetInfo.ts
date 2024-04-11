import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deletePetInfo = (petId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.PET(petId));
};
