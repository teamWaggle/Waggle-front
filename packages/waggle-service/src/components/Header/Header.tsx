import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";

import Logo from "@/assets/svg/logo.svg?react";

import { Flex, Box, Text } from "@/components/common";

import LogInMenu from "./LogInMenu/LogInMenu";

import { PATH } from "@/constants/path";

import { memberIdState } from "@/recoil/atoms/auth";

import { headerStyle, logoStyle, textStyle } from "@/components/Header/Header.style";

const Header = () => {
  const navigate = useNavigate();

  const [memberId] = useRecoilState(memberIdState);

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

            {memberId !== 0 && (
              <Suspense fallback={<div>로딩중</div>}>
                <LogInMenu memberId={memberId} />
              </Suspense>
            )}
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
