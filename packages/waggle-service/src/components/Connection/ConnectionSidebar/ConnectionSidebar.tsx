import { css } from "@emotion/react";

import { Flex, Box, Button } from "waggle-design-system";

import ChatRoomList from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomList";
import ConnectionProfile from "@/components/Connection/ConnectionSidebar/ConnectionProfile";
import ChatRoomCreateModal from "@/components/Connection/Chat/ChatRoomCreateModal/ChatRoomCreateModal";

import useModal from "@/hooks/common/useModal";

const ConnectionSidebar = () => {
  const { openModal } = useModal();

  const handleCreateRoom = () => {
    openModal({
      key: "CreateRoomModal",
      component: () => <ChatRoomCreateModal />,
      isWhiteIcon: true,
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "24px", marginTop: "32px" }}>
      <Box>
        <ConnectionProfile />
        <Button css={buttonStyle} onClick={handleCreateRoom}>
          방 만들기
        </Button>
      </Box>
      <ChatRoomList />
    </Flex>
  );
};

export default ConnectionSidebar;

const buttonStyle = css({
  width: "295px",
  marginTop: "15px",
});
