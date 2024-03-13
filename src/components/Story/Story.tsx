// import { useState, useEffect } from "react";

import { Flex } from "@/components/common";
import { StoryTitle, StoryCard } from "@/components/Story";

import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";
// import { useStoryListTestQuery } from "@/hooks/api/useStoryListQuery";

const Story = () => {
	// const [currentPage, setCurrentPage] = useState(0);
	const { storyListData } = useStoryListQuery(0);
	// const { storyListData, hasNextPage, fetchNextPage } = useStoryListTestQuery(currentPage);

	// console.log(storyListData?.pages);
	// console.log(hasNextPage);

	// useEffect(() => {
	// 	if (hasNextPage) {
	// 		setCurrentPage((prev) => prev + 1);
	// 	}
	// 	fetchNextPage();
	// }, [hasNextPage]);

	return (
		<Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
			<StoryTitle />
			<Flex styles={{ align: "center", wrap: "wrap", gap: "28px", width: "100%" }}>
				{storyListData &&
					storyListData.result.storyList.map((storyInfo) => (
						<StoryCard
							key={storyInfo.boardId}
							boardId={storyInfo.boardId}
							thumbnail={storyInfo.thumbnail}
						/>
					))}
			</Flex>
		</Flex>
	);
};

export default Story;
