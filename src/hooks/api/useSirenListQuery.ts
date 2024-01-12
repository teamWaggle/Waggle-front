import { useQuery } from "@tanstack/react-query";

import type { AxiosError } from "axios";

import { getSirenList } from "@api/siren/getSirenList";

import type { SirenListType } from "@type/siren";

export const useSirenListQuery = (currentPage: number) => {
	const queryFn: { sirenList: () => Promise<SirenListType> } = {
		sirenList: () => getSirenList(currentPage),
	};

	const { data } = useQuery<SirenListType, AxiosError>(["sirenList"], queryFn.sirenList);

	return { sirenList: data! };
};
