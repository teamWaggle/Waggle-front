import { Flex } from "@/components/common";
import PostContent from "@/components/common/Post/PostContent";
import PostRecommend from "@/components/common/Post/PostRecommend";

import type { QuestionContentType } from "@/types/question";

const QuestionContent = ({ content, mediaList, recommendCount }: QuestionContentType) => {
	return (
		<Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
			<PostContent mediaList={mediaList} content={content} />

			<PostRecommend isRecommend recommendCount={recommendCount} />
		</Flex>
	);
};

export default QuestionContent;
