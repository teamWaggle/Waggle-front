import { Fragment, useEffect } from "react";

import { Flex, Box } from "waggle-design-system";

import SearchInput from "@/components/common/SearchInput/SearchInput";
import SortButton from "@/components/common/SortButton/SortButton";
import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";
import QuestionSidebar from "@/components/Question/QuestionSidebar/QuestionSidebar";

import { QUESTION_FILTER } from "@/constants/filter";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";
import useObserver from "@/hooks/common/useObserver";
import { useFilter } from "@/hooks/post/useFilter";
import { useSearch } from "@/hooks/post/useSearch";

import { mainStyle } from "@/components/Question/QuestionMain/QuestionMain.style";

const QuestionMain = () => {
  const { filterOption, filterText, handleFilterOption, handleFilterText } = useFilter();

  const { keyword, handleChangeInput } = useSearch();

  const { questionListData, hasNextPage, fetchNextPage, isFetching, refetch } =
    useQuestionListQuery(keyword, filterOption);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    refetch();
  }, [filterOption]);

  return (
    <Box css={mainStyle}>
      <Flex styles={{ gap: "65px" }}>
        <section>
          <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
            <SortButton
              defaultText={filterText}
              handleFilterOption={handleFilterOption}
              handleFilterText={handleFilterText}
              filterData={QUESTION_FILTER}
            />
            <SearchInput
              keyword={keyword}
              handleChangeInput={handleChangeInput}
              handleSearchClick={() => refetch()}
              width="644px"
            />
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
