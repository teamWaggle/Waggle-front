import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

import { usePostQuestionMutation } from "@/hooks/api/question/usePostQuestionMutation";
import { usePutQuestionMutation } from "@/hooks/api/question/usePutQuestionMutation";

import type { QuestionFormData } from "@/types/question";

interface UseAddQuestionFormParams {
  questionId?: number;
  initialData?: QuestionFormData;
}

export const useAddQuestionForm = ({ questionId, initialData }: UseAddQuestionFormParams) => {
  const { mutate: postQuestionMutate } = usePostQuestionMutation();
  const { mutate: putQuestionMutate } = usePutQuestionMutation();

  const navigate = useNavigate();

  const [questionRequest, setQuestionRequest] = useState(
    initialData ?? {
      title: "",
      content: "",
      hashtagList: ["test"],
      mediaList: [],
    }
  );

  const updateInputValue = useCallback(
    <Key extends keyof QuestionFormData>(key: Key, value: QuestionFormData[Key]) => {
      setQuestionRequest((prevQuestionRequest) => {
        const data = {
          ...prevQuestionRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    if (!questionId) {
      formData.append("createQuestionRequest", JSON.stringify(questionRequest));

      postQuestionMutate(formData, {
        onSuccess: () => {
          navigate(PATH.QUESTION);
        },
      });
    } else {
      formData.append("updateQuestionRequest", JSON.stringify(questionRequest));

      putQuestionMutate(
        {
          questionId,
          formData,
        },
        {
          onSuccess: () => {
            navigate(PATH.QUESTION_DETAIL(String(questionId)));
          },
        }
      );
    }
  };

  return { questionRequest, updateInputValue, handleSubmit };
};
