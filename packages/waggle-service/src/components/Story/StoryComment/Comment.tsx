import { useState } from "react";

import { Flex, Box, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import Reply from "@/components/Story/StoryComment/Reply/Reply";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
  getCommentTextStyle,
  handleCommentTextStyle,
} from "@/components/Story/StoryComment/Comment.style";

const Comment = ({
  commentId,
  member,
  content,
  createdDate,
  handleEditClick,
}: CommentListInfoType) => {
  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const [replyOpen, setReplyOpen] = useState(false);

  const modal = useModal();

  const deleteMutate = () => {
    deleteCommentMutate(commentId, {
      onSuccess: () => {
        modal.selectCloseModal(`DeleteWarningModal`);
      },
    });
  };

  const handleDeleteComment = () => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="댓글" handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  };

  return (
    <Flex styles={{ direction: "column", padding: "0 30px 0 18px" }}>
      <StoryProfile
        img={member.profileImgUrl}
        nickname={member.nickname}
        deleteClick={handleDeleteComment}
        editClick={() => handleEditClick(content, commentId)}
        ownerId={member.memberId}
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

      {replyOpen && <Reply commentId={commentId} setReplyOpen={setReplyOpen} />}
    </Flex>
  );
};

export default Comment;
