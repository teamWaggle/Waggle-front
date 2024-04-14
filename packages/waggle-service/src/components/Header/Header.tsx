import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Logo from "@/assets/svg/logo.svg?react";

import { Flex, Box, Text } from "@/components/common";
import LogInMenu from "@/components/Header/LogInMenu/LogInMenu";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { PATH } from "@/constants/path";

import { headerStyle, logoStyle, textStyle } from "@/components/Header/Header.style";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const navigate = useNavigate();

  return (
    <header css={headerStyle}>
      <Box styles={{ width: "1536px", margin: "0 auto" }}>
        <Flex
          styles={{
            justify: "space-between",
            align: "center",
            padding: "0 196px",
            height: "85px",
          }}
        >
          <Logo css={logoStyle} onClick={() => navigate("/")} />
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

            {isLoggedIn ? <LogInMenu /> : <div>로그인</div>}
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
