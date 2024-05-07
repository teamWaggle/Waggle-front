import { css } from "@emotion/react";

import { Flex, Box, Theme } from "waggle-design-system";

import ChattingRoom from "@/components/Connection/Chatting/ChattingRoom/ChattingRoom";
import ChatRoomInfoBox from "@/components/Connection/Chatting/ChatRoomInfoBox/ChatRoomInfoBox";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

const ChattingRoomModal = ({ chatRoomId }: { chatRoomId: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  console.log(chatRoomData);

  return (
    <Box styles={{ width: "600px" }}>
      <ChatRoomInfoBox
        name={chatRoomData.result.name}
        description={chatRoomData.result.description}
        memberCount={chatRoomData.result.chatRoomMembers.memberCount}
        ownerId={chatRoomData.result.owner.memberId}
        isMember
      />

      <Flex css={contentBoxStyle}>
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
