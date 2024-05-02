import { Fragment, useState } from "react";

import { Flex, Box } from "waggle-design-system";

import { SearchInput } from "waggle-design-system";
import SortButton from "@/components/common/SortButton/SortButton";
import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";
import QuestionSidebar from "@/components/Question/QuestionSidebar/QuestionSidebar";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";
import useObserver from "@/hooks/common/useObserver";

import { mainStyle } from "@/components/Question/QuestionMain/QuestionMain.style";

const data = [
  {
    text: "최신순",
    option: "latest",
  },
  {
    text: "인기순",
    option: "recommend",
  },
  {
    text: "해결",
    option: "resolved",
  },
  {
    text: "미해결",
    option: "unresolved",
  },
];

const QuestionMain = () => {
  const [filterOption, setFilterOption] = useState("latest");
  const [filterText, setFilterText] = useState("최신순");

  const { questionListData, hasNextPage, fetchNextPage, isFetching } = useQuestionListQuery();

  console.log(filterOption);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const handleFilterOption = (option: string) => {
    setFilterOption(option);
  };

  const handleFilterText = (text: string) => {
    setFilterText(text);
  };

  return (
    <Box css={mainStyle}>
      <Flex styles={{ gap: "65px" }}>
        <section>
          <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
            <SortButton
              defaultText={filterText}
              handleFilterOption={handleFilterOption}
              handleFilterText={handleFilterText}
              buttonData={data}
            />
            <SearchInput onChange={() => {}} width="644px" />
          </Flex>

          <Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
            {questionListData.pages.map((questionData) => (
              <Fragment key={questionData.result.nextPageParam}>
                {questionData.result.questionList.map((questionInfo) => (
                  <QuestionCard key={questionInfo.boardId} questionListData={questionInfo} />
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
