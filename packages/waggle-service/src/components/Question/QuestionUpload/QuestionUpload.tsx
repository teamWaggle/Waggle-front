import { useCallback } from "react";

import { Box, Heading } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PostUpload from "@/components/common/Post/PostUpload/PostUpload";

import { useAddQuestionForm } from "@/hooks/question/useAddQuestionForm";
import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
  layoutStyle,
  inputStyle,
  buttonBoxStyle,
} from "@/components/Siren/SirenUpload/SirenUpload.style";

const QuestionUpload = () => {
  const { questionRequest, updateInputValue, handleSubmit } = useAddQuestionForm({});

  const handleMediaListChange = useCallback(
    (mediaList: string[]) => {
      updateInputValue("mediaList", mediaList);
    },
    [updateInputValue]
  );

  const { isLoading, handleImgUpload, dropImgUpload, uploadMediaList } = useMultipleImgUpload({
    updateFormImage: handleMediaListChange,
  });

  return (
    <Box tag="section" css={layoutStyle}>
      <Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        Q&A - 질문 작성하기
      </Heading>

      <input
        type="text"
        placeholder="제목을 입력해주세요."
        css={inputStyle}
        value={questionRequest.title}
        onChange={(e) => updateInputValue("title", e.target.value)}
      />

      <PostUpload
        value={questionRequest.content}
        questionUpdateInputValue={updateInputValue}
        isLoading={isLoading}
        uploadMediaList={uploadMediaList}
        handleImgUpload={handleImgUpload}
        dropImgUpload={dropImgUpload}
      />

      <Box css={buttonBoxStyle}>
        <Button onClick={handleSubmit}>글 작성하기</Button>
      </Box>
    </Box>
  );
};

export default QuestionUpload;
