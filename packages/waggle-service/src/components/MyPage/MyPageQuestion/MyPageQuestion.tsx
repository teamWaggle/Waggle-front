import { Divider, Flex, Heading } from "@/components/common";
import MyPageCommentCard from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
  layoutStyle,
  sliderBoxStyle,
  sliderLayoutStyle,
  sliderStyle,
} from "@/components/MyPage/MyPageSiren/MyPageSiren.style";

const MyPageQuestion = () => {
  const { questionListData } = useQuestionListQuery(0);

  return (
    <Flex tag="main" css={layoutStyle}>
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        Question
      </Heading>

      <div css={sliderLayoutStyle}>
        <div css={sliderBoxStyle(questionListData.result.questionList.length)}>
          <div css={sliderStyle}></div>
        </div>
      </div>

      <Divider />

      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        댓글
      </Heading>

      <Flex styles={{ direction: "column", gap: "10px", width: "100%" }}>
        <MyPageCommentCard />
        <MyPageCommentCard />
        <MyPageCommentCard />
      </Flex>
    </Flex>
  );
};

export default MyPageQuestion;
