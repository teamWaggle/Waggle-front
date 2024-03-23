import { Text, Box } from "@/components/common";

import { usePostReplyMutation } from "@/hooks/api/reply/usePostReplyMutation";

import {
	commentTextareaStyle,
	submitButtonStyle,
} from "@/components/Siren/Detail/Comment/Comment.style";

interface ReplyInputProps {
	commentId: number;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	mentionedMemberList: string[];
	replyButtonText: string;
	handleEditReply: () => void;
	replyRef: React.RefObject<HTMLTextAreaElement>;
}

const ReplyInput = ({
	commentId,
	content,
	setContent,
	mentionedMemberList,
	replyButtonText,
	handleEditReply,
	replyRef,
}: ReplyInputProps) => {
	const postReplyMutation = usePostReplyMutation();

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
				ref={replyRef}
			/>

			<button
				css={submitButtonStyle}
				onClick={() => (replyButtonText === "등록" ? handleAddReply() : handleEditReply())}
			>
				<Text>{replyButtonText}</Text>
			</button>
		</Box>
	);
};

export default ReplyInput;
