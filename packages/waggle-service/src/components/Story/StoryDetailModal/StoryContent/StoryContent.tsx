import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, useOverlay } from "waggle-design-system";

import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";
import StoryUploadModal from "@/components/Story/StoryUploadModal/StoryUploadModal";

import { useDeleteStoryMutation } from "@/hooks/api/story/useDeleteStoryMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { convertToUTC } from "@/utils/convertToUTC";

import type { StoryDataType } from "@/types/story";

interface StoryContentProps extends StoryDataType {
  onClose: () => void;
}

const StoryContent = ({ onClose, storyData }: StoryContentProps) => {
  const { mutate: deleteStoryMutate } = useDeleteStoryMutation();

  const { boardId, member, content, createdDate } = storyData;

  const {
    isOpen: isDeleteWarningModalOpen,
    close: closeDeleteWarningModal,
    open: openDeleteWarningModal,
  } = useOverlay();

  const {
    isOpen: isStoryEditModalOpen,
    close: closeStoryEditModal,
    open: openStoryEditModal,
  } = useOverlay();

  const deleteMutate = () => {
    deleteStoryMutate(boardId, {
      onSuccess: () => {
        closeDeleteWarningModal();
      },
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "12px" }} css={contentBoxStyle}>
      <StoryProfile
        memberData={member}
        editClick={openStoryEditModal}
        deleteClick={openDeleteWarningModal}
      />

      <Box styles={{ maxWidth: "270px" }}>
        <Text css={getDefaultTextStyle(Theme.color.input_text, 500)}>{content}</Text>
      </Box>

      <Flex styles={{ justify: "flex-end", width: "100%" }}>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
          {convertToUTC(new Date(createdDate)).date}
        </Text>
      </Flex>

      {isDeleteWarningModalOpen && (
        <DeleteWarningModal
          isOpen={isDeleteWarningModalOpen}
          onClose={closeDeleteWarningModal}
          handleDelete={deleteMutate}
          isUpper
        />
      )}

      {isStoryEditModalOpen && (
        <StoryUploadModal
          isOpen={isStoryEditModalOpen}
          onClose={closeStoryEditModal}
          closeStoryModal={onClose}
          storyData={storyData}
        />
      )}
    </Flex>
  );
};

export default StoryContent;

const contentBoxStyle = css({
  padding: "52px 30px 12px 18px",
  width: "100%",
});
