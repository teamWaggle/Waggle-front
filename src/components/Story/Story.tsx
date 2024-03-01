import { Flex } from "@/components/common";
import { StoryTitle, StoryCard } from "@/components/Story";

import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";

const Story = () => {
	const { storyList } = useStoryListQuery(0);

	return (
		<Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
			<StoryTitle />
			<Flex styles={{ align: "center", wrap: "wrap", justify: "space-between", width: "100%" }}>
				{storyList &&
					storyList.result.storyList.map((storyInfo) => (
						<StoryCard key={storyInfo.id} id={storyInfo.id} thumbnail={storyInfo.thumbnail} />
					))}
			</Flex>
		</Flex>
	);
};

export default Story;
