import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Flex, Spinner, Text, useOverlay } from "waggle-design-system";

import Logo from "@/assets/svg/logo.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import LogInMenu from "@/components/Header/LogInMenu/LogInMenu";
import LoginModal from "@/components/Login/LoginModal/LoginModal";
import FindEmailModal from "@/components/Login/FindEmailModal/FindEmailModal";
import FindPasswordModal from "@/components/Login/FinedPasswordModal/FindPasswordModal";

import { PATH } from "@/constants/path";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { headerStyle, headerBoxStyle, textStyle } from "@/components/Header/Header.style";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

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
    <header css={headerStyle}>
      <Flex
        styles={{ justify: "space-between", align: "center", margin: "0 auto" }}
        css={headerBoxStyle}
      >
        <Logo onClick={() => navigate("/")} />

        <Flex styles={{ align: "center", gap: "80px" }}>
          <Text size="xLarge" css={textStyle} onClick={() => navigate(PATH.SIREN)}>
            SIREN
          </Text>
          <Text size="xLarge" css={textStyle} onClick={() => navigate(PATH.QUESTION)}>
            Q&A
          </Text>
          <Text size="xLarge" css={textStyle} onClick={() => navigate("/connection")}>
            CONNECTION
          </Text>
          <Text size="xLarge" css={textStyle} onClick={() => navigate("/planning")}>
            PLANNING
          </Text>
        </Flex>

        {isLoggedIn ? (
          <Suspense fallback={<Spinner size={30} width={3} />}>
            <LogInMenu />
          </Suspense>
        ) : (
          <NotiIcon width={30} height={30} onClick={openLoginModal} />
        )}
      </Flex>

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
    </header>
  );
};

export default Header;
