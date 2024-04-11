import { css } from "@emotion/react";

import GoogleIcon from "@/assets/svg/GoogleIcon.svg?react";
import KaKaoIcon from "@/assets/svg/KaKaoIcon.svg?react";
import NaverIcon from "@/assets/svg/NaverIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { Theme } from "@/styles/Theme";

interface SocialLoginType {
  textSize: "small" | "xSmall";
  locate: string;
}

const SocialLogin = ({ textSize, locate }: SocialLoginType) => {
  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        marginTop: locate === "login" ? "24px" : "0",
      }}
    >
      <Text size={textSize} css={getTextStyle(locate)}>
        간편 로그인
      </Text>
      <Flex styles={{ gap: "20px", marginTop: locate === "login" ? "16px" : "30px" }}>
        <NaverIcon />
        <KaKaoIcon />
        <GoogleIcon />
      </Flex>
    </Flex>
  );
};

export default SocialLogin;

export const getTextStyle = (locate: string) => {
  return css({
    color: Theme.color.border,
    fontWeight: 500,
    position: "relative",

    "&:before, &:after": {
      position: "absolute",
      top: "9px",
      left: locate === "login" ? "-126px" : "-164px",
      content: "''",
      width: locate === "login" ? "116px" : "154px",
      height: "1px",
      backgroundColor: Theme.color.border,
    },

    "&:after": {
      left: "auto",
      right: locate === "login" ? "-126px" : "-164px",
    },
  });
};
