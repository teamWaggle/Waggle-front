import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Flex, Text } from "waggle-design-system";

import Logo from "@/assets/svg/logo.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import LogInMenu from "@/components/Header/LogInMenu/LogInMenu";
import LoginModal from "@/components/Login/LoginModal/LoginModal";
import LogInMenuSkeleton from "@/components/Header/LogInMenu/LogInMenuSkeleton";

import { PATH } from "@/constants/path";

import useModal from "@/hooks/common/useModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { headerStyle, headerBoxStyle, textStyle } from "@/components/Header/Header.style";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const navigate = useNavigate();

  const { openModal } = useModal();

  const handleLoginModal = () => {
    openModal({
      key: `LoginModal`,
      component: () => <LoginModal />,
    });
  };

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
          <Text size="xLarge" css={textStyle} onClick={() => navigate(PATH.CONNECTION)}>
            CONNECTION
          </Text>
          <Text size="xLarge" css={textStyle} onClick={() => navigate("/planning")}>
            PLANNING
          </Text>
        </Flex>

        {isLoggedIn ? (
          <Suspense fallback={<LogInMenuSkeleton />}>
            <LogInMenu />
          </Suspense>
        ) : (
          <NotiIcon width={30} height={30} onClick={handleLoginModal} />
        )}
      </Flex>
    </header>
  );
};

export default Header;
