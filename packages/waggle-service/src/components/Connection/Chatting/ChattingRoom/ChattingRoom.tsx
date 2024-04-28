import { Flex, Box } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chatting/ChattingMessage";
import ChattingMessageMine from "@/components/Connection/Chatting/ChattingMessageMine";

import {
  chattingContentBoxStyle,
  inputBoxStyle,
  chattingInputStyle,
  buttonStyle,
} from "@/components/Connection/Chatting/ChattingRoom/ChattingRoom.style";

const ChattingRoom = () => {
  return (
    <Box>
      <Flex styles={{ direction: "column", gap: "20px" }} css={chattingContentBoxStyle}>
        <ChattingMessage />
        <ChattingMessageMine />
        <ChattingMessage />
        <ChattingMessageMine />
        <ChattingMessageMine />
        <ChattingMessage />
        <ChattingMessageMine />
        <ChattingMessage />
        <ChattingMessageMine />

        <ChattingMessage />
        <ChattingMessage />
      </Flex>
      <Flex styles={{ gap: "14px" }} css={inputBoxStyle}>
        <input css={chattingInputStyle} placeholder="메시지를 입력해주세요" />
        <button css={buttonStyle}>
          <SendButtonIcon />
        </button>
      </Flex>
    </Box>
  );
};

export default ChattingRoom;
