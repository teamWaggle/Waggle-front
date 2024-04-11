import { Box, Heading } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PostEdit from "@/components/common/Post/PostEdit";

import { useAddQuestionForm } from "@/hooks/question/useAddQuestionForm";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionDataType } from "@/types/question";

import {
  layoutStyle,
  inputStyle,
  buttonBoxStyle,
} from "@/components/Siren/SirenUpload/SirenUpload.style";

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
