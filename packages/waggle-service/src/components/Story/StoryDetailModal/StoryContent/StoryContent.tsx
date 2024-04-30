import { useCallback } from "react";

import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";
import StoryUploadModal from "@/components/Story/StoryUploadModal/StoryUploadModal";

import { useDeleteStoryMutation } from "@/hooks/api/story/useDeleteStoryMutation";
import useModal from "@/hooks/common/useModal";

import { convertToUTC } from "@/utils/convertToUTC";

import type { StoryDataType } from "@/types/story";

const StoryContent = ({ storyData }: StoryDataType) => {
  const { mutate: deleteStoryMutate } = useDeleteStoryMutation();

  const { boardId, member, content, createdDate } = storyData;

  const { openModal, closeModal, selectCloseModal } = useModal();

  const handleDeleteStory = useCallback(() => {
    openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal handleDelete={deleteMutate} />,
      isUpper: true,
      notCloseIcon: true,
    });
  }, []);

  const handleEditStory = () => {
    closeModal();

    openModal({
      key: `StoryUploadModal`,
      component: () => <StoryUploadModal storyData={storyData} />,
    });
  };

  const deleteMutate = () => {
    deleteStoryMutate(boardId, {
      onSuccess: () => {
        selectCloseModal("DeleteWarningModal");
      },
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "12px" }} css={contentBoxStyle}>
      <StoryProfile
        memberData={member}
        editClick={handleEditStory}
        deleteClick={handleDeleteStory}
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
  padding: "52px 30px 12px 18px",
  width: "100%",
});
