import { useParams, useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import QuestionContent from "@/components/Question/QuestionDetail/QuestionContent";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";
import { Comment } from "@/components/Siren/Detail";

import { useQuestionQuery } from "@/hooks/api/question/useQuestionQuery";

import { layoutStyle } from "@/components/Question/QuestionDetail/QuestionDetail.style";

const QuestionDetail = () => {
	const param = useParams();

	const questionId = Number(param.id);

	const { questionData } = useQuestionQuery(questionId);

	const navigate = useNavigate();

	const handleEditSiren = () => {
		if (!questionData) return;

		navigate(`/question/view/${questionId}?mode=edit`);
	};

	if (!questionData) {
		return <div>로딩중...</div>;
	}

	return (
		<Box tag="main">
			<Flex css={layoutStyle}>
				<QuestionTitle
					status={questionData.result.status}
					title={questionData.result.title}
					hashtagList={questionData.result.hashtagList}
					member={questionData.result.member}
					viewCount={questionData.result.viewCount}
					createdDate={questionData.result.createdDate}
					handleEditSiren={handleEditSiren}
				/>

				<Divider length="100%" />

				<QuestionContent
					content={questionData.result.content}
					mediaList={questionData.result.mediaList}
					recommendationInfo={questionData.result.recommendationInfo}
				/>
			</Flex>

			<Divider />

			<Comment boardId={questionData.result.boardId} />
		</Box>
	);
};

export default QuestionDetail;
