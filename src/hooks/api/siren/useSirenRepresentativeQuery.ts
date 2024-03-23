import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getRepresentativeSiren } from "@/api/siren/getRepresentativeSiren";

import type { SirenRepresentativeType } from "@/types/siren";

export const useSirenRepresentativeQuery = () => {
	const { data: sirenRepresentativeListData } = useQuery<SirenRepresentativeType, AxiosError>({
		queryKey: ["sirenList"],
		queryFn: () => getRepresentativeSiren(),
	});

	return { sirenRepresentativeListData };
};
