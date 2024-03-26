import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getQuestion } from "@/api/question/getQuestion";

import type { QuestionType } from "@/types/question";

export const useQuestionQuery = (questionId: number) => {
	const { data: questionData } = useQuery<QuestionType, AxiosError>({
		queryKey: ["question"],
		queryFn: () => getQuestion(questionId),
	});

	return { questionData };
};
