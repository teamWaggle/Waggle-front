import { Flex } from "@/components/common";
import { StoryTitle } from "@/components/Story";
import StoryCardSkeleton from "@/components/Story/StoryCardSkeleton";

const length = 9;

const StorySkeleton = () => {
	return (
		<Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
			<StoryTitle />
			<Flex styles={{ align: "center", wrap: "wrap", gap: "28px", width: "100%" }}>
				{Array.from({ length }, (_, index) => (
					<StoryCardSkeleton key={index} />
				))}
			</Flex>
		</Flex>
	);
};

export default StorySkeleton;
