import { useParams, useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import QuestionContent from "@/components/Question/QuestionDetail/QuestionContent";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";
import { Comment } from "@/components/Siren/SirenDetail";

import { useQuestionQuery } from "@/hooks/api/question/useQuestionQuery";
import useModal from "@/hooks/useModal";

import { layoutStyle } from "@/components/common/Post/PostDetail.style";

const QuestionDetail = () => {
	const param = useParams();

	const questionId = Number(param.id);

	const { questionData } = useQuestionQuery(questionId);

	const navigate = useNavigate();

	const modal = useModal();

	const handleEditQuestion = () => {
		if (!questionData) return;

		navigate(`/question/view/${questionId}?mode=edit`);
	};

	const handleDeleteQuestion = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={questionId} target="question" />,
			notCloseIcon: true,
		});
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
					handleEditQuestion={handleEditQuestion}
					handleDeleteQuestion={handleDeleteQuestion}
				/>

				<Divider />

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
