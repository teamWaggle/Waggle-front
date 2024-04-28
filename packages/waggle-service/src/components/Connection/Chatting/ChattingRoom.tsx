import { css } from "@emotion/react";

import { Flex, Theme } from "waggle-design-system";

import SendButtonIcon from "@/assets/svg/ic-message-send.svg?react";

import ChattingMessage from "@/components/Connection/Chatting/ChattingMessage";

const ChattingRoom = () => {
  return (
    <Flex
      styles={{ direction: "column", gap: "20px", position: "relative" }}
      css={chattingContentBoxStyle}
    >
      <ChattingMessage />
      <ChattingMessage />
      <ChattingMessage />
      <ChattingMessage />
      <ChattingMessage />
      <ChattingMessage />
      <Flex styles={{ gap: "14px", position: "fixed" }} css={inputBoxStyle}>
        <input css={chattingInputStyle} placeholder="메시지를 입력해주세요" />
        <button css={buttonStyle}>
          <SendButtonIcon />
        </button>
      </Flex>
    </Flex>
  );
};

export default ChattingRoom;

const chattingContentBoxStyle = css({
  padding: "60px 40px 100px",
  overflow: "auto",
  height: "600px",
});

const inputBoxStyle = css({
  bottom: 0,
  left: 0,
  width: "100%",
  height: "70px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});

const chattingInputStyle = css({
  width: "calc(100% - 124px)",
  height: "50px",
  borderRadius: "16px",
  border: `1px solid ${Theme.color.border}`,
  marginLeft: "40px",
  padding: "19px 24px",
  fontSize: Theme.text.large.fontSize,
  lineHeight: Theme.text.large.lineHeight,
  color: Theme.color.text,
  outline: "none",

  "&::placeholder": {
    color: Theme.color.border,
  },
});

const buttonStyle = css({
  width: "50px",
  height: "50px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  outline: "none",
  backgroundColor: Theme.color.brand_primary,
  cursor: "pointer",
});
