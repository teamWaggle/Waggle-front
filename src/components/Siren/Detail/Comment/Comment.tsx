import { useState } from "react";

import { Flex, Box, Text } from "@/components/common";
import CommentCard from "@/components/Siren/Detail/Comment/CommentCard";

import { useCommentQuery } from "@/hooks/api/useCommentQuery";
import { usePostCommentMutation } from "@/hooks/api/usePostCommentMutation";

import {
	commentBoxStyle,
	commentTextareaStyle,
	submitButtonStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

const Comment = ({ boardId }: { boardId: number }) => {
	const postCommentMutation = usePostCommentMutation();
	const { commentData } = useCommentQuery(0, boardId);

	console.log(commentData);

	const [content, setContent] = useState("");
	const [mentionedMemberList] = useState<string[]>(["test"]);

	const handleAddComment = () => {
		postCommentMutation.mutate(
			{ content, mentionedMemberList, boardId },
			{
				onSuccess: () => {
					setContent("");
				},
			},
		);
	};

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
				/>

				<button css={submitButtonStyle} onClick={handleAddComment}>
					<Text>등록</Text>
				</button>
			</Box>
		</Flex>
	);
};

export default Comment;
