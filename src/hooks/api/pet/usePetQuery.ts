import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getPetInfo } from "@/api/pet/getPetInfo";

import type { PetInfoType } from "@/types/pet";

export const usePetQuery = (memberId: number) => {
	const { data: petData } = useSuspenseQuery<PetInfoType, AxiosError>({
		queryKey: ["petInfo"],
		queryFn: () => getPetInfo(memberId),
	});

	return { petData };
};
