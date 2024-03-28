import { useSearchParams, useParams } from "react-router-dom";

import QuestionDetail from "@/components/Question/QuestionDetail/QuestionDetail";
import QuestionEdit from "@/components/Question/QuestionEdit/QuestionEdit";

import { useQuestionQuery } from "@/hooks/api/question/useQuestionQuery";

const QuestionDetailPage = () => {
	const param = useParams();

	const { questionData } = useQuestionQuery(Number(param.id));

	const [searchParams] = useSearchParams();

	return (
		<>
			{questionData &&
				(searchParams.get("mode") === "edit" ? (
					<QuestionEdit
						boardId={questionData.result.boardId}
						title={questionData.result.title}
						content={questionData.result.content}
						hashtagList={questionData.result.hashtagList}
						mediaList={questionData.result.mediaList}
					/>
				) : (
					<QuestionDetail />
				))}
		</>
	);
};

export default QuestionDetailPage;
