import { useState, useEffect } from "react";

import { Flex, Box, Text } from "@/components/common";
import Profile from "@/components/Story/StoryDetail/Profile/Profile";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyListInfoType } from "@/types/reply";

import {
	getCommentTextStyle,
	replyDateTextStyle,
} from "@/components/Story/StoryDetail/Comment/Comment.style";

const ReplyItem = ({ content, member, createdDate }: ReplyListInfoType) => {
	const [date, setDate] = useState("");

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
			<Profile img={member.profileImgUrl} nickname={member.nickname} />

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
