import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getQuestionList } from "@/api/question/getQuestionList";

import type { QuestionListType } from "@/types/question";

export const useQuestionListQuery = (currentPage: number) => {
	const { data: questionListData } = useQuery<QuestionListType, AxiosError>({
		queryKey: ["questionList"],
		queryFn: () => getQuestionList(currentPage),
	});

	return { questionListData };
};
