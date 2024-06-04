import { css } from "@emotion/react";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

const ChatRoomItemTitle = ({ disabled }: { disabled?: boolean }) => {
  return (
    <Flex styles={{ gap: "6px", align: "center" }}>
      <span css={circleTextBoxStyle(disabled)}>N</span>
      <Text css={getDefaultTextStyle(Theme.color.text, 500)}>채팅방 메시지</Text>
    </Flex>
  );
};

export default ChatRoomItemTitle;

export const circleTextBoxStyle = (disabled?: boolean) =>
  css({
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: disabled ? Theme.color.disabled_text : Theme.color.btn_danger,
    fontSize: "10px",
    color: Theme.color.white,
    fontWeight: 600,
  });
