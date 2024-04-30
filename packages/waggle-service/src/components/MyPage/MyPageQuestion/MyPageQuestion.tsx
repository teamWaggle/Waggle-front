import { Fragment } from "react";

import { Flex, Heading, getDefaultTextStyle, Theme } from "waggle-design-system";

import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";

import { useMemberQuestionQuery } from "@/hooks/api/member/useMemberQuestionQuery";
import useObserver from "@/hooks/common/useObserver";

import type { ParamUrlType } from "@/types/common";

const MyPageQuestion = ({ paramUrl }: ParamUrlType) => {
  const { memberQuestionData, hasNextPage, fetchNextPage, isFetching } =
    useMemberQuestionQuery(paramUrl);

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
        marginTop: "80px",
        paddingLeft: "30px",
        width: "calc(100% - 311px)",
      }}
    >
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        작성한 글
      </Heading>

      <Flex styles={{ direction: "column", gap: "10px" }}>
        {memberQuestionData.pages.map((questionData) => (
          <Fragment key={questionData.result.nextPageParam}>
            {questionData.result.questionList.map((questionInfo) => (
              <QuestionCard key={questionInfo.boardId} questionListData={questionInfo} />
            ))}
          </Fragment>
        ))}
      </Flex>

      <div ref={ref} />
    </Flex>
  );
};

export default MyPageQuestion;
