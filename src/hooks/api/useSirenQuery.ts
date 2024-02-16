import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { SirenType } from "@/types/siren";

import { getSiren } from "@/api/siren/getSiren";

export const useSirenQuery = (boardId: number) => {
	const queryFn: { siren: () => Promise<SirenType> } = {
		siren: () => getSiren(boardId),
	};

	const { data } = useQuery<SirenType, AxiosError>(["siren"], queryFn.siren);

	return { siren: data! };
};
