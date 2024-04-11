import { useCallback } from "react";

import { Flex, Box, Heading, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PostUpload from "@/components/common/Post/PostUpload/PostUpload";
import SirenUploadInput from "@/components/Siren/SirenUpload/SirenUploadInput/SirenUploadInput";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { useAddSirenForm } from "@/hooks/siren/useAddSirenForm";
import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagCategory } from "@/utils/generateTag";

import { tagStyle } from "@/components/common/Tag/Tag.style";
import {
  layoutStyle,
  inputStyle,
  buttonBoxStyle,
} from "@/components/Siren/SirenUpload/SirenUpload.style";

const SirenUpload = () => {
  const { sirenRequest, updateInputValue, handleSubmit } = useAddSirenForm({});

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
        SIREN - 글 작성하기
      </Heading>

      <input
        type="text"
        placeholder="제목을 입력해주세요."
        css={inputStyle}
        value={sirenRequest.title}
        onChange={(e) => updateInputValue("title", e.target.value)}
      />

      <Box styles={{ marginTop: "60px" }}>
        <Text size="xLarge" css={getDefaultTextStyle(Theme.color.input_text, 500)}>
          게시판 선택
        </Text>

        <Flex styles={{ gap: "16px", marginTop: "14px" }}>
          {SIREN_TAG_CATEGORY.map((data) => (
            <Flex
              css={tagStyle(
                sirenRequest.category === data.category
                  ? generateTagStyle(data.category)
                  : Theme.color.border
              )}
              key={data.tagName}
              onClick={() => updateInputValue("category", generateTagCategory(data.tagName))}
            >
              <Text>{data.tagName}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <SirenUploadInput value={sirenRequest} updateInputValue={updateInputValue} />

      <PostUpload
        value={sirenRequest.content}
        sirenUpdateInputValue={updateInputValue}
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

export default SirenUpload;
