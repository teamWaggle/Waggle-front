import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Box, Text, Logo, SocialLogin } from "@/components/common";
import FindEmailModal from "@/components/Login/FindEmailModal";
import FindPasswordModal from "@/components/Login/FindPasswordModal";

import { useLoginForm } from "@/hooks/auth/useLoginForm";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	inputStyle,
	passwordIconStyle,
	buttonStyle,
	findTextStyle,
} from "@/components/Login/LoginModal/LoginModal.style";

const LoginModal = () => {
	const {
		emailRef,
		passwordRef,
		loginRequest,
		updateInputValue,
		handleSubmit,
		passwordInputType,
		handleShowPassword,
	} = useLoginForm();

	const modal = useModal();

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
						onChange={(e) => updateInputValue("email", e.target.value)}
						value={loginRequest.email}
						ref={emailRef}
					/>
					<Box styles={{ position: "relative", marginTop: "13px" }}>
						<input
							css={inputStyle}
							placeholder="비밀번호"
							type={passwordInputType}
							onChange={(e) => updateInputValue("password", e.target.value)}
							value={loginRequest.password}
							ref={passwordRef}
							maxLength={20}
						/>
						{passwordInputType === "text" ? (
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
