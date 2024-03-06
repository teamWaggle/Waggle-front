import { Box } from "@/components/common";

import {
	commentInputStyle,
	replyButtonStyle,
} from "@/components/Story/StoryDetail/Comment/Comment.style";

interface CommentInputProps {
	width: string;
	placeholder: string;
	handleAddButton: () => void;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const CommentInput = ({
	width,
	placeholder,
	handleAddButton,
	content,
	setContent,
}: CommentInputProps) => {
	return (
		<Box styles={{ position: "relative" }}>
			<input
				type="text"
				css={commentInputStyle(width)}
				placeholder={placeholder}
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<button type="submit" css={replyButtonStyle} onClick={handleAddButton}>
				등록
			</button>
		</Box>
	);
};

export default CommentInput;
