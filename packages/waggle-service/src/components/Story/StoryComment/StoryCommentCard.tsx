import { useState } from "react";

import { Flex, Box, Text, Theme, useOverlay } from "waggle-design-system";

import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import Reply from "@/components/Story/StoryComment/Reply/Reply";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentDataType } from "@/types/comment";

import {
  getCommentTextStyle,
  handleCommentTextStyle,
} from "@/components/Story/StoryComment/Comment.style";

const StoryCommentCard = ({ commentData, handleEditClick }: CommentDataType) => {
  const { commentId, member, content, createdDate } = commentData;

  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const [replyOpen, setReplyOpen] = useState(false);

  const {
    isOpen: isDeleteWarningModalOpen,
    close: closeDeleteWarningModal,
    open: openDeleteWarningModal,
  } = useOverlay();

  const handleReplyOpen = (open: boolean) => {
    setReplyOpen(open);
  };

  const deleteMutate = () => {
    deleteCommentMutate(commentId, {
      onSuccess: () => {
        closeDeleteWarningModal();
      },
    });
  };

  return (
    <Flex styles={{ direction: "column", padding: "0 30px 0 18px", width: "100%" }}>
      <StoryProfile
        memberData={member}
        deleteClick={openDeleteWarningModal}
        editClick={() => handleEditClick(content, commentId)}
      />

      <Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
        <Text size="small" css={getCommentTextStyle}>
          {content}
        </Text>
      </Box>

      <Flex styles={{ align: "center", gap: "12px", paddingLeft: "43px" }}>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
          {convertToUTC(new Date(createdDate)).date}
        </Text>
        <Text
          size="xSmall"
          css={handleCommentTextStyle}
          onClick={() => setReplyOpen((prev) => !prev)}
        >
          답글
        </Text>
      </Flex>

      {replyOpen && <Reply commentId={commentId} handleReplyOpen={handleReplyOpen} />}

      {isDeleteWarningModalOpen && (
        <DeleteWarningModal
          isOpen={isDeleteWarningModalOpen}
          onClose={closeDeleteWarningModal}
          handleDelete={deleteMutate}
          targetText="댓글"
          isUpper
        />
      )}
    </Flex>
  );
};

export default StoryCommentCard;
