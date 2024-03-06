import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getSirenList } from "@/api/siren/getSirenList";

import type { SirenListType } from "@/types/siren";

export const useSirenListQuery = (currentPage: number) => {
	const { data: sirenListData } = useQuery<SirenListType, AxiosError>({
		queryKey: ["sirenList"],
		queryFn: () => getSirenList(currentPage),
	});

	return { sirenListData };
};
