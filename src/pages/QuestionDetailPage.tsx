import { useParams } from "react-router-dom";

import QuestionDetail from "@/components/Question/QuestionDetail/QuestionDetail";

import { useQuestionQuery } from "@/hooks/api/question/useQuestionQuery";

const QuestionDetailPage = () => {
	const param = useParams();

	const { questionData } = useQuestionQuery(Number(param.id));

	return (
		<>
			{questionData && (
				<QuestionDetail
					boardId={questionData.result.boardId}
					title={questionData.result.title}
					content={questionData.result.content}
					createdDate={questionData.result.createdDate}
					hashtagList={questionData.result.hashtagList}
					mediaList={questionData.result.mediaList}
					member={questionData.result.member}
					recommendationInfo={questionData.result.recommendationInfo}
					status={questionData.result.status}
					viewCount={questionData.result.viewCount}
				/>
			)}
		</>
	);
};

export default QuestionDetailPage;
