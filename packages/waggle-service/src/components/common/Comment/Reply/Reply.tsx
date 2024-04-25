import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { useOverlay } from "waggle-design-system";

import { Flex, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { PATH } from "@/constants/path";

import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

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

  const navigate = useNavigate();

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
    <Flex css={replyCardBoxStyle}>
      <img
        src={member.profileImgUrl}
        alt="memberProfileImg"
        onClick={() => navigate(`${PATH.MY(member.userUrl)}?tab=profile`)}
      />

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
          handleDeleteMenu={openDeleteWarningModal}
        />
      )}

      {isDeleteWarningModalOpen && (
        <DeleteWarningModal
          isOpen={isDeleteWarningModalOpen}
          onClose={closeDeleteWarningModal}
          targetText="답글"
          handleDelete={deleteMutate}
        />
      )}
    </Flex>
  );
};

export default Reply;
