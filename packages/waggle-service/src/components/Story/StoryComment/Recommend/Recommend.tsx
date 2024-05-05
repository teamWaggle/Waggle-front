import { useState } from "react";

import { useRecoilValue } from "recoil";

import { Flex, Text } from "waggle-design-system";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import RecommendList from "@/components/Story/StoryComment/Recommend/RecommendList";

import { usePostRecommend } from "@/hooks/api/recommend/usePostRecommend";
import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { recommendCountTextStyle } from "@/components/Story/StoryComment/Recommend/Recommend.style";

interface RecommendProps {
  boardId: number;
  recommendCount: number;
}

const Recommend = ({ boardId, recommendCount }: RecommendProps) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { mutate: postRecommend } = usePostRecommend();

  const isRecommend = isLoggedIn ? useGetIsRecommend(boardId) : false;

  const [isRecommendListOpen, setIsRecommendListOpen] = useState(false);

  return (
    <Flex styles={{ align: "center", gap: "6px", position: "relative" }}>
      {isRecommend ? (
        <LikeIcon width={18} height={18} onClick={() => isLoggedIn && postRecommend(boardId)} />
      ) : (
        <DisLikeIcon width={18} height={18} onClick={() => isLoggedIn && postRecommend(boardId)} />
      )}

      <Text
        size="small"
        css={recommendCountTextStyle(isRecommend)}
        onClick={() => setIsRecommendListOpen((prev) => !prev)}
      >
        {recommendCount}
      </Text>

      {isRecommendListOpen && <RecommendList closeList={() => setIsRecommendListOpen(false)} />}
    </Flex>
  );
};

export default Recommend;
