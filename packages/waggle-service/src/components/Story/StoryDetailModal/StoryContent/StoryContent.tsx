import { css } from "@emotion/react";

import { Flex, Box, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";
import StoryUploadModal from "@/components/Story/StoryUploadModal/StoryUploadModal";

import { useDeleteStoryMutation } from "@/hooks/api/story/useDeleteStoryMutation";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { StoryDataType } from "@/types/story";

const StoryContent = ({ storyData }: StoryDataType) => {
  const { mutate: deleteStoryMutate } = useDeleteStoryMutation();

  const { boardId, member, content, createdDate, mediaList, hashtagList } = storyData;

  const modal = useModal();

  const deleteMutate = () => {
    deleteStoryMutate(boardId, {
      onSuccess: () => {
        modal.closeModal();
      },
    });
  };

  const handleDeleteStory = () => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal handleDelete={deleteMutate} />,
      isUpper: true,
      notCloseIcon: true,
    });
  };

  const handleEditStory = () => {
    modal.closeModal();

    modal.openModal({
      key: `StoryUploadModal`,
      component: () => (
        <StoryUploadModal
          mediaList={mediaList}
          content={content}
          hashtagList={hashtagList}
          storyId={boardId}
        />
      ),
    });
  };

  return (
    <Flex css={contentBoxStyle}>
      <StoryProfile
        img={member.profileImgUrl}
        nickname={member.nickname}
        editClick={handleEditStory}
        deleteClick={handleDeleteStory}
        ownerId={member.memberId}
      />

      <Box styles={{ maxWidth: "270px" }}>
        <Text css={getDefaultTextStyle(Theme.color.input_text, 500)}>{content}</Text>
      </Box>

      <Flex styles={{ justify: "flex-end", width: "100%" }}>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
          {convertToUTC(new Date(createdDate)).date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default StoryContent;

const contentBoxStyle = css({
  flexDirection: "column",
  padding: "52px 30px 12px 18px",
  gap: "12px",
  width: "100%",
});
