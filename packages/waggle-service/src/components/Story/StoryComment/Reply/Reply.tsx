import { Flex, Box, Text, Divider } from "waggle-design-system";

import StoryCommentInput from "@/components/Story/StoryComment/StoryCommentInput";
import ReplyItem from "@/components/Story/StoryComment/Reply/ReplyItem";

import { useReplyQuery } from "@/hooks/api/reply/useReplyQuery";
import { useComment } from "@/hooks/comment/useComment";

import { handleCommentTextStyle } from "@/components/Story/StoryComment/Comment.style";

interface ReplyProps {
  commentId: number;
  handleReplyOpen: (open: boolean) => void;
}

const Reply = ({ commentId, handleReplyOpen }: ReplyProps) => {
  const { replyData } = useReplyQuery(0, commentId);

  const {
    commentContent,
    commentButtonText,
    commentInputRef,
    handleCommentContent,
    handleAddReply,
    handleEditReply,
    handleEditClick,
  } = useComment({ targetCommentId: commentId });

  return (
    <>
      {replyData.result.replyList.length !== 0 ? (
        <Flex styles={{ direction: "column", gap: "6px", paddingLeft: "43px" }}>
          <Flex styles={{ align: "center", gap: "6px" }}>
            <Divider length="12px" />
            <Text size="xSmall" css={handleCommentTextStyle} onClick={() => handleReplyOpen(false)}>
              답글 접기
            </Text>
          </Flex>

          {replyData.result.replyList.map((reply) => (
            <ReplyItem
              key={reply.replyId}
              replyData={reply}
              handleReplyEditClick={handleEditClick}
            />
          ))}

          <StoryCommentInput
            width="215px"
            placeholder="답글 작성"
            handleButtonClick={commentButtonText === "등록" ? handleAddReply : handleEditReply}
            content={commentContent}
            handleCommentContent={handleCommentContent}
            commentInputRef={commentInputRef}
            commentButtonText={commentButtonText}
          />
        </Flex>
      ) : (
        <Box styles={{ paddingLeft: "43px" }}>
          <StoryCommentInput
            width="215px"
            placeholder="답글 작성"
            handleButtonClick={handleAddReply}
            content={commentContent}
            handleCommentContent={handleCommentContent}
            commentInputRef={commentInputRef}
            commentButtonText={commentButtonText}
          />
        </Box>
      )}
    </>
  );
};

export default Reply;
