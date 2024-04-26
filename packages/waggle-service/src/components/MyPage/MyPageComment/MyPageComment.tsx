import { Flex, Heading, Theme, getDefaultTextStyle } from "waggle-design-system";

import MyPageCommentCard from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard";

import { useMemberSirenCommentQuery } from "@/hooks/api/member/useMemberSirenCommentQuery";
import { useMemberQuestionCommentQuery } from "@/hooks/api/member/useMemberQuestionCommentQuery";

interface MyPageCommentProps {
  paramUrl?: string;
  isQuestion?: boolean;
}

const MyPageComment = ({ paramUrl, isQuestion }: MyPageCommentProps) => {
  const { memberSirenCommentData } = useMemberSirenCommentQuery(0, paramUrl);
  const { memberQuestionCommentData } = useMemberQuestionCommentQuery(0, paramUrl);

  const commentsData = isQuestion ? memberQuestionCommentData : memberSirenCommentData;

  return (
    <Flex
      tag="main"
      styles={{
        direction: "column",
        gap: "30px",
        marginTop: "80px",
        paddingLeft: "30px",
        width: "calc(100% - 311px)",
      }}
    >
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        댓글
      </Heading>

      <Flex styles={{ direction: "column", gap: "10px", width: "100%" }}>
        {commentsData.result.commentList.map((commentInfo) => (
          <MyPageCommentCard key={commentInfo.commentId} commentData={commentInfo} />
        ))}
      </Flex>
    </Flex>
  );
};

export default MyPageComment;
