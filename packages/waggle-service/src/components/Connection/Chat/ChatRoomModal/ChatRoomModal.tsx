import { css } from "@emotion/react";
import { createContext, useMemo } from "react";

import { Flex, Box, Theme } from "waggle-design-system";

import ChatRoomContent from "@/components/Connection/Chat/ChatRoomContent/ChatRoomContent";
import ChatRoomInfoBox from "@/components/Connection/Chat/ChatRoomInfoBox/ChatRoomInfoBox";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

export const ChatRoomContext = createContext<{
  name: string;
  description: string;
  memberCount: number;
  ownerId: number;
  chatRoomId?: number;
} | null>(null);

const ChatRoomModal = ({ chatRoomId }: { chatRoomId?: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  const { name, description } = chatRoomData.result;
  const { memberCount } = chatRoomData.result.chatRoomMembers;
  const { memberId } = chatRoomData.result.owner;

  const context = useMemo(
    () => ({
      name,
      description,
      memberCount,
      ownerId: memberId,
      chatRoomId,
    }),
    [name, description, memberCount, memberId, chatRoomId]
  );

  return (
    <ChatRoomContext.Provider value={context}>
      <Box styles={{ width: "600px" }}>
        <ChatRoomInfoBox isMember />

        <Flex css={contentBoxStyle}>
          <ChatRoomContent />
        </Flex>
      </Box>
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomModal;

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});
