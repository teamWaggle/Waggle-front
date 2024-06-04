import { css } from "@emotion/react";

import { Flex, Text, Theme } from "waggle-design-system";

import ChatRoomItemTitle from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomItemTitle";

const EmptyChatRoomList = () => {
  return (
    <Flex styles={{ direction: "column", gap: "24px" }}>
      <ChatRoomItemTitle disabled />
      <Flex
        styles={{ direction: "column", justify: "center", align: "center" }}
        css={emptyBoxStyle}
      >
        <Text>새로운 메시지가 없습니다.</Text>
        <Text>채팅을 시작해보세요!</Text>
      </Flex>
    </Flex>
  );
};

export default EmptyChatRoomList;

const emptyBoxStyle = css({
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "10px",
  width: "310px",
  height: "115px",

  "& > p": {
    color: Theme.color.text,
    fontWeight: 500,
  },
});
