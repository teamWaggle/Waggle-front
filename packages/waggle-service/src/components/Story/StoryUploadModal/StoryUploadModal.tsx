import { Flex, Text, Theme, Button, getDefaultTextStyle } from "waggle-design-system";

import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";

import { Carousel } from "@/components/common";

import { useAddStoryForm } from "@/hooks/post/useAddStoryForm";
import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import {
  layoutStyle,
  headerStyle,
  contentBoxStyle,
  profileImgStyle,
  textareaStyle,
  lengthTextStyle,
} from "@/components/Story/StoryUploadModal/StoryUploadModal.style";

interface StoryEditModalParams {
  storyData: {
    mediaList?: string[];
    content?: string;
    hashtagList?: string[];
    boardId?: number;
  };
  uploadMediaList?: string[];
}

const StoryUploadModal = ({ storyData, uploadMediaList }: StoryEditModalParams) => {
  const { boardId, mediaList, content, hashtagList } = storyData;

  const { userUrl } = useMemberInfoSaveQuery();
  const { memberData } = useMemberInfoQuery(userUrl);

  const { storyRequest, updateInputValue, handleSubmit } = useAddStoryForm(
    uploadMediaList
      ? {
          mediaList: uploadMediaList,
        }
      : {
          storyId: boardId,
          initialData: {
            content,
            hashtagList,
            mediaList,
          },
          mediaList,
        }
  );

  return (
    <Flex styles={{ direction: "column" }} css={layoutStyle}>
      <Flex styles={{ justify: "center", align: "center", position: "relative" }} css={headerStyle}>
        <PrevArrowIcon />
        <Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
          수정하기
        </Text>
      </Flex>

      <Flex styles={{ height: "calc(100% - 54px)" }}>
        {storyRequest.mediaList && (
          <Carousel
            width={740}
            height={726}
            borderRadius="0 0 0 36px"
            length={storyRequest.mediaList.length}
            showArrows={storyRequest.mediaList.length > 1}
            showDots={storyRequest.mediaList.length > 1}
            updateMediaList={storyRequest.mediaList}
            storyUpdateInputValue={updateInputValue}
            hasGallery
          >
            {storyRequest.mediaList.map((imgUrl, index) => (
              <Carousel.Item index={index} key={imgUrl}>
                <img src={imgUrl} alt="img" />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        <Flex styles={{ direction: "column", justify: "space-between" }} css={contentBoxStyle}>
          <Flex styles={{ direction: "column", gap: "12px", width: "100%" }}>
            {/* 프로필 */}
            <Flex styles={{ align: "center", gap: "10px" }}>
              <img src={memberData.result.profileImgUrl} alt="profileImg" css={profileImgStyle} />
              <Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
                {memberData.result.nickname}
              </Text>
            </Flex>

            <textarea
              css={textareaStyle}
              placeholder="사진에 대한 설명을 입력해주세요"
              maxLength={500}
              value={storyRequest.content}
              onChange={(e) => updateInputValue("content", e.target.value)}
            />

            <Text size="small" css={lengthTextStyle}>
              {storyRequest.content ? storyRequest.content.length : 0}/500
            </Text>
          </Flex>

          <Button onClick={handleSubmit} style={{ alignSelf: "flex-end" }}>
            업로드
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoryUploadModal;
