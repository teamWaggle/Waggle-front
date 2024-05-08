import { Suspense } from "react";

import { useRecoilValue } from "recoil";

import { Flex, Box, Text } from "waggle-design-system";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import MemberList from "@/components/common/MemberList/MemberList";

import { usePostRecommend } from "@/hooks/api/recommend/usePostRecommend";
import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";
import { useRecommendListQuery } from "@/hooks/api/recommend/useRecommendListQuery";
import { useMemberListTrigger } from "@/hooks/common/useMemberListTrigger";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { recommendCountTextStyle } from "@/components/Story/StoryComment/Recommend/Recommend.style";

interface RecommendProps {
  boardId: number;
  recommendCount: number;
}

const Recommend = ({ boardId, recommendCount }: RecommendProps) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { recommendListData } = useRecommendListQuery(boardId);

  const { mutate: postRecommend } = usePostRecommend();

  const isRecommend = isLoggedIn ? useGetIsRecommend(boardId) : false;

  const { isMemberListOpen, handleMemberList, handleMemberListClose, memberListRef } =
    useMemberListTrigger();

  return (
    <Flex styles={{ align: "center", gap: "6px", position: "relative" }}>
      {isRecommend ? (
        <LikeIcon width={18} height={18} onClick={() => isLoggedIn && postRecommend(boardId)} />
      ) : (
        <DisLikeIcon width={18} height={18} onClick={() => isLoggedIn && postRecommend(boardId)} />
      )}
      <Box ref={memberListRef}>
        <Text size="small" css={recommendCountTextStyle(isRecommend)} onClick={handleMemberList}>
          {recommendCount}
        </Text>

        {isMemberListOpen && recommendListData.result.memberList.length !== 0 && (
          <Suspense fallback={<div />}>
            <MemberList
              title="좋아요"
              listData={recommendListData.result.memberList}
              handleClose={handleMemberListClose}
            />
          </Suspense>
        )}
      </Box>
    </Flex>
  );
};

export default Recommend;
