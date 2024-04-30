import { Flex, Text } from "waggle-design-system";

import GoogleIcon from "@/assets/svg/GoogleIcon.svg?react";
import KaKaoIcon from "@/assets/svg/KaKaoIcon.svg?react";
import NaverIcon from "@/assets/svg/NaverIcon.svg?react";

import { GOOGLE_AUTH_API_URL, KAKAO_AUTH_API_URL, NAVER_AUTH_API_URL } from "@/constants/api";

import { socialButtonStyle, getTextStyle } from "@/components/common/SocialLogin/SocialLogin.style";

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
        marginTop: locate === "login" ? "24px" : "0px",
      }}
    >
      <Text size={textSize} css={getTextStyle(locate)}>
        간편 로그인
      </Text>
      <Flex
        styles={{ gap: "20px", marginTop: locate === "login" ? "16px" : "30px" }}
        css={socialButtonStyle}
      >
        <NaverIcon onClick={() => window.location.assign(NAVER_AUTH_API_URL)} />
        <KaKaoIcon onClick={() => window.location.assign(KAKAO_AUTH_API_URL)} />
        <GoogleIcon onClick={() => window.location.assign(GOOGLE_AUTH_API_URL)} />
      </Flex>
    </Flex>
  );
};

export default SocialLogin;
