import { useState, useRef, useCallback } from "react";

import HeartEmptyIcon from "@/assets/svg/ic-heart-empty.svg?react";

import { Flex, Box, Divider, Text, Carousel } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import Comment from "@/components/Story/StoryComment/Comment/Comment";
import CommentInput from "@/components/Story/StoryComment/Comment/CommentInput";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";
import StoryUploadModal from "@/components/Story/StoryUploadModal/StoryUploadModal";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { StoryResultType } from "@/types/story";

import {
	layoutStyle,
	sliderBoxStyle,
	contentBoxStyle,
	commentLayoutStyle,
} from "@/components/Story/StoryDetailModal/StoryDetailModal.style";

const StoryDetailModal = ({
	boardId,
	content,
	hashtagList,
	mediaList,
	member,
	createdDate,
	recommendationInfo,
}: StoryResultType) => {
	const { commentData } = useCommentQuery(0, boardId);

	const { mutate: postCommentMutation } = usePostCommentMutation();
	const { mutate: editCommentMutation } = useEditCommentMutation();

	const [commentContent, setCommentContent] = useState("");
	const [mentionedMemberList] = useState<string[]>(["test"]);
	const [commentButtonText, setCommentButtonText] = useState("등록");
	const [commentId, setCommentId] = useState(0);

	const commentInputRef = useRef<HTMLInputElement>(null);

	const modal = useModal();

	const handleAddComment = () => {
		postCommentMutation(
			{ content: commentContent, mentionedMemberList, boardId },
			{
				onSuccess: () => {
					setCommentContent("");
				},
			},
		);
	};

	const handleEditComment = () => {
		editCommentMutation(
			{
				content: commentContent,
				mentionedMemberList,
				commentId,
			},
			{
				onSuccess: () => {
					setCommentContent("");
					setCommentId(0);
				},
			},
		);
	};

	const handleEditClick = useCallback((content: string, commentId: number) => {
		if (!commentInputRef.current) return;

		commentInputRef.current.focus();
		setCommentContent(content);
		setCommentId(commentId);
		setCommentButtonText("수정");
	}, []);

	const handleDeleteStory = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={boardId} target="story" />,
			isUpper: true,
			notCloseIcon: true,
		});
	};

	const handleEditStory = () => {
		modal.closeModal();

		modal.openModal({
			key: `StoryUploadModal`,
			component: () => (
				<StoryUploadModal
					mediaList={mediaList}
					content={content}
					hashtagList={hashtagList}
					storyId={boardId}
				/>
			),
		});
	};

	if (!commentData) {
		return <div>로딩중...</div>;
	}

	return (
		<Flex css={layoutStyle}>
			{/* 미디어 영역 */}
			<Flex css={sliderBoxStyle}>
				<Carousel
					width={740}
					height={726}
					borderRadius="36px 0 0 36px"
					showArrows={mediaList.length > 1}
					showDots={mediaList.length > 1}
					length={mediaList.length}
				>
					{mediaList.map((imgUrl, index) => (
						<Carousel.Item index={index} key={imgUrl}>
							<img src={imgUrl} alt="img" />
						</Carousel.Item>
					))}
				</Carousel>
			</Flex>

			{/* 본문 영역 */}
			<Flex styles={{ direction: "column" }}>
				<Flex css={contentBoxStyle}>
					{/* 프로필 영역 */}
					<StoryProfile
						img={member.profileImgUrl}
						nickname={member.nickname}
						editClick={handleEditStory}
						deleteClick={handleDeleteStory}
						ownerId={member.memberId}
					/>

					{/* 콘텐츠 본문 영역 */}
					<Box styles={{ maxWidth: "270px" }}>
						<Text css={getDefaultTextStyle(Theme.color.input_text, 500)}>{content}</Text>
					</Box>

					{/* 게시 날짜 영역 */}
					<Flex styles={{ justify: "flex-end", width: "100%" }}>
						<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
							{convertToUTC(new Date(createdDate)).date}
						</Text>
					</Flex>
				</Flex>

				{/* 구분선 */}
				<Divider length="309px" />

				{/* 코멘트 영역 */}
				<Box css={commentLayoutStyle}>
					{commentData.result.commentList.map((comment) => (
						<Comment
							key={comment.commentId}
							commentId={comment.commentId}
							content={comment.content}
							createdDate={comment.createdDate}
							member={comment.member}
							handleEditClick={handleEditClick}
						/>
					))}
				</Box>

				<Divider length="309px" />

				{/* 코멘트 작성 영역 */}
				<Flex styles={{ direction: "column", gap: "10px", padding: "15px 24px" }}>
					<Flex styles={{ align: "center", gap: "2px" }}>
						<HeartEmptyIcon />

						<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 600)}>
							{recommendationInfo.recommendCount}
						</Text>
					</Flex>

					<CommentInput
						width="260px"
						placeholder="댓글 작성"
						handleButtonClick={commentButtonText === "등록" ? handleAddComment : handleEditComment}
						content={commentContent}
						setContent={setCommentContent}
						commentInputRef={commentInputRef}
						commentButtonText={commentButtonText}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StoryDetailModal;
