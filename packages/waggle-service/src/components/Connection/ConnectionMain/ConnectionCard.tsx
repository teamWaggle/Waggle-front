import { css } from "@emotion/react";

import { Flex, Text, Button, Theme, getDefaultTextStyle, useOverlay } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";
import ChattingRoomModal from "../Chatting/ChattingRoomModal";

const ConnectionCard = () => {
  const {
    isOpen: isChattingRoomModalOpen,
    close: closeChattingRoomModal,
    open: openChattingRoomModal,
  } = useOverlay();

  return (
    <Flex styles={{ direction: "column", gap: "8px" }} css={cardBoxStyle}>
      <Text css={getDefaultTextStyle(Theme.color.text, 700)}>말티즈 키우는 사람만</Text>
      <Text size="small" css={getDefaultTextStyle(Theme.color.input_text, 500)}>
        말티즈에 대해서 이야기해요! 다른 강아지도 좋아하지만 말티즈가 더 좋아요
      </Text>
      <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
        <Flex styles={{ gap: "12px" }}>
          <PersonIcon />
          <Text size="small" css={getDefaultTextStyle("#9a9a9a", 600)}>
            3/7
          </Text>
        </Flex>
        <Button
          style={{ padding: "6px 10px", borderRadius: "13px" }}
          onClick={openChattingRoomModal}
        >
          입장
        </Button>
      </Flex>

      {isChattingRoomModalOpen && (
        <ChattingRoomModal isOpen={isChattingRoomModalOpen} onClose={closeChattingRoomModal} />
      )}
    </Flex>
  );
};

export default ConnectionCard;

const cardBoxStyle = css({
  border: `1px solid ${Theme.color.brand_primary}`,
  borderRadius: "20px",
  padding: "20px 18px",
  width: "255px",
});
