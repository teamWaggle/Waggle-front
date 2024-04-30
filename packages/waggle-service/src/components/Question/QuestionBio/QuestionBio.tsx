import { useNavigate } from "react-router-dom";

import { Flex, Box, Heading, Button } from "waggle-design-system";

import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";

import { PATH } from "@/constants/path";

import { useQuestionRepresentativeQuery } from "@/hooks/api/question/useQuestionRepresentativeQuery";

import {
  sectionStyle,
  boxStyle,
  titleBoxStyle,
} from "@/components/Question/QuestionBio/QuestionBio.style";

const QuestionBio = () => {
  const { questionRepresentativeListData } = useQuestionRepresentativeQuery();

  const navigate = useNavigate();

  return (
    <Box tag="section" css={sectionStyle}>
      <Flex styles={{ margin: "0 auto", justify: "space-between" }} css={boxStyle}>
        <Flex styles={{ direction: "column", gap: "52px", marginTop: "54px" }}>
          <Flex styles={{ direction: "column", gap: "10px" }} css={titleBoxStyle}>
            <Heading size="small">물어보고 싶은</Heading>
            <Heading size="small">강아지 관련 궁금증이</Heading>
            <Heading size="small">있나요? Q&A에서</Heading>
            <Heading size="small">답을 찾아보세요!</Heading>
          </Flex>

          <Button variant="white" onClick={() => navigate(PATH.QUESTION_CREATE)}>
            글 작성하기
          </Button>
        </Flex>

        <Flex styles={{ direction: "column", gap: "24px" }}>
          {questionRepresentativeListData.result.questionList.map((questionInfo) => (
            <QuestionCard key={questionInfo.boardId} questionListData={questionInfo} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuestionBio;
