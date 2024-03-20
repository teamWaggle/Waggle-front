import { Fragment } from "react";

import { Flex } from "@/components/common";
import { StoryTitle, StoryCard } from "@/components/Story";

import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";
import useObserver from "@/hooks/useObserver";

const Story = () => {
	const { storyListData, hasNextPage, fetchNextPage, isFetching } = useStoryListQuery();

	const ref = useObserver(async (entry, observer) => {
		observer.unobserve(entry.target);

		if (hasNextPage && !isFetching) {
			fetchNextPage();
		}
	});

	return (
		<Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
			<StoryTitle />

			<Flex styles={{ align: "center", wrap: "wrap", gap: "28px", width: "100%" }}>
				{storyListData &&
					storyListData.pages.map((storyData, index) => (
						<Fragment key={index}>
							{storyData.result.storyList.map((storyInfo) => (
								<StoryCard
									key={storyInfo.boardId}
									boardId={storyInfo.boardId}
									thumbnail={storyInfo.thumbnail}
								/>
							))}
						</Fragment>
					))}
			</Flex>
			<div ref={ref} />
		</Flex>
	);
};

export default Story;
