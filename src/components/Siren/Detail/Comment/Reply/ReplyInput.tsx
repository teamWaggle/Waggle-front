import { useState } from "react";

import { Text, Box } from "@/components/common";

import { usePostReplyMutation } from "@/hooks/api/usePostReplyMutation";

import {
	commentTextareaStyle,
	submitButtonStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

const ReplyInput = ({ commentId }: { commentId: number }) => {
	const postReplyMutation = usePostReplyMutation();

	const [content, setContent] = useState("");
	const [mentionedMemberList] = useState<string[]>(["test"]);

	const handleAddReply = () => {
		postReplyMutation.mutate(
			{
				content,
				mentionedMemberList,
				commentId,
			},
			{
				onSuccess: () => {
					setContent("");
				},
			},
		);
	};

	return (
		<Box styles={{ position: "relative" }}>
			<textarea
				placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요."
				css={commentTextareaStyle(1078, 130)}
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>

			<button css={submitButtonStyle} onClick={handleAddReply}>
				<Text>등록</Text>
			</button>
		</Box>
	);
};

export default ReplyInput;
