import { css } from "@emotion/react";

import { Flex, Box, Button } from "waggle-design-system";

import NewMessageList from "@/components/Connection/ConnectionSidebar/NewMessageList";
import ConnectionProfile from "@/components/Connection/ConnectionSidebar/ConnectionProfile";
import CreateRoomModal from "@/components/Connection/ConnectionSidebar/CreateRoomModal/CreateRoomModal";

import useModal from "@/hooks/common/useModal";

const ConnectionSidebar = () => {
  const { openModal } = useModal();

  const handleCreateRoom = () => {
    openModal({
      key: "CreateRoomModal",
      component: () => <CreateRoomModal />,
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
      <NewMessageList />
    </Flex>
  );
};

export default ConnectionSidebar;

const buttonStyle = css({
  width: "295px",
  marginTop: "15px",
});
