import { useState, useRef } from "react";

import { Flex, Heading, Text, Logo } from "@/components/common";
import LoginModal from "@/components/Landing/Sidebar/Login/LoginModal";
import { Password } from "@/components/SignUp/Email/EmailForm";
import PasswordValidator from "@/components/SignUp/Email/PasswordValidator";

import { findPasswordFormData } from "@/constants/auth";

import { useEmailAuthSendMutation } from "@/hooks/api/auth/useEmailAuthSendMutation";
import { usePasswordAuthVerifyMutation } from "@/hooks/api/auth/usePasswordAuthVerifyMutation";
import { useChangePasswordMutation } from "@/hooks/api/auth/usePasswordChangeMutation";
import useModal from "@/hooks/useModal";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { CommonResponseType } from "@/types/common";
import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	inputStyle,
	buttonStyle,
} from "./FindEmailModal.style";

const FindPasswordModal = ({ modalClose }: modalCloseType) => {
	const { mutate: mutateEmailAuthSend } = useEmailAuthSendMutation();
	const { mutate: passwordAuthVerifyMutation } = usePasswordAuthVerifyMutation();
	const { mutate: mutateChangePassword } = useChangePasswordMutation();

	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);

	const [mode, setMode] = useState("sendCode");
	const [email, setEmail] = useState("");

	const [passwordAuthCode, setPasswordAuthCode] = useState("");
	const [memberId, setMemberId] = useState(0);

	const [validateComplete, setValidateComplete] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");

	const modal = useModal();

	const handleCloseModal = () => {
		modal.closeModal();
	};

	const validateForm = () => {
		if (
			useValidateForm(password, passwordRef, "비밀번호를 입력해주세요.") === false ||
			useValidateForm(passwordCheck, passwordCheckRef, "비밀번호 확인을 입력해주세요.") === false ||
			useValidateForm(
				validateComplete,
				passwordRef,
				"비밀번호가 양식이 일치하지 않습니다. 다시 입력해주세요.",
			) === false ||
			useValidateForm(
				password === passwordCheck,
				passwordCheckRef,
				"비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
			) === false
		) {
			return false;
		}

		return true;
	};

	const handleEmailSendClick = () => {
		mutateEmailAuthSend(email, {
			onSuccess: () => {
				setMode("authCode");
			},
		});
	};

	const handlePasswordAuthVerify = () => {
		passwordAuthVerifyMutation(
			{ email, authCode: passwordAuthCode },
			{
				onSuccess: ({ result }: CommonResponseType) => {
					setMode("changePassword");
					setMemberId(result);
				},
			},
		);
	};

	const handleChangePassword = (e: React.MouseEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		mutateChangePassword(
			{ memberId, password },
			{
				onSuccess: () => {
					setMode("complete");
				},
			},
		);
	};

	const handleLoginClick = () => {
		modalClose();

		modal.openModal({
			key: `LoginModal`,
			component: () => <LoginModal modalClose={handleCloseModal} />,
		});
	};

	return (
		<Flex styles={{ direction: "column", align: "center", gap: "60px" }} css={layoutStyle}>
			{mode === "complete" ? (
				<Flex styles={{ direction: "column", align: "center", gap: "76px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 변경이 완료되었습니다
					</Heading>
					<button type="button" css={buttonStyle} onClick={handleLoginClick}>
						로그인 하기
					</button>
				</Flex>
			) : (
				<Flex styles={{ direction: "column", align: "center", gap: "14px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 찾기
					</Heading>
					<Text css={textStyle}>
						{mode === "sendCode" &&
							"아이디(이메일)를 입력해주세요.\n이메일을 통해 비밀번호 변경 인증코드가 전송됩니다."}

						{mode === "authCode" && "전송된 인증 코드를 입력해주세요"}

						{mode === "changePassword" && "변경하실 비밀번호를 입력해주세요"}
					</Text>
				</Flex>
			)}

			{mode === "sendCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="waggle@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<button type="submit" css={buttonStyle} onClick={handleEmailSendClick}>
						인증코드 전송하기
					</button>
				</>
			)}

			{mode === "authCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="영어 대소문자, 숫자 포함 8자리"
						value={passwordAuthCode}
						onChange={(e) => setPasswordAuthCode(e.target.value)}
						maxLength={8}
					/>

					<button type="submit" css={buttonStyle} onClick={handlePasswordAuthVerify}>
						인증하기
					</button>
				</>
			)}

			{mode === "changePassword" && (
				<>
					<Flex styles={{ direction: "column", gap: "20px" }}>
						{findPasswordFormData.map((data) => (
							<Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
								<Password
									password={data.id === "password" ? password : passwordCheck}
									changePassword={data.id === "password" ? setPassword : setPasswordCheck}
									passwordRef={data.id === "password" ? passwordRef : passwordCheckRef}
									title={data.text}
									isFind
								/>

								{data.id === "password" && (
									<PasswordValidator password={password} validateComplete={setValidateComplete} />
								)}
							</Flex>
						))}
					</Flex>

					<button type="submit" css={buttonStyle} onClick={handleChangePassword}>
						비밀번호 변경하기
					</button>
				</>
			)}
		</Flex>
	);
};

export default FindPasswordModal;
