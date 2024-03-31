import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRepresentativeQuestion } from "@/api/question/getRepresentativeQuestion";

import type { QuestionRepresentativeType } from "@/types/question";

export const useQuestionRepresentativeQuery = () => {
	const { data: questionRepresentativeListData } = useSuspenseQuery<
		QuestionRepresentativeType,
		AxiosError
	>({
		queryKey: ["questionRepresentativeList"],
		queryFn: () => getRepresentativeQuestion(),
	});

	return { questionRepresentativeListData };
};
