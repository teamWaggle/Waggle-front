import { Fragment } from "react";

import { css } from "@emotion/react";

import { Flex, Heading, Theme, getDefaultTextStyle } from "waggle-design-system";

import MyPageCommentCard from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard";

import { useMemberSirenCommentQuery } from "@/hooks/api/member/useMemberSirenCommentQuery";
import { useMemberQuestionCommentQuery } from "@/hooks/api/member/useMemberQuestionCommentQuery";
import useObserver from "@/hooks/common/useObserver";

interface MyPageCommentProps {
  paramUrl?: string;
  isQuestion?: boolean;
}

const MyPageComment = ({ paramUrl, isQuestion }: MyPageCommentProps) => {
  const { memberCommentData, hasNextPage, fetchNextPage, isFetching } = isQuestion
    ? useMemberQuestionCommentQuery(paramUrl)
    : useMemberSirenCommentQuery(paramUrl);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Flex
      tag="main"
      styles={{
        direction: "column",
        gap: "30px",
      }}
      css={layoutStyle}
    >
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        댓글
      </Heading>

      <Flex styles={{ direction: "column", gap: "10px", width: "100%" }}>
        {memberCommentData.pages.map((commentData) => (
          <Fragment key={commentData.result.nextPageParam}>
            {commentData.result.commentList.map((commentInfo) => (
              <MyPageCommentCard key={commentInfo.commentId} commentData={commentInfo} />
            ))}
          </Fragment>
        ))}
      </Flex>
      <div ref={ref} />
    </Flex>
  );
};

export default MyPageComment;

const layoutStyle = css({
  padding: "80px 0 0 30px",
  width: "calc(100% - 311px)",
  borderLeft: `1px solid ${Theme.color.border}`,
  height: "100%",
  minHeight: "100vh",
});
