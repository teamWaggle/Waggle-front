import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import SampleImg from "@/assets/png/post-sample.png";

import { circleTextBoxStyle } from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomList";

const ChatRoomItem = () => {
  return (
    <Flex styles={{ align: "center", gap: "10px" }} css={cardBoxStyle}>
      <img src={SampleImg} alt="profileImg" />
      <Box>
        <Flex styles={{ gap: "8px", align: "center" }}>
          <Text size="small" css={getDefaultTextStyle(Theme.color.text, 600)}>
            채팅방 제목
          </Text>
          <span css={circleTextBoxStyle}>5</span>
        </Flex>

        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 400)}>
          어제 새로운 카페를 발견했다.. 바로가자
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatRoomItem;

const cardBoxStyle = css({
  width: "295px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "45px",
  padding: "12px 14px",

  "& > img": {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  },
});
