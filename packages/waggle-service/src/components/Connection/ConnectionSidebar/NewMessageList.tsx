import { css } from "@emotion/react";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import MessageCard from "@/components/Connection/ConnectionSidebar/MessageCard";

const NewMessageList = () => {
  return (
    <Flex styles={{ direction: "column", gap: "12px" }}>
      <Flex styles={{ gap: "6px", align: "center" }}>
        <span css={circleTextBoxStyle}>N</span>
        <Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
          새로운 메시지
        </Text>
      </Flex>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </Flex>
  );
};

export default NewMessageList;

export const circleTextBoxStyle = css({
  width: "17px",
  height: "17px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: Theme.color.btn_danger,
  fontSize: "10px",
  color: Theme.color.white,
  fontWeight: 600,
});
