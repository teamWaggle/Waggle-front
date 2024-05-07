import { css } from "@emotion/react";

import { Flex, Box, Theme } from "waggle-design-system";

import ChatRoomContent from "@/components/Connection/Chat/ChatRoomContent/ChatRoomContent";
import ChatRoomInfoBox from "@/components/Connection/Chat/ChatRoomInfoBox/ChatRoomInfoBox";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

const ChatRoomModal = ({ chatRoomId }: { chatRoomId?: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  console.log(chatRoomData);

  return (
    <Box styles={{ width: "600px" }}>
      <ChatRoomInfoBox
        name={chatRoomData.result.name}
        description={chatRoomData.result.description}
        memberCount={chatRoomData.result.chatRoomMembers.memberCount}
        ownerId={chatRoomData.result.owner.memberId}
        roomId={chatRoomData.result.id}
        isMember
      />

      <Flex css={contentBoxStyle}>
        <ChatRoomContent />
      </Flex>
    </Box>
  );
};

export default ChatRoomModal;

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});
