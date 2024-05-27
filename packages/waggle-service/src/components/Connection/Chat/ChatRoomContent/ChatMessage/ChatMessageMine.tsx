import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ChatMessageInfoType } from "@/types/chat";

const ChatMessageMine = ({ chatMessageInfo }: ChatMessageInfoType) => {
  return (
    <Flex styles={{ direction: "column", marginLeft: "auto" }}>
      <Flex styles={{ gap: "16px", align: "center", marginLeft: "auto" }}>
        <Text css={getDefaultTextStyle(Theme.color.text, 500)}>
          {chatMessageInfo.senderNickname}
        </Text>
        <Text css={getDefaultTextStyle(Theme.color.readonly_text, 300)}>
          {convertToUTC(new Date(chatMessageInfo.sendTime)).date}
        </Text>
      </Flex>
      <Box css={messageBoxStyle}>
        <Text>{chatMessageInfo.content}</Text>
      </Box>
    </Flex>
  );
};

export default ChatMessageMine;

const messageBoxStyle = css({
  border: `1px solid ${Theme.color.brand_primary}`,
  backgroundColor: "#fff4e5",
  padding: "15px",
  borderRadius: "28px",
  marginTop: "6px",
  maxWidth: "436px",
  marginLeft: "auto",
});
