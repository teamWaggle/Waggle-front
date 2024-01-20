import { FormEvent, useState, useRef } from "react";
import { toast } from "react-toastify";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";
import { Flex, Box, Text, Logo, SocialLogin } from "@/components/common";
import { useLogInMutation } from "@/hooks/api/useLogInMutation";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
} from "@/components/Landing/Sidebar/Login/LoginModal.style";

interface LoginModalType {
	modalClose: () => void;
}

const LoginModal = ({ modalClose }: LoginModalType) => {
	const { mutateLogIn } = useLogInMutation();

	const passwordRef = useRef<HTMLInputElement>(null);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [passwordShow, setPasswordShow] = useState(false);

	const validateForm = () => {
		if (!username.trim() || !password.trim()) {
			toast.error("이메일과 비밀번호는 반드시 입력되어야 합니다.");

			return false;
		}

		return true;
	};

	const handleShowPassword = async () => {
		const password = await passwordRef.current;

		if (password === null) {
			return;
		}

		await setPasswordShow(!passwordShow);

		if (!passwordShow) {
			password.type = "text";
		} else {
			password.type = "password";
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		mutateLogIn({ username, password });
		modalClose();
	};

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
			<Box styles={{ margin: "36px 0 24px" }}>
				<form onSubmit={handleSubmit}>
					<input
						css={inputStyle}
						placeholder="이메일(아이디)"
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<Box styles={{ position: "relative", marginTop: "13px" }}>
						<input
							css={inputStyle}
							placeholder="비밀번호"
							type="text"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							ref={passwordRef}
						/>
						{passwordShow ? (
							<PasswordShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
						) : (
							<PasswordNotShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
						)}
					</Box>
					<button type="submit" css={buttonStyle}>
						로그인
					</button>
				</form>
			</Box>

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
