import Flex from "@components/common/Flex/Flex";
import PostCard from "./PostCard";

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
		<Flex styles={{ align: "center", wrap: "wrap", gap: "14px" }}>
			{mockItems.map((data) => (
				<PostCard key={data.id} />
			))}
		</Flex>
	);
};

export default Post;
