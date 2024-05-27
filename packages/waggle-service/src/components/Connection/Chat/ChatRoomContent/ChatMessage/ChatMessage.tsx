import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ChatMessageInfoType } from "@/types/chat";

const ChatMessage = ({ chatMessageInfo }: ChatMessageInfoType) => {
  return (
    <Flex styles={{ gap: "24px", width: "100%" }}>
      <img src={chatMessageInfo.senderProfileImgUrl} alt="profileImg" css={profileImgStyle} />
      <Flex styles={{ direction: "column" }}>
        <Flex styles={{ gap: "16px", align: "center" }}>
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
    </Flex>
  );
};

export default ChatMessage;

const profileImgStyle = css({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
});

const messageBoxStyle = css({
  border: `1px solid ${Theme.color.border}`,
  padding: "15px",
  borderRadius: "28px",
  marginTop: "6px",
  maxWidth: "436px",
});
