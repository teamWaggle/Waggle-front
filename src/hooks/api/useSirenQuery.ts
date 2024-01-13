import { useQuery } from "@tanstack/react-query";

import type { AxiosError } from "axios";

import { getSiren } from "@api/siren/getSiren";

import { SirenType } from "@type/siren";

export const useSirenQuery = (boardId: number) => {
	const queryFn: { siren: () => Promise<SirenType> } = {
		siren: () => getSiren(boardId),
	};

	const { data } = useQuery<SirenType, AxiosError>(["siren"], queryFn.siren);

	return { siren: data! };
};
