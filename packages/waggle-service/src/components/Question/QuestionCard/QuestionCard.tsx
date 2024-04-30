import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";

import { Flex, Box, Heading, Text, getDefaultTextStyle, Theme, Tag } from "waggle-design-system";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import { PATH } from "@/constants/path";

import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { convertToUTC } from "@/utils/convertToUTC";

import type { QuestionListDataType } from "@/types/question";

import {
  cardStyle,
  kewordBoxStyle,
  contentBoxStyle,
  iconStyle,
} from "@/components/Question/QuestionCard/QuestionCard.style";

const QuestionCard = ({ questionListData }: QuestionListDataType) => {
  const { boardId, title, content, createdDate, hashtagList, status, recommendCount } =
    questionListData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const isRecommend = isLoggedIn ? useGetIsRecommend(boardId) : false;

  const navigate = useNavigate();

  return (
    <Flex
      styles={{ direction: "column", gap: "10px", position: "relative" }}
      css={cardStyle}
      onClick={() => navigate(PATH.QUESTION_DETAIL(String(boardId)))}
    >
      <Flex styles={{ gap: "16px", align: "center" }}>
        <Tag tagText={status} isResolveTag />

        <Heading size="small" css={getDefaultTextStyle(Theme.color.black, 700)}>
          {title}
        </Heading>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
          {convertToUTC(new Date(createdDate)).date}
        </Text>
      </Flex>

      <Flex css={kewordBoxStyle}>
        {hashtagList && hashtagList.map((tag) => <Text key={tag}>#{tag}</Text>)}
      </Flex>

      <Box css={contentBoxStyle}>
        <Text>{content}</Text>
      </Box>

      <Box css={iconStyle(isRecommend)}>
        {isRecommend ? <LikeIcon /> : <DisLikeIcon />}
        <Text>{recommendCount}</Text>
      </Box>
    </Flex>
  );
};

export default QuestionCard;
