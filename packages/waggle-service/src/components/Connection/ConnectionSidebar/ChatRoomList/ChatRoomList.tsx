import { css } from "@emotion/react";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import ChatRoomItem from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomItem";

const ChatRoomList = () => {
  return (
    <Flex styles={{ direction: "column", gap: "12px" }}>
      <Flex styles={{ gap: "6px", align: "center" }}>
        <span css={circleTextBoxStyle}>N</span>
        <Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
          채팅방 메시지
        </Text>
      </Flex>
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
    </Flex>
  );
};

export default ChatRoomList;

export const circleTextBoxStyle = css({
  width: "17px",
  height: "17px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: Theme.color.btn_danger,
  fontSize: "10px",
  color: Theme.color.white,
  fontWeight: 600,
});
