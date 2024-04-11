import { useState, useRef, useCallback } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";

import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyListInfoType } from "@/types/reply";

import { menuStyle } from "@/components/common/Comment/Comment.style";
import { replyCardBoxStyle, moreButtonStyle } from "@/components/common/Comment/Reply/Reply.style";

const Reply = ({
  replyId,
  content,
  createdDate,
  member,
  handleReplyEditClick,
}: ReplyListInfoType) => {
  const { mutate: deleteReplyMutate } = useDeleteRelpyMutation();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);

  const modal = useModal();

  const memberId = Number(localStorage.getItem("MEMBER_ID"));

  useClickOutSide(menuRef, () => setMenuOpen(false));

  const deleteMutate = () => {
    deleteReplyMutate(replyId, {
      onSuccess: () => {
        modal.selectCloseModal(`DeleteWarningModal`);
      },
    });
  };

  const handleDeleteReply = useCallback(() => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="답글" handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  }, []);

  return (
    <Flex css={replyCardBoxStyle}>
      <img src={member.profileImgUrl} alt="memberProfileImg" />

      <Flex styles={{ direction: "column", gap: "22px" }}>
        <Flex styles={{ direction: "column" }}>
          <Flex styles={{ gap: "14px", align: "center" }}>
            <Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
              {member.nickname}
            </Text>
            <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
              {convertToUTC(new Date(createdDate)).date}
            </Text>
          </Flex>

          <Text css={getDefaultTextStyle(Theme.color.text, 500)}>{content}</Text>
        </Flex>
      </Flex>

      {member.memberId === memberId && (
        <Flex css={moreButtonStyle} onClick={() => setMenuOpen((prev) => !prev)}>
          <OptionIcon />

          {menuOpen && (
            <ul css={menuStyle} ref={menuRef}>
              <li onClick={() => handleReplyEditClick(content, replyId)}>수정하기</li>
              <li onClick={handleDeleteReply}>삭제하기</li>
            </ul>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Reply;
