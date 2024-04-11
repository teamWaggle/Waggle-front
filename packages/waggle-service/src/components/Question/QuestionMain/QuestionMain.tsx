import { Flex, Box, SearchInput } from "@/components/common";
import SortButton from "@/components/common/SortButton/SortButton";
import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";
import QuestionSidebar from "@/components/Question/QuestionSidebar/QuestionSidebar";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";

import { mainStyle } from "@/components/Question/QuestionMain/QuestionMain.style";

const QuestionMain = () => {
  const { questionListData } = useQuestionListQuery(0);

  return (
    <Box css={mainStyle}>
      <Flex styles={{ gap: "65px" }}>
        <section>
          <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
            <SortButton defaultText="해결" />
            <SearchInput onChange={() => {}} width="644px" />
          </Flex>

          <Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
            {questionListData.result.questionList.map((questionInfo) => (
              <QuestionCard
                key={questionInfo.boardId}
                boardId={questionInfo.boardId}
                title={questionInfo.title}
                createdDate={questionInfo.createdDate}
                hashtagList={questionInfo.hashtagList}
                status={questionInfo.status}
                recommendCount={questionInfo.recommendCount}
              />
            ))}
          </Flex>
        </section>

        <QuestionSidebar />
      </Flex>
    </Box>
  );
};

export default QuestionMain;
