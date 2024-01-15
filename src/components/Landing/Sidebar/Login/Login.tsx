// import { useEffect } from "react";

// import { useSetRecoilState } from "recoil";

// import { useState } from "react";

import Logo from "@/assets/svg/logo-white.svg?react";
import { Flex, Text } from "@/components/common";
// import { useLogInMutation } from "@/hooks/api/useLogInMutation";
// import { isLoggedInState } from "@/store/auth";
import LoginModal from "@/components/Landing/Sidebar/Login/LoginModal";
import useModal from "@/hooks/useModal";
import { Theme } from "@/styles/Theme";

import {
	titleStyle,
	buttonStyle,
	textStyle,
	subTextStyle,
} from "@/components/Landing/Sidebar/Login/Login.style";

const Login = () => {
	// const { mutateLogIn } = useLogInMutation();

	// const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	// const username = "admin";
	// const password = "admin1234!";

	// useEffect(() => {
	// 	if (localStorage.getItem("ACCESS_TOKEN")) {
	// 		setIsLoggedIn(true);
	// 	}
	// }, [setIsLoggedIn]);

	// const [isLogin, setIsLogin] = useState(false);

	const modal = useModal();

	const open = () => {
		modal.openModal({
			key: `LoginModal`,
			component: () => <LoginModal />,
		});
	};

	return (
		<Flex
			styles={{
				align: "center",
				justify: "center",
				direction: "column",
				gap: "16px",
				borderRadius: "14px",
				border: `1px solid ${Theme.color.brand_primary}`,
				padding: "30px 22px",
				boxShadow: Theme.boxShadow.shadow2,
			}}
		>
			<Text css={titleStyle}>Waggle과 함께 꼬리를 흔들어요!</Text>
			<Flex
				styles={{ justify: "center", align: "center", gap: "14px" }}
				tag="button"
				css={buttonStyle}
				onClick={open}
			>
				<Logo />
				<Text css={textStyle}>로그인</Text>
			</Flex>
			<Text css={subTextStyle}>회원가입하기</Text>
		</Flex>
	);
};

export default Login;
