import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { useOverlay, Text } from "waggle-design-system";

import Logo from "@/assets/svg/logo.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import { Flex } from "@/components/common";
import LogInMenu from "@/components/Header/LogInMenu/LogInMenu";
import LoginModal from "@/components/Login/LoginModal/LoginModal";
import FindEmailModal from "@/components/Login/FindEmailModal/FindEmailModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { PATH } from "@/constants/path";

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

  return (
    <header css={headerStyle}>
      <Flex css={headerBoxStyle}>
        <Logo onClick={() => navigate("/")} />

        <Flex styles={{ align: "center", gap: "100px" }}>
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
          <Suspense fallback={<div>로딩중</div>}>
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
        />
      )}

      {isFindEmailModalOpen && (
        <FindEmailModal
          isOpen={isFindEmailModalOpen}
          onClose={closeFindEmailModal}
          openLoginModal={openLoginModal}
        />
      )}
    </header>
  );
};

export default Header;
