import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getSiren } from "@/api/siren/getSiren";
import { SirenType } from "@/types/siren";

export const useSirenQuery = (boardId: number) => {
	const queryFn: { siren: () => Promise<SirenType> } = {
		siren: () => getSiren(boardId),
	};

	const { data } = useQuery<SirenType, AxiosError>(["siren"], queryFn.siren);

	return { siren: data! };
};
