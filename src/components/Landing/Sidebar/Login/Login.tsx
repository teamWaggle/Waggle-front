import { LayoutDiv } from "./Login.style";

import Logo from "@assets/svg/logo.svg?react";

const Login = () => {
	return (
		<LayoutDiv>
			<h3>와글과 함께 꼬리를 흔들어 보세요!</h3>
			<button>
				<Logo />
				<p>로그인</p>
			</button>
			<h4>회원가입하기</h4>
		</LayoutDiv>
	);
};

export default Login;
