import { useNavigate } from "react-router-dom";

import Logo from "@/assets/svg/logo-white.svg?react";

import { Flex, Text } from "@/components/common";
import LoginModal from "@/components/Login/LoginModal/LoginModal";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { loginBoxStyle, buttonStyle, subTextStyle } from "@/components/Login/Login.style";

const Login = () => {
  const navigate = useNavigate();

  const modal = useModal();

  const handleLoginModal = () => {
    modal.openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

  return (
    <Flex css={loginBoxStyle}>
      <Text css={getDefaultTextStyle(Theme.color.text, 600)}>Waggle과 함께 꼬리를 흔들어요!</Text>
      <Flex tag="button" css={buttonStyle} onClick={handleLoginModal}>
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
