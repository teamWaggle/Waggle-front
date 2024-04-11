import { useSearchParams, useParams } from "react-router-dom";

import QuestionDetail from "@/components/Question/QuestionDetail/QuestionDetail";
import QuestionEdit from "@/components/Question/QuestionEdit/QuestionEdit";

import { useQuestionQuery } from "@/hooks/api/question/useQuestionQuery";

const QuestionDetailPage = () => {
  const param = useParams();

  const { questionData } = useQuestionQuery(Number(param.questionId));

  const [searchParams] = useSearchParams();

  return (
    <>
      {searchParams.get("mode") === "edit" ? (
        <QuestionEdit questionData={questionData.result} />
      ) : (
        <QuestionDetail questionData={questionData.result} />
      )}
    </>
  );
};

export default QuestionDetailPage;
