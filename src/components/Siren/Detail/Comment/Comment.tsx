import { Flex, Box, Text } from "@/components/common";
import CommentCard from "@/components/Siren/Detail/Comment/CommentCard";

import {
	boxStyle,
	commentTextareaStyle,
	submitButtonStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

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
			<Box styles={{ position: "relative", marginBottom: "60px" }}>
				<textarea css={commentTextareaStyle} />
				<Flex tag="button" styles={{ justify: "center", align: "center" }} css={submitButtonStyle}>
					<Text>등록</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Comment;
