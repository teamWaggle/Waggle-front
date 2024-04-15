import { Fragment } from "react";

import { Flex, Box } from "@/components/common";
import CommentCard from "@/components/common/Comment/CommentCard";
import Button from "@/components/common/Design/Button/Button";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";

import useObserver from "@/hooks/common/useObserver";
import { useComment } from "@/hooks/comment/useComment";

import {
  commentBoxStyle,
  commentTextareaStyle,
  buttonBoxStyle,
} from "@/components/common/Comment/Comment.style";

const Comment = ({ boardId }: { boardId: number }) => {
  const { commentData, hasNextPage, fetchNextPage, isFetching } = useCommentQuery(boardId);

  const {
    commentContent,
    commentButtonText,
    commentTextAreaRef,
    handleAddComment,
    handleEditComment,
    handleEditClick,
    handleCommentContent,
  } = useComment({
    boardId,
    isTextArea: true,
  });

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Flex css={commentBoxStyle}>
      <Flex styles={{ direction: "column", gap: "36px", width: "100%" }}>
        {commentData.pages.map((commentData, index) => (
          <Fragment key={index}>
            {commentData.result.commentList.map((commentInfo) => (
              <CommentCard
                key={commentInfo.commentId}
                commentData={commentInfo}
                handleEditClick={handleEditClick}
              />
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </Flex>

      <Box styles={{ position: "relative", marginBottom: "60px" }}>
        <textarea
          placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요."
          css={commentTextareaStyle(1144, 194)}
          value={commentContent}
          onChange={(e) => handleCommentContent(e.target.value)}
          ref={commentTextAreaRef}
        />
        <Box
          css={buttonBoxStyle}
          onClick={() => (commentButtonText === "등록" ? handleAddComment() : handleEditComment())}
        >
          <Button>{commentButtonText}</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Comment;
