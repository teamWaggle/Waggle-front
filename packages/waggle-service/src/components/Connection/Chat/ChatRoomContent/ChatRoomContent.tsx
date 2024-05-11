import { useContext } from "react";

import { Flex, Box } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessage";
import ChattingMessageMine from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessageMine";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { useChatMessageListQuery } from "@/hooks/api/chat/useChatMessageListQuery";

import {
  chattingContentBoxStyle,
  inputBoxStyle,
  chattingInputStyle,
  buttonStyle,
} from "@/components/Connection/Chat/ChatRoomContent/ChatRoomContent.style";

const ChatRoomContent = () => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { chatRoomId } = context;

  const { chatMessageListData } = useChatMessageListQuery(chatRoomId);

  console.log(chatMessageListData);

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

export default ChatRoomContent;
