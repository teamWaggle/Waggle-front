import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getSiren } from "@/api/siren/getSiren";

import type { SirenType } from "@/types/siren";

export const useSirenQuery = (sirenId: number) => {
	const { data: sirenData } = useQuery<SirenType, AxiosError>({
		queryKey: ["siren"],
		queryFn: () => getSiren(sirenId),
	});

	return { sirenData };
};
