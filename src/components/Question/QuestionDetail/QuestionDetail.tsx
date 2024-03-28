import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import QuestionContent from "@/components/Question/QuestionDetail/QuestionContent";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";
import { Comment } from "@/components/Siren/Detail";

import type { QuestionResultType } from "@/types/question";

import { layoutStyle } from "@/components/Question/QuestionDetail/QuestionDetail.style";

const QuestionDetail = ({
	boardId,
	title,
	content,
	createdDate,
	hashtagList,
	mediaList,
	member,
	recommendationInfo,
	status,
	viewCount,
}: QuestionResultType) => {
	const navigate = useNavigate();

	const handleEditSiren = () => {
		navigate(`/question/view/${boardId}?mode=edit`);
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
					handleEditSiren={handleEditSiren}
				/>

				<Divider length="100%" />

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
