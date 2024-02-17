import { useState } from "react";

import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Box, Text } from "@/components/common";
import Profile from "@/components/Landing/Post/Detail/Profile";
import Reply from "@/components/Landing/Post/Detail/Reply";

import { useReplyQuery } from "@/hooks/api/useReplyQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { CommentListInfoType } from "@/types/comment";

import {
	getCommentTextStyle,
	commentBoxStyle,
	handleReplyTextStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

const Comment = ({ id, username, content }: CommentListInfoType) => {
	const { replyData } = useReplyQuery(0, id);

	const [replyOpen, setReplyOpen] = useState(false);

	return (
		<Flex styles={{ direction: "column", padding: "0 30px 0 18px", marginTop: "20px" }}>
			<Profile img={SampleImg} username={username} />

			<Box css={commentBoxStyle}>
				<Text size="small" css={getCommentTextStyle(false)}>
					{content}
				</Text>
			</Box>

			<Flex styles={{ align: "center", gap: "12px", paddingLeft: "43px" }}>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
					2024.01.07
				</Text>
				<Text
					size="xSmall"
					css={handleReplyTextStyle}
					onClick={() => setReplyOpen((prev) => !prev)}
				>
					답글
				</Text>
			</Flex>
			{replyOpen &&
				replyData &&
				replyData.result.replyList.map((reply) => (
					<Reply
						key={reply.id}
						onClose={() => setReplyOpen(false)}
						id={reply.id}
						content={reply.content}
						username={reply.username}
					/>
				))}
		</Flex>
	);
};

export default Comment;
