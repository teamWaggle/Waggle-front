import { useState, useRef, useCallback } from "react";

import { Flex, Box, Text } from "@/components/common";
import CommentCard from "@/components/Siren/Detail/Comment/CommentCard";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";

import {
	commentBoxStyle,
	commentTextareaStyle,
	submitButtonStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

const Comment = ({ boardId }: { boardId: number }) => {
	const { commentData } = useCommentQuery(0, boardId);

	const { mutate: postCommentMutation } = usePostCommentMutation();
	const { mutate: editCommentMutation } = useEditCommentMutation();

	const [content, setContent] = useState("");
	const [mentionedMemberList] = useState<string[]>(["test"]);
	const [commentButtonText, setCommentButtonText] = useState("등록");
	const [commentId, setCommentId] = useState(0);

	const commentRef = useRef<HTMLTextAreaElement>(null);

	const handleAddComment = useCallback(() => {
		postCommentMutation(
			{ content, mentionedMemberList, boardId },
			{
				onSuccess: () => {
					setContent("");
				},
			},
		);
	}, []);

	const handleEditComment = useCallback(() => {
		editCommentMutation(
			{
				content,
				mentionedMemberList,
				commentId,
			},
			{
				onSuccess: () => {
					setContent("");
					setCommentId(0);
				},
			},
		);
	}, []);

	const handleEditClick = useCallback((content: string, commentId: number) => {
		if (!commentRef.current) return;

		commentRef.current.focus();
		setContent(content);
		setCommentId(commentId);
		setCommentButtonText("수정");
	}, []);

	return (
		<Flex css={commentBoxStyle}>
			{commentData && (
				<Flex styles={{ direction: "column", gap: "36px", width: "100%" }}>
					{commentData.result.commentList.map((data) => (
						<CommentCard
							key={data.commentId}
							commentId={data.commentId}
							content={data.content}
							createdDate={data.createdDate}
							member={data.member}
							handleEditClick={handleEditClick}
						/>
					))}
				</Flex>
			)}

			<Box styles={{ position: "relative", marginBottom: "60px" }}>
				<textarea
					placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요."
					css={commentTextareaStyle(1144, 194)}
					value={content}
					onChange={(e) => setContent(e.target.value)}
					ref={commentRef}
				/>

				<button
					css={submitButtonStyle}
					onClick={() => (commentButtonText === "등록" ? handleAddComment() : handleEditComment())}
				>
					<Text>{commentButtonText}</Text>
				</button>
			</Box>
		</Flex>
	);
};

export default Comment;
