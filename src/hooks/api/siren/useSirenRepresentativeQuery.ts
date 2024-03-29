import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRepresentativeSiren } from "@/api/siren/getRepresentativeSiren";

import type { SirenRepresentativeType } from "@/types/siren";

export const useSirenRepresentativeQuery = () => {
	const { data: sirenRepresentativeListData } = useSuspenseQuery<
		SirenRepresentativeType,
		AxiosError
	>({
		queryKey: ["sirenRepresentativeList"],
		queryFn: () => getRepresentativeSiren(),
	});

	return { sirenRepresentativeListData };
};
