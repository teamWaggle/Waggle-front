import { Fragment, useContext, useEffect, useState, useRef } from "react";

import { Client } from "@stomp/stompjs";

import { Flex, Box } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessage";
import ChattingMessageMine from "@/components/Connection/Chat/ChatRoomContent/ChatMessage/ChatMessageMine";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

import { useChatMessageListQuery } from "@/hooks/api/chat/useChatMessageListQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import useObserver from "@/hooks/common/useObserver";

import type { ChatMessageType } from "@/types/chat";

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

  const { chatMessageListData, fetchNextPage, hasNextPage, isFetching } =
    useChatMessageListQuery(chatRoomId);

  const observeRef = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const chatRef = useRef<HTMLDivElement>(null);

  const { userUrl } = useMemberInfoSaveQuery();

  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

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

    setNewMessage("");
  };

  // console.log(messages);

  useEffect(() => {
    const client = new Client({
      brokerURL: import.meta.env.VITE_SOCKET_URL,
      reconnectDelay: 10000,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      onConnect: () => {
        client.subscribe(
          `/subscribe/${chatRoomId}`,
          (message) => {
            const msg = JSON.parse(message.body);
            setMessages((prev) => [msg, ...prev]);
          },
          { Authorization: `Bearer ${accessToken}` }
        );
      },
      // debug: (str: string) => {
      //   console.log(str);
      // },
    });

    client.activate();

    setStompClient(client);

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, [chatRoomId]);

  useEffect(() => {
    !hasNextPage &&
      chatMessageListData.pages.forEach((value) => {
        setMessages((prev) => [...value.result.chatMessages, ...prev]);
      });
  }, [chatMessageListData]);

  return (
    <Box style={{ width: "100%" }}>
      <Flex
        styles={{ direction: "column", gap: "20px" }}
        css={chattingContentBoxStyle}
        ref={chatRef}
      >
        <div ref={observeRef} />
        {/* {chatMessageListData.pages.map((chatMessageData) => (
          <Fragment key={chatMessageData.result.nextPageParam}>
            {chatMessageData.result.chatMessages.map((chatMessageInfo) => (
              <Fragment key={chatMessageInfo.id}>
                {chatMessageInfo.senderUserUrl === userUrl ? (
                  <ChattingMessageMine chatMessageInfo={chatMessageInfo} />
                ) : (
                  <ChattingMessage chatMessageInfo={chatMessageInfo} />
                )}
              </Fragment>
            ))}
          </Fragment>
        ))} */}
        {messages.map((chatMessageInfo, index) => (
          <Fragment key={index}>
            {chatMessageInfo.senderUserUrl === userUrl ? (
              <ChattingMessageMine chatMessageInfo={chatMessageInfo} />
            ) : (
              <ChattingMessage chatMessageInfo={chatMessageInfo} />
            )}
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
        <button css={buttonStyle} onClick={sendMessage} disabled={newMessage === ""}>
          <SendButtonIcon />
        </button>
      </Flex>
    </Box>
  );
};

export default ChatRoomContent;
