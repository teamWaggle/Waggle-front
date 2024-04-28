import { css } from "@emotion/react";

import { Flex, Box, Button } from "waggle-design-system";

import NewMessageList from "@/components/Connection/ConnectionMain/ConnectionSidebar/NewMessageList";
import ConnectionProfile from "@/components/Connection/ConnectionMain/ConnectionSidebar/ConnectionProfile";

const ConnectionSidebar = () => {
  return (
    <Flex styles={{ direction: "column", gap: "24px", marginTop: "32px" }}>
      <Box>
        <ConnectionProfile />
        <Button css={buttonStyle}>방 만들기</Button>
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
