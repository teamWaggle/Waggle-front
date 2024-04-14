import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getPetInfo } from "@/api/pet/getPetInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { PetInfoType } from "@/types/pet";

export const usePetQuery = (userUrl?: string) => {
  const { data: petData } = useSuspenseQuery<PetInfoType, AxiosError>({
    queryKey: [QUERY_KEYS.PET_INFO, userUrl],
    queryFn: () => getPetInfo(userUrl),
  });

  return { petData };
};
