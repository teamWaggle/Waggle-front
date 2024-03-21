import { useState, useEffect } from "react";

import { Flex, Box, Text } from "@/components/common";
import DeleteWarningModal from "@/components/Story/StoryDetail/DeleteWarningModal/DeleteWarningModal";
import Profile from "@/components/Story/StoryDetail/Profile/Profile";

import useModal from "@/hooks/useModal";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyListInfoType } from "@/types/reply";

import {
	getCommentTextStyle,
	replyDateTextStyle,
} from "@/components/Story/StoryDetail/Comment/Comment.style";

const ReplyItem = ({
	replyId,
	content,
	member,
	createdDate,
	handleReplyEditClick,
}: ReplyListInfoType) => {
	const [date, setDate] = useState("");

	const modal = useModal();

	const handleDeleteReply = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={replyId} target="reply" />,
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
		<Flex
			styles={{
				direction: "column",
				width: "100%",
			}}
		>
			{/* 프로필 영역 */}
			<Profile
				img={member.profileImgUrl}
				nickname={member.nickname}
				editClick={() => handleReplyEditClick(content, replyId)}
				deleteClick={handleDeleteReply}
				ownerId={member.memberId}
			/>

			<Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
				<Text size="small" css={getCommentTextStyle}>
					{content}
				</Text>
				<Text css={replyDateTextStyle}>{date}</Text>
			</Box>
		</Flex>
	);
};

export default ReplyItem;
