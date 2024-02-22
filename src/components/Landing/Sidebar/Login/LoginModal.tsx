import { useState, useRef } from "react";
import { toast } from "react-toastify";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Box, Text, Logo, SocialLogin } from "@/components/common";
import FindEmailModal from "@/components/Landing/Sidebar/Login/FindEmailModal";

import { useLogInMutation } from "@/hooks/api/useLogInMutation";
import useModal from "@/hooks/useModal";

import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
} from "@/components/Landing/Sidebar/Login/LoginModal.style";

const LoginModal = ({ modalClose }: modalCloseType) => {
	const { mutateLogIn } = useLogInMutation();

	const passwordRef = useRef<HTMLInputElement>(null);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [passwordShow, setPasswordShow] = useState(false);

	const modal = useModal();

	const handleCloseModal = () => {
		modal.closeModal();
	};

	const validateForm = () => {
		if (!email.trim() || !password.trim()) {
			toast.error("이메일과 비밀번호는 반드시 입력되어야 합니다.");

			return false;
		}

		return true;
	};

	const handleShowPassword = () => {
		const password = passwordRef.current;

		if (password === null) {
			return;
		}

		setPasswordShow(!passwordShow);

		if (!passwordShow) {
			password.type = "text";
		} else {
			password.type = "password";
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		mutateLogIn({ email, password });
		modalClose();
	};

	const handleFindEmailModal = () => {
		modal.openModal({
			key: `FindEmailModal`,
			component: () => <FindEmailModal modalClose={handleCloseModal} />,
		});
	};

	return (
		<Flex
			styles={{
				direction: "column",
				align: "center",
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
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<Box styles={{ position: "relative", marginTop: "13px" }}>
						<input
							css={inputStyle}
							placeholder="비밀번호"
							type="text"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							ref={passwordRef}
							maxLength={20}
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
				<Text size="xSmall" css={findTextStyle} onClick={handleFindEmailModal}>
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
