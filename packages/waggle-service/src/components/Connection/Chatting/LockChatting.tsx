import { Flex, Text, Button, Theme, getDefaultTextStyle } from "waggle-design-system";

import LockIcon from "@/assets/svg/ic-lock.svg?react";

interface LockChattingProps {
  onClose: () => void;
}

const LockChatting = ({ onClose }: LockChattingProps) => {
  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        justify: "center",
        gap: "48px",
        width: "100%",
        height: "100%",
      }}
    >
      <Flex styles={{ direction: "column", align: "center", gap: "10px" }}>
        <LockIcon />
        <Text size="large" css={getDefaultTextStyle(Theme.color.readonly_text, 600)}>
          채팅방의 멤버만 채팅을 볼 수 있어요!
        </Text>
      </Flex>
      <Flex styles={{ direction: "column", gap: "12px" }}>
        <Button size="xLarge">입장하기</Button>
        <Button size="xLarge" variant="disabled" onClick={onClose}>
          다른 채팅방 보기
        </Button>
      </Flex>
    </Flex>
  );
};

export default LockChatting;
