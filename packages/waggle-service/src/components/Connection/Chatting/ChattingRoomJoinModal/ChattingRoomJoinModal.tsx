import { css } from "@emotion/react";

import { Flex, Box, Text, Button, Theme, getDefaultTextStyle } from "waggle-design-system";

import ChattingRoomInfoBox from "@/components/Connection/Chatting/ChattingRoomInfoBox/ChattingRoomInfoBox";

import { useChatRoomQuery } from "@/hooks/api/chat/useChatRoomQuery";

const ChattingRoomJoinModal = ({ chatRoomId }: { chatRoomId: number }) => {
  const { chatRoomData } = useChatRoomQuery(chatRoomId);

  return (
    <Box styles={{ width: "600px" }}>
      <ChattingRoomInfoBox
        name={chatRoomData.result.name}
        description={chatRoomData.result.description}
      />
      <Flex
        styles={{
          direction: "column",
          align: "center",
          justify: "center",
          gap: "48px",
        }}
        css={contentBoxStyle}
      >
        <Flex styles={{ direction: "column", align: "center", gap: "10px" }}>
          <Text size="xLarge" css={getDefaultTextStyle(Theme.color.readonly_text, 600)}>
            비밀번호를 입력해주세요
          </Text>
          <input placeholder="비밀번호를 입력해주세요" css={titleInputStyle(true)} />
        </Flex>

        <Flex styles={{ direction: "column", gap: "12px" }}>
          <Button size="xLarge">입장하기</Button>
          <Button size="xLarge" variant="disabled">
            다른 채팅방 보기
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChattingRoomJoinModal;

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
  width: "100%",
});

export const titleInputStyle = (isPassword?: boolean) =>
  css({
    width: isPassword ? "240px" : "100%",
    height: "62px",
    border: `1px solid ${Theme.color.border}`,
    borderRadius: "16px",
    outline: "none",
    padding: "18px 24px",
    marginTop: "14px",
    fontSize: "18px",
    color: Theme.color.text,
    resize: "none",

    "&::placeholder": {
      color: Theme.color.border,
      fontFamily: "Pretendard",
    },
  });
