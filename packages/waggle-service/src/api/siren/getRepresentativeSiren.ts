import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SirenRepresentativeType } from "@/types/siren";

export const getRepresentativeSiren = async () => {
  const { data } = await axiosInstance.get<SirenRepresentativeType>(
    END_POINTS.SIREN_REPRESENTATIVE
  );

  return data;
};
