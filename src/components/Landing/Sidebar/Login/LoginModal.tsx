import { useState } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";
import { Flex, Box, Text, Logo, SocialLogin } from "@/components/common";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
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

			<SocialLogin textSize="xSmall" locate="login" />
		</Flex>
	);
};

export default LoginModal;
