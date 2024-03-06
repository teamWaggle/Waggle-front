import { useState, useEffect } from "react";

import { Flex, Box, Text } from "@/components/common";
import Reply from "@/components/Story/StoryDetail/Comment/Reply/Reply";
import DeleteWarningModal from "@/components/Story/StoryDetail/DeleteWarningModal/DeleteWarningModal";
import Profile from "@/components/Story/StoryDetail/Profile/Profile";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
	getCommentTextStyle,
	handleCommentTextStyle,
} from "@/components/Story/StoryDetail/Comment/Comment.style";

const Comment = ({ commentId, member, content, createdDate }: CommentListInfoType) => {
	const [replyOpen, setReplyOpen] = useState(false);
	const [date, setDate] = useState("");

	const modal = useModal();

	const handleDeleteComment = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={commentId} />,
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

			<Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
				<Text size="small" css={getCommentTextStyle}>
					{content}
				</Text>
			</Box>

			<Flex styles={{ align: "center", gap: "12px", paddingLeft: "43px" }}>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
					{date}
				</Text>
				<Text
					size="xSmall"
					css={handleCommentTextStyle}
					onClick={() => setReplyOpen((prev) => !prev)}
				>
					답글
				</Text>
			</Flex>

			{replyOpen && <Reply commentId={commentId} setReplyOpen={setReplyOpen} />}
		</Flex>
	);
};

export default Comment;
