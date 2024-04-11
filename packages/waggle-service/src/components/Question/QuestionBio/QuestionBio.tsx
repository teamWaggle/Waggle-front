import { useNavigate } from "react-router-dom";

import { Flex, Box, Heading } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
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
      <Flex css={boxStyle}>
        <Flex styles={{ direction: "column", gap: "52px", marginTop: "54px" }}>
          <Flex css={titleBoxStyle}>
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
      </Flex>
    </Box>
  );
};

export default QuestionBio;
