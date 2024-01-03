import { Flex } from "@components/common";
import CommentCard from "./CommentCard";

import { boxStyle } from "./Comment.style";

const Comment = () => {
	return (
		<Flex styles={{ direction: "column", gap: "60px" }} css={boxStyle}>
			<Flex styles={{ direction: "column", gap: "36px", width: "100%" }}>
				<CommentCard />
				<CommentCard />
				<CommentCard />
				<CommentCard />
				<CommentCard />
			</Flex>
		</Flex>
	);
};

export default Comment;
