import { Box, Button } from "waggle-design-system";

import { commentTextareaStyle, buttonBoxStyle } from "@/components/common/Comment/Comment.style";
import { replyInputBoxStyle } from "@/components/common/Comment/Reply/Reply.style";

interface ReplyInputProps {
  content: string;
  handleCommentContent: (content: string) => void;
  replyButtonText: string;
  handleAddReply: () => void;
  handleEditReply: () => void;
  replyRef: React.RefObject<HTMLTextAreaElement>;
}

const ReplyInput = ({
  content,
  handleCommentContent,
  replyButtonText,
  handleAddReply,
  handleEditReply,
  replyRef,
}: ReplyInputProps) => {
  return (
    <Box css={replyInputBoxStyle}>
      <textarea
        placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요."
        css={commentTextareaStyle("100%", 113)}
        value={content}
        onChange={(e) => handleCommentContent(e.target.value)}
        ref={replyRef}
      />

      <Box
        css={buttonBoxStyle}
        onClick={() => (replyButtonText === "등록" ? handleAddReply() : handleEditReply())}
      >
        <Button>{replyButtonText}</Button>
      </Box>
    </Box>
  );
};

export default ReplyInput;
