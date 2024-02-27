import { Flex } from "@/components/common";
import { StoryTitle, StoryCard } from "@/components/Story";

import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";

const Story = () => {
	const { storyList } = useStoryListQuery(0);

	return (
		<Flex styles={{ gap: "16px", direction: "column", marginTop: "62px" }}>
			<StoryTitle />
			<Flex styles={{ align: "center", wrap: "wrap", justify: "space-between", gap: "22px" }}>
				{storyList &&
					storyList.result.storyList.map((storyInfo) => (
						<StoryCard key={storyInfo.id} id={storyInfo.id} thumbnail={storyInfo.thumbnail} />
					))}
			</Flex>
		</Flex>
	);
};

export default Story;
