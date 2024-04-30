import { useNavigate } from "react-router-dom";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import Logo from "@/assets/svg/logo-white.svg?react";

import LoginModal from "@/components/Login/LoginModal/LoginModal";

import useModal from "@/hooks/common/useModal";

import { loginBoxStyle, buttonStyle, subTextStyle } from "@/components/Login/Login.style";

const Login = () => {
  const navigate = useNavigate();

  const { openModal } = useModal();

  const handleLoginModal = () => {
    openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

  return (
    <Flex
      styles={{ direction: "column", align: "center", justify: "center", gap: "16px" }}
      css={loginBoxStyle}
    >
      <Text css={getDefaultTextStyle(Theme.color.text, 600)}>Waggle과 함께 꼬리를 흔들어요!</Text>
      <Flex
        tag="button"
        styles={{ justify: "center", align: "center", gap: "14px" }}
        css={buttonStyle}
        onClick={handleLoginModal}
      >
        <Logo />
        <Text css={getDefaultTextStyle(Theme.color.white, 600)}>로그인</Text>
      </Flex>
      <Text css={subTextStyle} onClick={() => navigate("/signup?tab=email")}>
        회원가입하기
      </Text>
    </Flex>
  );
};

export default Login;
