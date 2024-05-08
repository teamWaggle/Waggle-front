import { css } from "@emotion/react";
import { useContext } from "react";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import RootSettingIcon from "@/assets/svg/ic-room-setting.svg?react";
import RoomOutIcon from "@/assets/svg/ic-room-out.svg?react";

import ChatRoomEditModal from "@/components/Connection/Chat/ChatRoomEditModal/ChatRoomEditModal";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import useModal from "@/hooks/common/useModal";

const RoomSettingButton = () => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { ownerId } = context;

  const { memberId } = useMemberInfoSaveQuery();

  const { openModal, closeModal } = useModal();

  const isOwner = memberId === ownerId;

  const handleEditModalOpen = () => {
    closeModal();
    openModal({
      key: "ChatRoomEditModal",
      component: () => <ChatRoomEditModal />,
      isWhiteIcon: true,
    });
  };

  return (
    <Flex
      styles={{ align: "center", gap: "4px" }}
      css={buttonBoxStyle}
      onClick={() => (isOwner ? handleEditModalOpen() : "")}
    >
      {isOwner ? <RootSettingIcon /> : <RoomOutIcon />}
      <Text size="small" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        {isOwner ? "채팅방 설정" : "채팅방 나가기"}
      </Text>
    </Flex>
  );
};

export default RoomSettingButton;

const buttonBoxStyle = css({
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: Theme.color.white,
  cursor: "pointer",
});
