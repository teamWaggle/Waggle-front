import { Fragment } from "react";

import { css } from "@emotion/react";

import { useRecoilValue } from "recoil";

import { Flex, Divider, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import StoryCommentCard from "@/components/Story/StoryComment/StoryCommentCard";
import CommentInput from "@/components/Story/StoryComment/StoryCommentInput";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";
import { usePostRecommend } from "@/hooks/api/recommend/usePostRecommend";
import useObserver from "@/hooks/common/useObserver";
import { useComment } from "@/hooks/comment/useComment";

import { isLoggedInState } from "@/recoil/atoms/auth";

interface StoryCommentParams {
  boardId: number;
  recommendCount: number;
}

const StoryComment = ({ boardId, recommendCount }: StoryCommentParams) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { mutate: postRecommend } = usePostRecommend();

  const { commentData, hasNextPage, fetchNextPage, isFetching } = useCommentQuery(boardId);

  const {
    commentContent,
    commentButtonText,
    commentInputRef,
    handleAddComment,
    handleEditComment,
    handleEditClick,
    handleCommentContent,
  } = useComment({
    boardId,
  });

  const isRecommend = isLoggedIn ? useGetIsRecommend(boardId) : false;

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      <Divider length="309px" />

      <Flex styles={{ direction: "column", gap: "20px" }} css={commentLayoutStyle}>
        {commentData.pages.map((commentData, index) => (
          <Fragment key={index}>
            {commentData.result.commentList.map((commentInfo) => (
              <StoryCommentCard
                key={commentInfo.commentId}
                commentData={commentInfo}
                handleEditClick={handleEditClick}
              />
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </Flex>

      <Divider length="309px" />

      <Flex styles={{ direction: "column", gap: "10px", padding: "15px 24px" }}>
        <Flex styles={{ align: "center", gap: "6px" }}>
          {isRecommend ? (
            <LikeIcon width={18} height={18} onClick={() => isLoggedIn && postRecommend(boardId)} />
          ) : (
            <DisLikeIcon
              width={18}
              height={18}
              onClick={() => isLoggedIn && postRecommend(boardId)}
            />
          )}

          <Text
            size="small"
            css={getDefaultTextStyle(
              isRecommend ? Theme.color.brand_primary : Theme.color.border,
              600
            )}
          >
            {recommendCount}
          </Text>
        </Flex>

        <CommentInput
          width="260px"
          placeholder="댓글 작성"
          handleButtonClick={commentButtonText === "등록" ? handleAddComment : handleEditComment}
          content={commentContent}
          handleCommentContent={handleCommentContent}
          commentInputRef={commentInputRef}
          commentButtonText={commentButtonText}
        />
      </Flex>
    </>
  );
};

export default StoryComment;

export const commentLayoutStyle = css({
  width: "100%",
  overflow: "auto",
  height: "450px",
  padding: "20px 0",
});
