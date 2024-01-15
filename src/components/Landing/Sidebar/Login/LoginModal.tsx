import { useState } from "react";

import GoogleIcon from "@/assets/svg/GoogleIcon.svg?react";
import KaKaoIcon from "@/assets/svg/KaKaoIcon.svg?react";
import NaverIcon from "@/assets/svg/NaverIcon.svg?react";
import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";
import { Flex, Box, Text, Logo } from "@/components/common";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
	textStyle,
} from "@/components/Landing/Sidebar/Login/LoginModal.style";

const LoginModal = () => {
	const [passwordShow, setPasswordShow] = useState(false);

	return (
		<Flex
			styles={{
				direction: "column",
				align: "center",
				padding: "70px 40px 0",
				position: "relative",
				width: "390px",
				height: "490px",
			}}
			css={layoutStyle}
		>
			<Logo width={138} height={30} />
			<Flex styles={{ direction: "column", gap: "13px", margin: "36px 0 24px" }}>
				<input css={inputStyle} placeholder="이메일(아이디)" />
				<Box styles={{ position: "relative" }}>
					<input css={inputStyle} placeholder="비밀번호" />
					{passwordShow ? (
						<PasswordShowIcon
							css={passwordIconStyle}
							onClick={() => setPasswordShow(!passwordShow)}
						/>
					) : (
						<PasswordNotShowIcon
							css={passwordIconStyle}
							onClick={() => setPasswordShow(!passwordShow)}
						/>
					)}
				</Box>
				<Box tag="button" css={buttonStyle}>
					<Text>로그인</Text>
				</Box>
			</Flex>

			<Flex styles={{ gap: "24px" }}>
				<Text size="xSmall" css={findTextStyle}>
					아이디(이메일) 찾기
				</Text>
				<Text size="xSmall" css={findTextStyle}>
					비밀번호 찾기
				</Text>
				<Text size="xSmall" css={findTextStyle}>
					회원가입
				</Text>
			</Flex>

			<Flex styles={{ direction: "column", align: "center", marginTop: "24px" }}>
				<Text size="xSmall" css={textStyle}>
					간편 로그인
				</Text>
				<Flex styles={{ gap: "20px", marginTop: "16px" }}>
					<NaverIcon />
					<KaKaoIcon />
					<GoogleIcon />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default LoginModal;
