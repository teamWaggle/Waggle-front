import { css } from "@emotion/react";
import { Suspense } from "react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { circleTextBoxStyle } from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomList";
import ChatRoomModal from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import useModal from "@/hooks/common/useModal";

import type { MemberChatRoomInfoType } from "@/types/chat";

const ChatRoomItem = ({ memberChatRoomInfo }: MemberChatRoomInfoType) => {
  const { openModal } = useModal();

  const { id, name, lastMessageContent, lastSenderProfileImgUrl, unreadCount } = memberChatRoomInfo;

  const handleChatRoomOpen = () => {
    openModal({
      key: "ChatRoomModal",
      component: () => (
        <Suspense fallback={<div />}>
          <ChatRoomModal chatRoomId={id} />
        </Suspense>
      ),
      isWhiteIcon: true,
    });
  };

  return (
    <Flex styles={{ align: "center", gap: "10px" }} css={cardBoxStyle} onClick={handleChatRoomOpen}>
      <img src={lastSenderProfileImgUrl} alt="profileImg" />
      <Box>
        <Flex styles={{ gap: "8px", align: "center" }}>
          <Text size="small" css={getDefaultTextStyle(Theme.color.text, 600)}>
            {name}
          </Text>
          <span css={circleTextBoxStyle}>{unreadCount}</span>
        </Flex>

        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 400)}>
          {lastMessageContent}
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatRoomItem;

const cardBoxStyle = css({
  width: "295px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "45px",
  padding: "12px 14px",

  "& > img": {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  },
});
