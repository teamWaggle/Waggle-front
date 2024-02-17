import { useState } from "react";

import SampleImg from "@/assets/png/post-sample2.png";
import MoreButtonIcon from "@/assets/svg/ic-more-button.svg?react";

import { Flex, Box, Text } from "@/components/common";
import Reply from "@/components/Landing/Post/Detail/Reply";

import { useReplyQuery } from "@/hooks/api/useReplyQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { CommentListInfoType } from "@/types/comment";

import {
	profileStyle,
	getCommentTextStyle,
	commentBoxStyle,
	handleReplyTextStyle,
	moreButtonStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

const Comment = ({ id, username, content }: CommentListInfoType) => {
	const { replyData } = useReplyQuery(0, id);

	const [replyOpen, setReplyOpen] = useState(false);

	return (
		<Flex styles={{ direction: "column", padding: "0 30px 0 18px", marginTop: "20px" }}>
			<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
				<Flex styles={{ align: "center", gap: "10px" }}>
					<img src={SampleImg} alt="profileImg" css={profileStyle} />
					<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
						{username}
					</Text>
				</Flex>
				<Flex styles={{ justify: "flex-end" }} css={moreButtonStyle}>
					<MoreButtonIcon />
				</Flex>
			</Flex>

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
