import { Flex, Box, Divider, Heading, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PostEdit from "@/components/common/Post/PostEdit";
import SirenUploadInput from "@/components/Siren/SirenUpload/SirenUploadInput/SirenUploadInput";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { useAddSirenForm } from "@/hooks/siren/useAddSirenForm";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagCategory } from "@/utils/generateTag";

import type { SirenDataType } from "@/types/siren";

import { tagStyle } from "@/components/common/Tag/Tag.style";
import { layoutStyle, inputStyle } from "@/components/Siren/SirenEdit/SirenEdit.style";
import { buttonBoxStyle } from "@/components/Siren/SirenUpload/SirenUpload.style";

const SirenEdit = ({ sirenData }: SirenDataType) => {
  const {
    boardId,
    category,
    title,
    lostLocate,
    lostDate,
    petAge,
    petBreed,
    petGender,
    contact,
    content,
    mediaList,
  } = sirenData;

  const { sirenRequest, updateInputValue, handleSubmit } = useAddSirenForm({
    sirenId: boardId,
    initialData: {
      title,
      content,
      lostLocate,
      petBreed,
      petGender,
      lostDate,
      petAge,
      contact,
      category,
      mediaList,
    },
  });

  return (
    <Box tag="section" css={layoutStyle}>
      <Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        SIREN - 글 수정하기
      </Heading>

      <input
        type="text"
        placeholder="제목을 입력해주세요."
        css={inputStyle}
        value={sirenRequest.title}
        onChange={(e) => updateInputValue("title", e.target.value)}
      />

      <Divider length="100%" />

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

      <PostEdit
        value={sirenRequest.content}
        sirenUpdateInputValue={updateInputValue}
        updateMediaList={sirenRequest.mediaList}
      />

      <Box css={buttonBoxStyle}>
        <Button onClick={handleSubmit}>글 수정하기</Button>
      </Box>
    </Box>
  );
};

export default SirenEdit;
