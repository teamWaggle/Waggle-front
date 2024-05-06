import { useCallback } from "react";

import { Box, Heading, Button, getDefaultTextStyle, Theme } from "waggle-design-system";

import PostUpload from "@/components/common/Post/PostUpload/PostUpload";
import Keyword from "@/components/Question/QuestionUpload/Keyword/Keyword";

import { useAddQuestionForm } from "@/hooks/post/useAddQuestionForm";
import { useMultipleImgUpload } from "@/hooks/common/useMultipleImgUpload";

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

      <Keyword updateInputValue={updateInputValue} />

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
