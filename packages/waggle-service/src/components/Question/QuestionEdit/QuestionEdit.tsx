import { Box, Heading, Button, getDefaultTextStyle, Theme } from "waggle-design-system";

import PostEdit from "@/components/common/Post/PostEdit";
import QuestionKeyword from "@/components/Question/QuestionKeyword/QuestionKeyword";

import { useAddQuestionForm } from "@/hooks/post/useAddQuestionForm";

import type { QuestionDataType } from "@/types/question";

import {
  layoutStyle,
  inputStyle,
  buttonBoxStyle,
} from "@/pages/SirenUploadPage/SirenUploadPage.style";

const QuestionEdit = ({ questionData }: QuestionDataType) => {
  const { boardId, title, content, mediaList, hashtagList } = questionData;

  const { questionRequest, updateInputValue, handleSubmit } = useAddQuestionForm({
    questionId: boardId,
    initialData: {
      title,
      content,
      mediaList,
      hashtagList,
    },
  });

  return (
    <Box tag="section" css={layoutStyle}>
      <Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        Q&A - 질문 수정하기
      </Heading>

      <QuestionKeyword initialValue={hashtagList} updateInputValue={updateInputValue} />

      <input
        type="text"
        placeholder="제목을 입력해주세요."
        css={inputStyle}
        value={questionRequest.title}
        onChange={(e) => updateInputValue("title", e.target.value)}
      />

      <PostEdit
        value={questionRequest.content}
        questionUpdateInputValue={updateInputValue}
        updateMediaList={questionRequest.mediaList}
      />

      <Box css={buttonBoxStyle}>
        <Button onClick={handleSubmit}>글 수정하기</Button>
      </Box>
    </Box>
  );
};

export default QuestionEdit;
