import { Flex } from "@components/common";
import { PostTitle, PostCard } from "@components/Landing";

import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";

const Post = () => {
	const { storyList } = useStoryListQuery(0);

	return (
		<Flex styles={{ gap: "16px", direction: "column", marginTop: "62px" }}>
			<PostTitle />
			<Flex styles={{ align: "center", wrap: "wrap", justify: "space-between", gap: "22px" }}>
				{storyList &&
					storyList.result.storyList.map((storyInfo) => (
						<PostCard key={storyInfo.id} id={storyInfo.id} thumbnail={storyInfo.thumbnail} />
					))}
			</Flex>
		</Flex>
	);
};

export default Post;
