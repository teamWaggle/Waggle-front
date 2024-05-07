import { css } from "@emotion/react";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

// import LockChatting from "@/components/Connection/Chatting/LockChatting";
import ChattingRoom from "@/components/Connection/Chatting/ChattingRoom/ChattingRoom";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

const ChattingRoomModal = ({ chatRoomId }: { chatRoomId: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  console.log(chatRoomData);

  return (
    <Box styles={{ width: "600px" }}>
      <Box css={titleBoxStyle}>
        <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>
          {chatRoomData.result.name}
        </Heading>
        <Text css={getDefaultTextStyle(Theme.color.white, 500)}>
          {chatRoomData.result.description}
        </Text>
      </Box>

      <Flex css={contentBoxStyle}>
        {/* <LockChatting onClose={onClose} /> */}
        <ChattingRoom />
      </Flex>
    </Box>
  );
};

export default ChattingRoomModal;

const titleBoxStyle = css({
  backgroundColor: Theme.color.brand_primary,
  padding: "30px 40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});
