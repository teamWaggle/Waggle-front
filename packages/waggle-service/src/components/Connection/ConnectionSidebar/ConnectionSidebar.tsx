import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

import { Flex, Box, Button } from "waggle-design-system";

import ChatRoomList from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomList";
import ConnectionProfile from "@/components/Connection/ConnectionSidebar/ConnectionProfile";
import ChatRoomCreateModal from "@/components/Connection/Chat/ChatRoomCreateModal/ChatRoomCreateModal";
import Login from "@/components/Login/Login";
import EmptyChatRoomList from "@/components/Connection/ConnectionSidebar/EmptyChatRoomList/EmptyChatRoomList";

import useModal from "@/hooks/common/useModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

const ConnectionSidebar = () => {
  const { openModal } = useModal();

  const isLoggedIn = useRecoilValue(isLoggedInState);

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
        {isLoggedIn ? <ConnectionProfile /> : <Login />}
        {isLoggedIn && (
          <Button css={buttonStyle} onClick={handleCreateRoom}>
            방 만들기
          </Button>
        )}
      </Box>
      {isLoggedIn ? <ChatRoomList /> : <EmptyChatRoomList />}
    </Flex>
  );
};

export default ConnectionSidebar;

const buttonStyle = css({
  width: "310px",
  marginTop: "15px",
});
