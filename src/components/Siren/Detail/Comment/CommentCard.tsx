import { useState, useEffect } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Text } from "@/components/common";
import ReplyInput from "@/components/Siren/Detail/Comment/Reply/ReplyInput";

import { useReplyQuery } from "@/hooks/api/useReplyQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
	commentCardBoxStyle,
	replyBoxStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

const CommentCard = ({ commentId, content, createdDate, member }: CommentListInfoType) => {
	const { replyData } = useReplyQuery(0, commentId);

	console.log(replyData);

	const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
	const [date, setDate] = useState("");

	useEffect(() => {
		if (createdDate) {
			const date = new Date(createdDate);

			setDate(convertToUTC(date).date);
		}
	}, [createdDate]);

	return (
		<Flex css={commentCardBoxStyle}>
			<img src={member.profileImgUrl} alt="profileImg" />

			<Flex styles={{ direction: "column", gap: "22px" }}>
				<Flex styles={{ direction: "column" }}>
					<Flex styles={{ gap: "14px", align: "center" }}>
						<Text css={getDefaultTextStyle(Theme.color.text, 500)}>{member.nickname}</Text>
						<Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
							{date}
						</Text>
					</Flex>

					<Text size="large" css={getDefaultTextStyle(Theme.color.text, 500)}>
						{content}
					</Text>
				</Flex>

				{isReplyBoxOpen && <ReplyInput commentId={commentId} />}
			</Flex>

			<Flex css={replyBoxStyle} onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}>
				<Text>{isReplyBoxOpen ? "답글접기" : "답글"}</Text>
				<OptionIcon />
			</Flex>
		</Flex>
	);
};

export default CommentCard;
