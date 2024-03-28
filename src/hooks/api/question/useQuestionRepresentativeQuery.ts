import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getRepresentativeQuestion } from "@/api/question/getRepresentativeQuestion";

import type { QuestionRepresentativeType } from "@/types/question";

export const useQuestionRepresentativeQuery = () => {
	const { data: questionRepresentativeListData } = useQuery<QuestionRepresentativeType, AxiosError>(
		{
			queryKey: ["questionRepresentativeList"],
			queryFn: () => getRepresentativeQuestion(),
		},
	);

	return { questionRepresentativeListData };
};
