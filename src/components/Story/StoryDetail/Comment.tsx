import { useState, useEffect } from "react";

import { Flex, Box, Text } from "@/components/common";
import DeleteWarningModal from "@/components/Story/StoryDetail/DeleteWarningModal";
import Profile from "@/components/Story/StoryDetail/Profile";
import Reply from "@/components/Story/StoryDetail/Reply";

import { useReplyQuery } from "@/hooks/api/useReplyQuery";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
	getCommentTextStyle,
	commentBoxStyle,
	handleReplyTextStyle,
} from "@/components/Story/StoryDetail/StoryDetail.style";

const Comment = ({ commentId, member, content, createdDate }: CommentListInfoType) => {
	const { replyData } = useReplyQuery(0, commentId);

	const [replyOpen, setReplyOpen] = useState(false);
	const [date, setDate] = useState("");

	const modal = useModal();

	const handleDeleteComment = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal commentId={commentId} />,
			isUpper: true,
			notCloseIcon: true,
		});
	};

	useEffect(() => {
		if (createdDate) {
			const date = new Date(createdDate);

			setDate(convertToUTC(date).date);
		}
	}, [createdDate]);

	return (
		<Flex styles={{ direction: "column", padding: "0 30px 0 18px" }}>
			<Profile
				img={member.profileImgUrl}
				nickname={member.nickname}
				deleteClick={handleDeleteComment}
			/>

			<Box css={commentBoxStyle}>
				<Text size="small" css={getCommentTextStyle(false)}>
					{content}
				</Text>
			</Box>

			<Flex styles={{ align: "center", gap: "12px", paddingLeft: "43px" }}>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
					{date}
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
						member={reply.member}
						createdDate={reply.createdDate}
					/>
				))}
		</Flex>
	);
};

export default Comment;
