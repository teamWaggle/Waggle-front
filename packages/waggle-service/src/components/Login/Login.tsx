import { useNavigate } from "react-router-dom";

import { Flex, Text, useOverlay, Theme } from "waggle-design-system";

import Logo from "@/assets/svg/logo-white.svg?react";

import LoginModal from "@/components/Login/LoginModal/LoginModal";
import FindEmailModal from "@/components/Login/FindEmailModal/FindEmailModal";
import FindPasswordModal from "@/components/Login/FinedPasswordModal/FindPasswordModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { loginBoxStyle, buttonStyle, subTextStyle } from "@/components/Login/Login.style";

const Login = () => {
  const navigate = useNavigate();

  const { isOpen: isLoginModalOpen, close: closeLoginModal, open: openLoginModal } = useOverlay();

  const {
    isOpen: isFindEmailModalOpen,
    close: closeFindEmailModal,
    open: openFindEmailModal,
  } = useOverlay();

  const {
    isOpen: isFindPasswordModalOpen,
    close: closeFindPasswordModal,
    open: openFindPasswordModal,
  } = useOverlay();

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
        onClick={openLoginModal}
      >
        <Logo />
        <Text css={getDefaultTextStyle(Theme.color.white, 600)}>로그인</Text>
      </Flex>
      <Text css={subTextStyle} onClick={() => navigate("/signup?tab=email")}>
        회원가입하기
      </Text>

      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          openFindEmailModal={openFindEmailModal}
          openFindPasswordModal={openFindPasswordModal}
        />
      )}

      {isFindEmailModalOpen && (
        <FindEmailModal
          isOpen={isFindEmailModalOpen}
          onClose={closeFindEmailModal}
          openLoginModal={openLoginModal}
        />
      )}

      {isFindPasswordModalOpen && (
        <FindPasswordModal
          isOpen={isFindPasswordModalOpen}
          onClose={closeFindPasswordModal}
          openLoginModal={openLoginModal}
        />
      )}
    </Flex>
  );
};

export default Login;
