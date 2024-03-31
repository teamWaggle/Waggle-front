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
				<QuestionEdit
					boardId={questionData.result.boardId}
					title={questionData.result.title}
					content={questionData.result.content}
					hashtagList={questionData.result.hashtagList}
					mediaList={questionData.result.mediaList}
				/>
			) : (
				<QuestionDetail
					boardId={questionData.result.boardId}
					title={questionData.result.title}
					content={questionData.result.content}
					hashtagList={questionData.result.hashtagList}
					mediaList={questionData.result.mediaList}
					member={questionData.result.member}
					viewCount={questionData.result.viewCount}
					createdDate={questionData.result.createdDate}
					recommendationInfo={questionData.result.recommendationInfo}
					status={questionData.result.status}
				/>
			)}
		</>
	);
};

export default QuestionDetailPage;
