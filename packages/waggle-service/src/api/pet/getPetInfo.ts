import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { PetInfoType } from "@/types/pet";

export const getPetInfo = async (userUrl?: string) => {
  const { data } = await axiosInstance.get<PetInfoType>(END_POINTS.MEMBER_PET(userUrl));

  return data;
};
