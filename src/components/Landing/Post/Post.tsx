import { Flex } from "@components/common";
import { PostTitle, PostCard } from "@components/Landing";

import { useStoryQuery } from "@hooks/api/useStoryQuery";
import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";

const mockItems = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
];

const Post = () => {
	const { storyData } = useStoryQuery(54);
	const { storyList } = useStoryListQuery(0);

	console.log(storyData);
	console.log(storyList);

	return (
		<Flex styles={{ gap: "16px", direction: "column", marginTop: "62px" }}>
			<PostTitle />
			<Flex styles={{ align: "center", wrap: "wrap", justify: "space-between", gap: "22px" }}>
				{mockItems.map((data) => (
					<PostCard key={data.id} />
				))}
			</Flex>
		</Flex>
	);
};

export default Post;
