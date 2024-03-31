import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import Comment from "@/components/common/Comment/Comment";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import QuestionContent from "@/components/Question/QuestionDetail/QuestionContent";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";

import { PATH } from "@/constants/path";

import useModal from "@/hooks/useModal";

import type { QuestionResultType } from "@/types/question";

import { layoutStyle } from "@/components/common/Post/Post.style";

const QuestionDetail = ({
	boardId,
	title,
	content,
	hashtagList,
	mediaList,
	member,
	viewCount,
	createdDate,
	recommendationInfo,
	status,
}: QuestionResultType) => {
	const navigate = useNavigate();

	const modal = useModal();

	const handleDeleteQuestion = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={boardId} target="question" />,
			notCloseIcon: true,
		});
	};

	return (
		<Box tag="main">
			<Flex css={layoutStyle}>
				<QuestionTitle
					status={status}
					title={title}
					hashtagList={hashtagList}
					member={member}
					viewCount={viewCount}
					createdDate={createdDate}
					handleEditQuestion={() => navigate(PATH.QUESTION_EDIT(String(boardId)))}
					handleDeleteQuestion={handleDeleteQuestion}
				/>

				<Divider />

				<QuestionContent
					content={content}
					mediaList={mediaList}
					recommendationInfo={recommendationInfo}
				/>
			</Flex>

			<Divider />

			<Comment boardId={boardId} />
		</Box>
	);
};

export default QuestionDetail;
