import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";

import { Flex, Text } from "@/components/common";
import Reply from "@/components/common/Comment/Reply/Reply";
import ReplyInput from "@/components/common/Comment/Reply/ReplyInput";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import { useReplyQuery } from "@/hooks/api/reply/useReplyQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import useModal from "@/hooks/common/useModal";
import { useComment } from "@/hooks/comment/useComment";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentDataType } from "@/types/comment";

import { commentCardBoxStyle, replyBoxStyle } from "@/components/common/Comment/Comment.style";

const CommentCard = ({ commentData, handleEditClick }: CommentDataType) => {
  const { commentId, member, content, createdDate } = commentData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const { replyData } = useReplyQuery(0, commentId);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const memberId = userData ? userData.memberId : null;

  const {
    commentContent,
    commentButtonText,
    handleCommentContent,
    handleAddReply,
    handleEditReply,
    handleEditClick: handleReplyEditClick,
    commentTextAreaRef,
  } = useComment({ targetCommentId: commentId, isTextArea: true });

  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);

  const modal = useModal();

  const deleteMutate = () => {
    deleteCommentMutate(commentId, {
      onSuccess: () => {
        modal.selectCloseModal(`DeleteWarningModal`);
      },
    });
  };

  const handleDeleteComment = useCallback(() => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="댓글" handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  }, []);

  return (
    <Flex css={commentCardBoxStyle}>
      <img src={member.profileImgUrl} alt="profileImg" />

      <Flex styles={{ direction: "column", gap: "22px", width: "calc(100% - 64px)" }}>
        <Flex styles={{ direction: "column" }}>
          <Flex styles={{ gap: "14px", align: "center" }}>
            <Text css={getDefaultTextStyle(Theme.color.text, 500)}>{member.nickname}</Text>
            <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
              {convertToUTC(new Date(createdDate)).date}
            </Text>
          </Flex>

          <Text size="large" css={getDefaultTextStyle(Theme.color.text, 500)}>
            {content}
          </Text>
        </Flex>

        {isReplyBoxOpen &&
          replyData.result.replyList.map((replyData) => (
            <Reply
              key={replyData.replyId}
              replyData={replyData}
              handleReplyEditClick={handleReplyEditClick}
            />
          ))}

        {isReplyBoxOpen && (
          <ReplyInput
            content={commentContent}
            handleCommentContent={handleCommentContent}
            replyButtonText={commentButtonText}
            handleAddReply={handleAddReply}
            handleEditReply={handleEditReply}
            replyRef={commentTextAreaRef}
          />
        )}
      </Flex>

      <Flex css={replyBoxStyle}>
        <Text onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}>
          {isReplyBoxOpen ? "답글접기" : "답글"}
        </Text>

        {member.memberId === memberId && (
          <Flex styles={{ align: "center", paddingTop: "4px" }}>
            <ProfileOptionMenu
              handleEditMenu={() => handleEditClick(content, commentId)}
              handleDeleteMenu={handleDeleteComment}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CommentCard;
