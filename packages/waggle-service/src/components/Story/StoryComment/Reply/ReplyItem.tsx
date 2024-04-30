import { Flex, Box, Text } from "waggle-design-system";

import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";

import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import useModal from "@/hooks/common/useModal";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyDataType } from "@/types/reply";

import {
  getCommentTextStyle,
  replyDateTextStyle,
} from "@/components/Story/StoryComment/Comment.style";

const ReplyItem = ({ replyData, handleReplyEditClick }: ReplyDataType) => {
  const { replyId, content, member, createdDate } = replyData;

  const { mutate: deleteReplyMutate } = useDeleteRelpyMutation();

  const { openModal, selectCloseModal } = useModal();

  const deleteMutate = () => {
    deleteReplyMutate(replyId, {
      onSuccess: () => {
        selectCloseModal("DeleteWarningModal");
      },
    });
  };

  const handleDeleteReply = () => {
    openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="답글" handleDelete={deleteMutate} />,
      notCloseIcon: true,
      isUpper: true,
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
        deleteClick={handleDeleteReply}
      />

      <Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
        <Text size="small" css={getCommentTextStyle}>
          {content}
        </Text>
        <Text style={{ fontSize: "10px", lineHeight: "12px" }} css={replyDateTextStyle}>
          {convertToUTC(new Date(createdDate)).date}
        </Text>
      </Box>
    </Flex>
  );
};

export default ReplyItem;
