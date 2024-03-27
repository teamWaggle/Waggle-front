import { Flex, Box, Divider } from "@/components/common";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";

import type { QuestionResultType } from "@/types/question";

import { layoutStyle } from "@/components/Question/QuestionDetail/QuestionDetail.style";

const QuestionDetail = ({
	// boardId,
	title,
	// content,
	createdDate,
	hashtagList,
	// mediaList,
	member,
	// recommendationInfo,
	status,
	viewCount,
}: QuestionResultType) => {
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
				/>
			</Flex>
			<Divider />
		</Box>
	);
};

export default QuestionDetail;
