import { useContext } from "react";
import PenIcon from "@/assets/svg/pen.svg?react";
import TrashIcon from "@/assets/svg/trashCan.svg?react";

import { Box, Flex, Text } from "waggle-design-system";
import { format } from "date-fns";

import {
  commentBoxStyle,
  imgStyle,
  commentUserNameStyle,
  commentTimeStyle,
  commentTextBoxStyle,
  commentIconStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/Comment/Comment.style";
import type { CommentListInfoType } from "@/types/comment";
import MentionChecker from "@/components/common/MentionChecker/MentionChecker";
import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import { CommentFieldContext } from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/CommentField";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

const Comment = ({ comment }: { comment: CommentListInfoType }) => {
  const { content, createdDate, member, commentId } = comment;
  const { memberId: commentOwnerId } = member;

  const { mutate: deleteComment } = useDeleteCommentMutation();
  const { memberId } = useMemberInfoSaveQuery();
  const { handleEditCommentId, handleCommentEditValue } = useContext(CommentFieldContext);

  const handleDeleteComment = () => {
    deleteComment(commentId);
  };

  const handleEditComment = () => {
    handleEditCommentId(commentId);
    handleCommentEditValue(content);
  };

  return (
    <Flex styles={{ align: "center", marginBottom: "16px" }} css={commentBoxStyle}>
      <Box tag="figure">
        <img css={imgStyle} src={member.profileImgUrl} alt="profileImg" />
      </Box>
      <Flex tag="section" styles={{ width: "100%", direction: "column" }}>
        <Flex tag="article" styles={{ width: "300px", align: "center", justify: "space-between" }}>
          <Flex styles={{ gap: "16px", align: "center" }}>
            <Text css={commentUserNameStyle}>{member.nickname}</Text>
            <Text size="xSmall" css={commentTimeStyle}>
              {format(createdDate, "yyyy.M.dd")}
            </Text>
          </Flex>
          <Flex styles={{ gap: "8px" }}>
            {memberId === commentOwnerId && (
              <>
                <PenIcon css={commentIconStyle} onClick={handleEditComment} />
                <TrashIcon css={commentIconStyle} onClick={handleDeleteComment} />
              </>
            )}
          </Flex>
        </Flex>
        <Flex css={commentTextBoxStyle}>
          <MentionChecker content={content} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
