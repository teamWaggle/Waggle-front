import { useCallback } from "react";
import { useRecoilValue } from "recoil";

import { Flex, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import useModal from "@/hooks/common/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { ReplyDataType } from "@/types/reply";

import { replyCardBoxStyle } from "@/components/common/Comment/Reply/Reply.style";

const Reply = ({ replyData, handleReplyEditClick }: ReplyDataType) => {
  const { replyId, content, createdDate, member } = replyData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { mutate: deleteReplyMutate } = useDeleteRelpyMutation();

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const memberId = userData ? userData.memberId : null;

  const modal = useModal();

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
        <ProfileOptionMenu
          handleEditMenu={() => handleReplyEditClick(content, replyId)}
          handleDeleteMenu={handleDeleteReply}
        />
      )}
    </Flex>
  );
};

export default Reply;
