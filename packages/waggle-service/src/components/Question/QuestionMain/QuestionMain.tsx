import { Flex, Box, SearchInput } from "@/components/common";
import SortButton from "@/components/common/SortButton/SortButton";
import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";
import QuestionSidebar from "@/components/Question/QuestionSidebar/QuestionSidebar";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";
import useObserver from "@/hooks/useObserver";

import { mainStyle } from "@/components/Question/QuestionMain/QuestionMain.style";
import { Fragment } from "react";

const QuestionMain = () => {
  const { questionListData, hasNextPage, fetchNextPage, isFetching } = useQuestionListQuery();

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  console.log(questionListData);

  return (
    <Box css={mainStyle}>
      <Flex styles={{ gap: "65px" }}>
        <section>
          <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
            <SortButton defaultText="해결" />
            <SearchInput onChange={() => {}} width="644px" />
          </Flex>

          <Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
            {questionListData.pages.map((questionData, index) => (
              <Fragment key={index}>
                {questionData.result.questionList.map((questionInfo) => (
                  <QuestionCard key={questionInfo.boardId} questionData={questionInfo} />
                ))}
              </Fragment>
            ))}
          </Flex>
          <div ref={ref} />
        </section>

        <QuestionSidebar />
      </Flex>
    </Box>
  );
};

export default QuestionMain;
