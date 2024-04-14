import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMebmerQuestion } from "@/api/member/getMemberQuestion";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { QuestionListType } from "@/types/question";

export const useMemberQuestionQuery = (currentPage: number, userUrl?: string) => {
  const { data: mebmerQuestionData } = useSuspenseQuery<QuestionListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_QUESTION, userUrl],
    queryFn: () => getMebmerQuestion(currentPage, userUrl),
  });

  return { mebmerQuestionData };
};
