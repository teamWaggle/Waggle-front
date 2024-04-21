import { Flex, Box, Text, Theme, Button } from "waggle-design-system";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { resultBoxStyle } from "@/components/Login/FindEmailModal/FindEmailModal.style";

interface ResultEmailProps {
  email: string[];
  openLoginModal: () => void;
  onClose: () => void;
}

const ResultEmail = ({ email, openLoginModal, onClose }: ResultEmailProps) => {
  return (
    <Flex styles={{ direction: "column", gap: "153px", marginTop: "35px" }}>
      <Box css={resultBoxStyle}>
        <Text css={getDefaultTextStyle(Theme.color.text, 600)}>{email}</Text>
      </Box>
      <Button
        size="large"
        onClick={() => {
          onClose();
          openLoginModal();
        }}
      >
        로그인
      </Button>
    </Flex>
  );
};

export default ResultEmail;
