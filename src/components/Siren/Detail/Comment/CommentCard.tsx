import { useState, useEffect, useRef, useCallback } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Text } from "@/components/common";
import ReplyInput from "@/components/Siren/Detail/Comment/Reply/ReplyInput";

import { useDeleteCommentMutation } from "@/hooks/api/useDeleteCommentMutation";
import { useReplyQuery } from "@/hooks/api/useReplyQuery";
import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
	commentCardBoxStyle,
	replyBoxStyle,
	moreButtonStyle,
	menuStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

const CommentCard = ({
	commentId,
	content,
	createdDate,
	member,
	handleEditClick,
}: CommentListInfoType) => {
	const { replyData } = useReplyQuery(0, commentId);

	const deleteCommentMutation = useDeleteCommentMutation();

	console.log(replyData);

	const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [date, setDate] = useState("");

	const menuRef = useRef<HTMLUListElement>(null);

	const memberId = Number(localStorage.getItem("MEMBER_ID"));

	useClickOutSide(menuRef, () => setMenuOpen(false));

	const handleDeleteComment = useCallback(() => {
		deleteCommentMutation.mutate(commentId);
	}, [deleteCommentMutation]);

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

			<Flex css={replyBoxStyle}>
				<Text onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}>
					{isReplyBoxOpen ? "답글접기" : "답글"}
				</Text>

				{member.memberId === memberId && (
					<Flex css={moreButtonStyle} onClick={() => setMenuOpen((prev) => !prev)}>
						<OptionIcon />

						{menuOpen && (
							<ul css={menuStyle} ref={menuRef}>
								<li onClick={() => handleEditClick(content, commentId)}>수정하기</li>
								<li onClick={handleDeleteComment}>삭제하기</li>
							</ul>
						)}
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default CommentCard;
