import { Flex, Box, Text, useOverlay } from "waggle-design-system";

import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";

import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyDataType } from "@/types/reply";

import {
  getCommentTextStyle,
  replyDateTextStyle,
} from "@/components/Story/StoryComment/Comment.style";

const ReplyItem = ({ replyData, handleReplyEditClick }: ReplyDataType) => {
  const { replyId, content, member, createdDate } = replyData;

  const { mutate: deleteReplyMutate } = useDeleteRelpyMutation();

  const {
    isOpen: isDeleteWarningModalOpen,
    close: closeDeleteWarningModal,
    open: openDeleteWarningModal,
  } = useOverlay();

  const deleteMutate = () => {
    deleteReplyMutate(replyId, {
      onSuccess: () => {
        closeDeleteWarningModal();
      },
    });
  };

  return (
    <Flex
      styles={{
        direction: "column",
        width: "100%",
      }}
    >
      <StoryProfile
        memberData={member}
        editClick={() => handleReplyEditClick(content, replyId)}
        deleteClick={openDeleteWarningModal}
      />

      <Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
        <Text size="small" css={getCommentTextStyle}>
          {content}
        </Text>
        <Text css={replyDateTextStyle}>{convertToUTC(new Date(createdDate)).date}</Text>
      </Box>

      {isDeleteWarningModalOpen && (
        <DeleteWarningModal
          isOpen={isDeleteWarningModalOpen}
          onClose={closeDeleteWarningModal}
          handleDelete={deleteMutate}
          targetText="답글"
          isUpper
        />
      )}
    </Flex>
  );
};

export default ReplyItem;
