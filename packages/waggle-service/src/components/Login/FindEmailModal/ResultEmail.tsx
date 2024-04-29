import { Flex, Box, Text, Theme, Button, getDefaultTextStyle } from "waggle-design-system";

import LoginModal from "@/components/Login/LoginModal/LoginModal";

import { resultBoxStyle } from "@/components/Login/FindEmailModal/FindEmailModal.style";

import useModal from "@/hooks/common/useModal";

interface ResultEmailProps {
  email: string[];
}

const ResultEmail = ({ email }: ResultEmailProps) => {
  const { openModal } = useModal();

  const handleLoginModal = () => {
    openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "153px", marginTop: "35px" }}>
      <Box css={resultBoxStyle}>
        <Text css={getDefaultTextStyle(Theme.color.text, 600)}>{email}</Text>
      </Box>
      <Button size="large" onClick={handleLoginModal}>
        로그인
      </Button>
    </Flex>
  );
};

export default ResultEmail;
