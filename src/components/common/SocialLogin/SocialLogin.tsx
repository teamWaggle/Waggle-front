import GoogleIcon from "@/assets/svg/GoogleIcon.svg?react";
import KaKaoIcon from "@/assets/svg/KaKaoIcon.svg?react";
import NaverIcon from "@/assets/svg/NaverIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { GOOGLE_AUTH_API_URL, KAKAO_AUTH_API_URL } from "@/constants/api";

import {
	layoutStyle,
	socialButtonStyle,
	getTextStyle,
} from "@/components/common/SocialLogin/SocialLogin.style";

interface SocialLoginType {
	textSize: "small" | "xSmall";
	locate: string;
}

const SocialLogin = ({ textSize, locate }: SocialLoginType) => {
	return (
		<Flex css={layoutStyle(locate)}>
			<Text size={textSize} css={getTextStyle(locate)}>
				간편 로그인
			</Text>
			<Flex css={socialButtonStyle(locate)}>
				<NaverIcon />
				<KaKaoIcon onClick={() => window.location.assign(KAKAO_AUTH_API_URL)} />
				<GoogleIcon onClick={() => window.location.assign(GOOGLE_AUTH_API_URL)} />
			</Flex>
		</Flex>
	);
};

export default SocialLogin;
