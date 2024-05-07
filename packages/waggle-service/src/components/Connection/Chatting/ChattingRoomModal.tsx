import { css } from "@emotion/react";

import { Flex, Box, Theme } from "waggle-design-system";

// import LockChatting from "@/components/Connection/Chatting/LockChatting";
import ChattingRoom from "@/components/Connection/Chatting/ChattingRoom/ChattingRoom";
import ChattingRoomInfoBox from "@/components/Connection/Chatting/ChattingRoomInfoBox/ChattingRoomInfoBox";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

const ChattingRoomModal = ({ chatRoomId }: { chatRoomId: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  console.log(chatRoomData);

  return (
    <Box styles={{ width: "600px" }}>
      <ChattingRoomInfoBox
        name={chatRoomData.result.name}
        description={chatRoomData.result.description}
      />

      <Flex css={contentBoxStyle}>
        {/* <LockChatting onClose={onClose} /> */}
        <ChattingRoom />
      </Flex>
    </Box>
  );
};

export default ChattingRoomModal;

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});
