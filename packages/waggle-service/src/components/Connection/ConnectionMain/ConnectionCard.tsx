import { css } from "@emotion/react";

import { Flex, Text, Button, Theme, getDefaultTextStyle } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";

import ChattingRoomModal from "@/components/Connection/Chatting/ChattingRoomModal";

import useModal from "@/hooks/common/useModal";

import type { ChatRoomInfoType } from "@/types/chat";

const ConnectionCard = ({ chatRoomInfo }: ChatRoomInfoType) => {
  const { openModal } = useModal();

  const handleRoomOpen = () => {
    openModal({
      key: "ChattingRoomModal",
      component: () => <ChattingRoomModal />,
      isWhiteIcon: true,
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "8px" }} css={cardBoxStyle}>
      <Text css={getDefaultTextStyle(Theme.color.text, 700)}>{chatRoomInfo.name}</Text>
      <Text size="small" css={getDefaultTextStyle(Theme.color.input_text, 500)}>
        {chatRoomInfo.description}
      </Text>
      <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
        <Flex styles={{ gap: "12px" }}>
          <PersonIcon />
          <Text size="small" css={getDefaultTextStyle("#9a9a9a", 600)}>
            {chatRoomInfo.chatRoomMembers.memberCount}/7
          </Text>
        </Flex>
        <Button style={{ padding: "6px 10px", borderRadius: "13px" }} onClick={handleRoomOpen}>
          입장
        </Button>
      </Flex>
    </Flex>
  );
};

export default ConnectionCard;

const cardBoxStyle = css({
  border: `1px solid ${Theme.color.brand_primary}`,
  borderRadius: "20px",
  padding: "20px 18px",
  width: "255px",
});
