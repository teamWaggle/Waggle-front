import { useContext, useEffect, useState } from "react";

import { Client } from "@stomp/stompjs";

import { Flex, Box } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessage";
import ChattingMessageMine from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessageMine";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

// import { useChatMessageListQuery } from "@/hooks/api/chat/useChatMessageListQuery";

// import type { ChatMessageType } from "@/types/chat";

import {
  chattingContentBoxStyle,
  inputBoxStyle,
  chattingInputStyle,
  buttonStyle,
} from "@/components/Connection/Chat/ChatRoomContent/ChatRoomContent.style";

interface ChatMessageRequest {
  chatMessageType: string;
  chatRoomId?: number;
  sendUserUrl: string;
  content: string;
}

const ChatRoomContent = () => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { chatRoomId } = context;

  // const { chatMessageListData } = useChatMessageListQuery(chatRoomId);

  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages] = useState([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  useEffect(() => {
    const client = new Client({
      brokerURL: "wss://suddii01.store/ws/chat",
      reconnectDelay: 10000,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      // debug: (str: string) => {
      //   console.log(str);
      // },
      // onConnect: () => {
      //   console.log("connect");

      //   client.subscribe(
      //     `/subscribe/${chatRoomId}`,
      //     (message) => {
      //       console.log(chatRoomId);

      //       const msg = JSON.parse(message.body);

      //       console.log(msg);
      //     }
      //   );
      // },
    });
    setStompClient(client);

    client.activate();

    client.onConnect = () => {
      console.log("socket connect");

      client.subscribe(`/subscribe/${chatRoomId}`, () => {
        console.log("연결");
      });
    };

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, [chatRoomId]);

  const sendMessage = () => {
    if (!stompClient) return;

    const chatMessage: ChatMessageRequest = {
      chatMessageType: "TALK",
      chatRoomId,
      sendUserUrl: "test1234!",
      content: "test",
    };

    stompClient.publish({
      destination: "/publish/message",
      body: JSON.stringify(chatMessage),
    });

    console.log(messages);
    setNewMessage("");
  };

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
        <input
          css={chattingInputStyle}
          placeholder="메시지를 입력해주세요"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button css={buttonStyle} onClick={sendMessage}>
          <SendButtonIcon />
        </button>
      </Flex>
    </Box>
  );
};

export default ChatRoomContent;
