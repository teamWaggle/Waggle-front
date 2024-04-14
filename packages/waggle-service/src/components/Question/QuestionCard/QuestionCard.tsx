import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { PATH } from "@/constants/path";

import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { QuestionListDataType } from "@/types/question";

import {
  cardStyle,
  resolveStyle,
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
    <Flex css={cardStyle} onClick={() => navigate(PATH.QUESTION_DETAIL(String(boardId)))}>
      <Flex styles={{ gap: "16px", align: "center" }}>
        <Flex css={resolveStyle(status === "RESOLVED")}>
          {status === "RESOLVED" ? "해결" : "미해결"}
        </Flex>
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

      <Flex css={iconStyle(isRecommend)}>
        {isRecommend ? <LikeIcon /> : <DisLikeIcon />}

        <Text>{recommendCount}</Text>
      </Flex>
    </Flex>
  );
};

export default QuestionCard;
