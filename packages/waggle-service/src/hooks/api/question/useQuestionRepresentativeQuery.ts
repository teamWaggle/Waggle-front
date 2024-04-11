import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getRepresentativeQuestion } from "@/api/question/getRepresentativeQuestion";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { QuestionRepresentativeType } from "@/types/question";

export const useQuestionRepresentativeQuery = () => {
  const { data: questionRepresentativeListData } = useSuspenseQuery<
    QuestionRepresentativeType,
    AxiosError
  >({
    queryKey: [QUERY_KEYS.QUESTION_REPRESENTATIVE],
    queryFn: () => getRepresentativeQuestion(),
  });

  return { questionRepresentativeListData };
};
