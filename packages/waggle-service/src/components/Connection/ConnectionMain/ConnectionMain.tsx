import { css } from "@emotion/react";

import { Flex, Box, Divider } from "waggle-design-system";

import ConnectionSearchbar from "@/components/Connection/ConnectionMain/ConnectionSearchbar";
import ConnectionCard from "@/components/Connection/ConnectionMain/ConnectionCard";
import ConnectionSidebar from "@/components/Connection/ConnectionSidebar/ConnectionSidebar";

import { useChatRoomListQuery } from "@/hooks/api/chat/useChatRoomListQuery";

const ConnectionMain = () => {
  const { chatRoomListData } = useChatRoomListQuery(0);

  console.log(chatRoomListData);

  return (
    <Box tag="main" css={mainBoxStyle}>
      <Flex styles={{ gap: "24px" }}>
        <Flex styles={{ direction: "column", gap: "50px", marginTop: "32px" }}>
          <ConnectionSearchbar />

          <Box tag="ol" css={gridBoxStyle}>
            {chatRoomListData.result.chatRooms.map((chatRoomInfo) => (
              <ConnectionCard key={chatRoomInfo.id} chatRoomInfo={chatRoomInfo} />
            ))}
          </Box>
        </Flex>

        <Divider direction="vertical" length="100vh" />

        <ConnectionSidebar />
      </Flex>
    </Box>
  );
};

export default ConnectionMain;

const mainBoxStyle = css({
  maxWidth: "1536px",
  margin: "0 auto",
  padding: "0 196px",
});

const gridBoxStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
});
