import { Box, Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import LoginModal from "@/components/Login/LoginModal/LoginModal";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { resultBoxStyle } from "@/components/Login/FindEmailModal/FindEmailModal.style";

const ResultEmail = ({ email }: { email: string[] }) => {
  const modal = useModal();

  const handleLoginClick = () => {
    modal.closeModal();

    modal.openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "153px", marginTop: "35px" }}>
      <Box css={resultBoxStyle}>
        <Text css={getDefaultTextStyle(Theme.color.text, 600)}>{email}</Text>
      </Box>
      <Button size="large" onClick={handleLoginClick}>
        로그인
      </Button>
    </Flex>
  );
};

export default ResultEmail;
