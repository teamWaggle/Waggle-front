import { useState, useRef, useCallback } from "react";
import { flushSync } from "react-dom";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Text } from "@/components/common";
import Reply from "@/components/common/Comment/Reply/Reply";
import ReplyInput from "@/components/common/Comment/Reply/ReplyInput";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import { useEditReplyMutation } from "@/hooks/api/reply/useEditReplyMutation";
import { useReplyQuery } from "@/hooks/api/reply/useReplyQuery";
import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentListInfoType } from "@/types/comment";

import {
  commentCardBoxStyle,
  replyBoxStyle,
  moreButtonStyle,
  menuStyle,
} from "@/components/common/Comment/Comment.style";

const CommentCard = ({
  commentId,
  content,
  createdDate,
  member,
  handleEditClick,
}: CommentListInfoType) => {
  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const { replyData } = useReplyQuery(0, commentId);

  const { mutate: editReplyMutation } = useEditReplyMutation();

  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [replyContent, setReplyContent] = useState("");
  const [mentionedMemberList] = useState<string[]>(["test"]);
  const [replyButtonText, setReplyButtonText] = useState("등록");
  const [replyId, setReplyId] = useState(0);

  const menuRef = useRef<HTMLUListElement>(null);
  const replyRef = useRef<HTMLTextAreaElement>(null);

  const modal = useModal();

  const memberId = Number(localStorage.getItem("MEMBER_ID"));

  useClickOutSide(menuRef, () => setMenuOpen(false));

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

  const handleEditReply = () => {
    editReplyMutation(
      {
        content: replyContent,
        mentionedMemberList,
        replyId,
      },
      {
        onSuccess: () => {
          setReplyContent("");
          setReplyId(0);
          setReplyButtonText("등록");
        },
      }
    );
  };

  const handleReplyEditClick = useCallback((content: string, replyId: number) => {
    flushSync(() => {
      setIsReplyBoxOpen(true);
    });

    if (!replyRef.current) return;

    replyRef.current.focus();
    setReplyContent(content);
    setReplyId(replyId);
    setReplyButtonText("수정");
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
          replyData &&
          replyData.result.replyList.map((data) => (
            <Reply
              key={data.replyId}
              replyId={data.replyId}
              content={data.content}
              createdDate={data.createdDate}
              member={data.member}
              handleReplyEditClick={handleReplyEditClick}
            />
          ))}

        {isReplyBoxOpen && (
          <ReplyInput
            commentId={commentId}
            content={replyContent}
            setContent={setReplyContent}
            mentionedMemberList={mentionedMemberList}
            replyButtonText={replyButtonText}
            handleEditReply={handleEditReply}
            replyRef={replyRef}
          />
        )}
      </Flex>

      <Flex css={replyBoxStyle}>
        <Text onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}>
          {isReplyBoxOpen ? "답글접기" : "답글"}
        </Text>

        {member.memberId === memberId && (
          <Flex css={moreButtonStyle} onClick={() => setMenuOpen((prev) => !prev)}>
            <OptionIcon />

            {menuOpen && (
              <ul css={menuStyle} ref={menuRef}>
                <li onClick={() => handleEditClick(content, commentId)}>수정하기</li>
                <li onClick={handleDeleteComment}>삭제하기</li>
              </ul>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CommentCard;
