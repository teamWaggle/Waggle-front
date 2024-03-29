import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSirenList } from "@/api/siren/getSirenList";

import type { SirenListType } from "@/types/siren";

export const useSirenListQuery = (currentPage: number) => {
	const { data: sirenListData } = useSuspenseQuery<SirenListType, AxiosError>({
		queryKey: ["sirenList"],
		queryFn: () => getSirenList(currentPage),
	});

	return { sirenListData };
};
