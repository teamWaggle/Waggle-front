import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getPetInfo } from "@/api/pet/getPetInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { PetInfoType } from "@/types/pet";

export const usePetQuery = (memberId: number) => {
  const { data: petData } = useSuspenseQuery<PetInfoType, AxiosError>({
    queryKey: [QUERY_KEYS.PET_INFO, memberId],
    queryFn: () => getPetInfo(memberId),
  });

  return { petData };
};
