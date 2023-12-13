import {
	buttonStyle,
	layoutStyle,
	titleStyle,
	textStyle,
	subStyle,
} from "./Login.style";

import Logo from "@assets/svg/logo-white.svg?react";

import Flex from "@components/common/Flex/Flex";

const Login = () => {
	return (
		<Flex
			styles={{
				align: "center",
				justify: "center",
				direction: "column",
				gap: "18px",
			}}
			css={layoutStyle}
		>
			<h3 css={titleStyle}>와글과 함께 꼬리를 흔들어 보세요!</h3>
			<button css={buttonStyle}>
				<Logo />
				<p css={textStyle}>로그인</p>
			</button>
			<h4 css={subStyle}>회원가입하기</h4>
		</Flex>
	);
};

export default Login;