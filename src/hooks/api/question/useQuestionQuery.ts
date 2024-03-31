import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getQuestion } from "@/api/question/getQuestion";

import type { QuestionType } from "@/types/question";

export const useQuestionQuery = (questionId: number) => {
	const { data: questionData } = useSuspenseQuery<QuestionType, AxiosError>({
		queryKey: ["question"],
		queryFn: () => getQuestion(questionId),
	});

	return { questionData };
};
