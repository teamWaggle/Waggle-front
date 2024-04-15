import { Box } from "@/components/common";

import { commentInputStyle, replyButtonStyle } from "@/components/Story/StoryComment/Comment.style";

interface CommentInputProps {
  width: string;
  placeholder: string;
  handleButtonClick: () => void;
  content: string;
  handleCommentContent: (content: string) => void;
  commentInputRef: React.RefObject<HTMLInputElement>;
  commentButtonText: string;
}

const StoryCommentInput = ({
  width,
  placeholder,
  handleButtonClick,
  content,
  handleCommentContent,
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
        onChange={(e) => handleCommentContent(e.target.value)}
        ref={commentInputRef}
      />

      <button type="submit" css={replyButtonStyle} onClick={handleButtonClick}>
        {commentButtonText}
      </button>
    </Box>
  );
};

export default StoryCommentInput;
