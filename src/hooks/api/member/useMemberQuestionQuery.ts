import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMebmerQuestion } from "@/api/member/getMemberQuestion";

import type { QuestionListType } from "@/types/question";

export const useMemberQuestionQuery = (memberId: number, currentPage: number) => {
	const { data: mebmerQuestionData } = useSuspenseQuery<QuestionListType, AxiosError>({
		queryKey: ["memberQuestion"],
		queryFn: () => getMebmerQuestion(memberId, currentPage),
	});

	return { mebmerQuestionData };
};
