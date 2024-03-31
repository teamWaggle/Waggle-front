import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getQuestionList } from "@/api/question/getQuestionList";

import type { QuestionListType } from "@/types/question";

export const useQuestionListQuery = (currentPage: number) => {
	const { data: questionListData } = useSuspenseQuery<QuestionListType, AxiosError>({
		queryKey: ["questionList"],
		queryFn: () => getQuestionList(currentPage),
	});

	return { questionListData };
};
