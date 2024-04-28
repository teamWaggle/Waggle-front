import { css } from "@emotion/react";

import { Flex, Box, Heading, Text, Modal, Theme, getDefaultTextStyle } from "waggle-design-system";

// import LockChatting from "@/components/Connection/Chatting/LockChatting";
import ChattingRoom from "@/components/Connection/Chatting/ChattingRoom";

import type { ModalProps } from "@/types/modal";

const ChattingRoomModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={onClose} isWhiteIcon>
      <Box styles={{ width: "600px" }}>
        <Box css={titleBoxStyle}>
          <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>말티즈 키우는 사람만</Heading>
          <Text css={getDefaultTextStyle(Theme.color.white, 500)}>
            말티즈에 대해서 이야기해요! 다른 강아지도 좋아하지만 말티즈가 더 좋아요
          </Text>
        </Box>

        <Flex css={contentBoxStyle}>
          {/* <LockChatting onClose={onClose} /> */}
          <ChattingRoom />
        </Flex>
      </Box>
    </Modal>
  );
};

export default ChattingRoomModal;

const titleBoxStyle = css({
  backgroundColor: Theme.color.brand_primary,
  padding: "40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
});
