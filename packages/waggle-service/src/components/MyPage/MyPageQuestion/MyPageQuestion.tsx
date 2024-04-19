import { Flex, Heading } from "waggle-design-system";

import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";

import { useMemberQuestionQuery } from "@/hooks/api/member/useMemberQuestionQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { ParamUrlType } from "@/types/common";

const MyPageQuestion = ({ paramUrl }: ParamUrlType) => {
  const { memberQuestionData } = useMemberQuestionQuery(0, paramUrl);

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
        작성한 글
      </Heading>

      <Flex styles={{ direction: "column", gap: "10px" }}>
        {memberQuestionData.result.questionList.map((questionInfo) => (
          <QuestionCard key={questionInfo.boardId} questionListData={questionInfo} />
        ))}
      </Flex>
    </Flex>
  );
};

export default MyPageQuestion;
