import { Flex } from "@components/common";
import { PostTitle, PostCard } from "@components/Landing";

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
	return (
		<Flex styles={{ gap: "16px", direction: "column", marginTop: "162px" }}>
			<PostTitle />
			<Flex styles={{ align: "center", wrap: "wrap", gap: "12px" }}>
				{mockItems.map((data) => (
					<PostCard key={data.id} />
				))}
			</Flex>
		</Flex>
	);
};

export default Post;
