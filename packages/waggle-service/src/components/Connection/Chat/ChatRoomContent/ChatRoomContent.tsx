import { Fragment, useContext, useEffect, useState } from "react";

import { Client } from "@stomp/stompjs";

import { Flex, Box } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessage";
import ChattingMessageMine from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessageMine";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

import { useChatMessageListQuery } from "@/hooks/api/chat/useChatMessageListQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

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
  senderUserUrl: string;
  content: string;
}

const ChatRoomContent = () => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { chatRoomId } = context;

  const { chatMessageListData } = useChatMessageListQuery(chatRoomId);

  const { userUrl, memberId } = useMemberInfoSaveQuery();

  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  useEffect(() => {
    const client = new Client({
      brokerURL: import.meta.env.VITE_SOCKET_URL,
      reconnectDelay: 10000,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      // debug: (str: string) => {
      //   console.log(str);
      // },
    });

    setStompClient(client);

    client.activate();

    client.onConnect = () => {
      console.log("socket connect");

      client.subscribe(
        `/subscribe/${chatRoomId}`,
        (message) => {
          console.log(JSON.parse(message.body));
          console.log("연결");
        },
        { Authorization: `Bearer ${accessToken}` }
      );
    };

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, []);

  // const recvMessage = () => {

  // }

  const sendMessage = () => {
    if (!stompClient) return;

    const chatMessage: ChatMessageRequest = {
      chatMessageType: "TALK",
      chatRoomId,
      senderUserUrl: userUrl,
      content: newMessage,
    };

    stompClient.publish({
      destination: "/publish/message",
      body: JSON.stringify(chatMessage),
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log(chatMessage);

    setNewMessage("");
  };

  return (
    <Box style={{ width: "100%" }}>
      <Flex styles={{ direction: "column", gap: "20px" }} css={chattingContentBoxStyle}>
        {chatMessageListData.pages.map((chatMessageData) => (
          <Fragment key={chatMessageData.result.nextPageParam}>
            {chatMessageData.result.chatMessages.map((chatMessageInfo) => (
              <>
                {chatMessageInfo.sender.memberId === memberId ? (
                  <ChattingMessageMine key={chatMessageInfo.id} chatMessageInfo={chatMessageInfo} />
                ) : (
                  <ChattingMessage key={chatMessageInfo.id} chatMessageInfo={chatMessageInfo} />
                )}
              </>
            ))}
          </Fragment>
        ))}
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
