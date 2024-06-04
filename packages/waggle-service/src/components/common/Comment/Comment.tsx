import { Fragment } from "react";

import { Flex, Box, Button, Text, getDefaultTextStyle, Theme } from "waggle-design-system";

import CommentCard from "@/components/common/Comment/CommentCard";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import useObserver from "@/hooks/common/useObserver";
import { useComment } from "@/hooks/comment/useComment";

import type { BoardType } from "@/types/comment";

import {
  commentBoxStyle,
  commentTopBoxStyle,
  textareaBoxStyle,
  commentTextareaStyle,
  buttonBoxStyle,
} from "@/components/common/Comment/Comment.style";

interface CommentProps {
  boardId: number;
  boardType: BoardType;
}

const Comment = ({ boardId, boardType }: CommentProps) => {
  const { commentData, hasNextPage, fetchNextPage, isFetching } = useCommentQuery(
    boardId,
    boardType
  );

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
    <Flex
      styles={{ direction: "column", gap: "60px", margin: "24px auto 60px" }}
      css={commentBoxStyle}
    >
      <Box css={commentTopBoxStyle}>
        <Text size="xLarge" css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>
          댓글 {commentData.pages[0].result.totalCount}개
        </Text>
        <Box css={textareaBoxStyle}>
          <textarea
            placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요."
            css={commentTextareaStyle}
            value={commentContent}
            onChange={(e) => handleCommentContent(e.target.value)}
            ref={commentTextAreaRef}
          />
          <Box
            css={buttonBoxStyle}
            onClick={() =>
              commentButtonText === "등록" ? handleAddComment() : handleEditComment()
            }
          >
            <Button>{commentButtonText}</Button>
          </Box>
        </Box>
      </Box>

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
    </Flex>
  );
};

export default Comment;
