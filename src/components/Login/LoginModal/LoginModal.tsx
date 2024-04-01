import { useState, useRef } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Box, Text, Logo, SocialLogin } from "@/components/common";
import FindEmailModal from "@/components/Login/FindEmailModal";
import FindPasswordModal from "@/components/Login/FindPasswordModal";

import { useLogInMutation } from "@/hooks/api/auth/useLogInMutation";
import useModal from "@/hooks/useModal";
import { useValidateForm } from "@/hooks/useValidateForm";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
} from "@/components/Login/LoginModal/LoginModal.style";

const LoginModal = () => {
	const { mutate: logInMutate } = useLogInMutation();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [passwordType, setPasswordType] = useState("password");

	const modal = useModal();

	const validateForm = () => {
		if (
			useValidateForm(email, emailRef, "이메일을 입력해주세요.") === false ||
			useValidateForm(password, passwordRef, "비밀번호를 입력해주세요.") === false
		) {
			return false;
		}

		return true;
	};

	const handleShowPassword = () => {
		setPasswordType(passwordType === "password" ? "text" : "password");
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		logInMutate(
			{ email, password },
			{
				onSuccess: ({ result }) => {
					console.log(result);

					modal.closeModal();
				},
			},
		);
	};

	const handleFindEmailModal = () => {
		modal.openModal({
			key: `FindEmailModal`,
			component: () => <FindEmailModal />,
		});
	};

	const handleFindPasswordModal = () => {
		modal.closeModal();

		modal.openModal({
			key: `FindPasswordModal`,
			component: () => <FindPasswordModal />,
		});
	};

	return (
		<Flex css={layoutStyle}>
			<Logo width={138} height={30} />
			<Box styles={{ margin: "36px 0 24px" }}>
				<form onSubmit={handleSubmit}>
					<input
						css={inputStyle}
						placeholder="이메일(아이디)"
						type="text"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						ref={emailRef}
					/>
					<Box styles={{ position: "relative", marginTop: "13px" }}>
						<input
							css={inputStyle}
							placeholder="비밀번호"
							type={passwordType}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							ref={passwordRef}
							maxLength={20}
						/>
						{passwordType === "text" ? (
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
				<Text size="xSmall" css={findTextStyle} onClick={handleFindEmailModal}>
					아이디(이메일) 찾기
				</Text>
				<Text size="xSmall" css={findTextStyle} onClick={handleFindPasswordModal}>
					비밀번호 찾기
				</Text>
				<Text
					size="xSmall"
					css={findTextStyle}
					onClick={() => (window.location.href = "/signup?tab=email")}
				>
					회원가입
				</Text>
			</Flex>

			<SocialLogin textSize="xSmall" locate="login" />
		</Flex>
	);
};

export default LoginModal;
