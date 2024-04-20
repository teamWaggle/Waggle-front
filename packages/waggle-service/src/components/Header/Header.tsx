import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Logo from "@/assets/svg/logo.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import { Flex } from "@/components/common";
import { Text } from "waggle-design-system";
import LogInMenu from "@/components/Header/LogInMenu/LogInMenu";
import LoginModal from "@/components/Login/LoginModal/LoginModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { PATH } from "@/constants/path";

import useModal from "@/hooks/common/useModal";

import { headerStyle, headerBoxStyle, textStyle } from "@/components/Header/Header.style";
// import { Suspense } from "react";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const navigate = useNavigate();

  const modal = useModal();

  const handleLoginModal = () => {
    modal.openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

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
          <LogInMenu />
        ) : (
          <NotiIcon width={30} height={30} onClick={handleLoginModal} />
        )}
      </Flex>
    </header>
  );
};

export default Header;
