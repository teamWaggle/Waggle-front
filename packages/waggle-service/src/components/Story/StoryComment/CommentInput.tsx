import { Box } from "@/components/common";

import { commentInputStyle, replyButtonStyle } from "@/components/Story/StoryComment/Comment.style";

interface CommentInputProps {
  width: string;
  placeholder: string;
  handleButtonClick: () => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  commentInputRef: React.RefObject<HTMLInputElement>;
  commentButtonText: string;
}

const CommentInput = ({
  width,
  placeholder,
  handleButtonClick,
  content,
  setContent,
  commentInputRef,
  commentButtonText,
}: CommentInputProps) => {
  return (
    <Box styles={{ position: "relative" }}>
      <input
        type="text"
        css={commentInputStyle(width)}
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={commentInputRef}
      />

      <button type="submit" css={replyButtonStyle} onClick={handleButtonClick}>
        {commentButtonText}
      </button>
    </Box>
  );
};

export default CommentInput;
