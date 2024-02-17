import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text, SocialLogin } from "@/components/common";
import EmailAuth from "@/components/SignUp/Email/EmailAuth";
import EmailVerify from "@/components/SignUp/Email/EmailVerify";
import PasswordValidator from "@/components/SignUp/Email/PasswordValidator";

import { emailFormData } from "@/constants/auth";
import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useLogInMutation } from "@/hooks/api/useLogInMutation";
import { useSignUpMutation } from "@/hooks/api/useSignUpMutation";

import { passwordIconStyle } from "@/components/Landing/Sidebar/Login/LoginModal.style";
import { signUpButtonStyle } from "@/components/SignUp/Email/SignUpEmail.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface formValueType {
	[key: string]: string;
}

interface emailFormDataType {
	id: string;
	text: string;
	width: string;
	placeholder: string;
	type: string;
	maxLength?: number;
}

const SignUpEmail = () => {
	const { mutateLogIn } = useLogInMutation();
	const signUpMutation = useSignUpMutation();

	const navigate = useNavigate();

	const emailAuthCodeRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);

	const [formValue, setFormValue] = useState<formValueType>({
		email: "",
		emailAuthCode: "",
		password: "",
		passwordCheck: "",
	});

	const [passwordShow, setPasswordShow] = useState(false);
	const [passwordCheckShow, setPasswordCheckShow] = useState(false);

	const [validateComplete, setValidateComplete] = useState(false);
	const [emailAuthComplete, setEmailAuthComplete] = useState(false);

	const { email, emailAuthCode, password, passwordCheck } = formValue;

	const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const handleShowPassword = (isCheck: boolean) => {
		const password = passwordRef.current;
		const passwordCheck = passwordCheckRef.current;

		if (password === null || passwordCheck === null) {
			return;
		}

		if (isCheck) {
			setPasswordCheckShow(!passwordCheckShow);

			if (!passwordCheckShow) {
				passwordCheck.type = "text";
			} else {
				passwordCheck.type = "password";
			}
		} else {
			setPasswordShow(!passwordShow);

			if (!passwordShow) {
				password.type = "text";
			} else {
				password.type = "password";
			}
		}
	};

	const validateForm = () => {
		if (!emailAuthComplete) {
			emailAuthCodeRef.current?.focus();
			toast.error("이메일 인증 번호가 일치하지 않습니다. 다시 입력해주세요.");

			return false;
		}

		if (!validateComplete) {
			passwordRef.current?.focus();
			toast.error("비밀번호가 양식이 일치하지 않습니다. 다시 입력해주세요.");

			return false;
		}

		if (password !== passwordCheck) {
			passwordCheckRef.current?.focus();
			toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");

			return false;
		}

		return true;
	};

	const handleSignUp = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		signUpMutation.mutate(
			{ email, password },
			{ onSuccess: () => mutateLogIn({ email, password }) },
		);

		navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PROFILE}`);
	};

	return (
		<Flex styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{emailFormData.map(
					({ id, text, width, placeholder, type, maxLength }: emailFormDataType) => (
						<Flex styles={{ direction: "column", gap: "8px" }} key={id}>
							<Text css={getFormTextStyle(true)}>{text}</Text>
							<Flex styles={{ align: "center", gap: "30px", position: "relative" }}>
								<input
									css={getInputStyle(width)}
									placeholder={placeholder}
									name={id}
									value={formValue[id]}
									onChange={handleFormValue}
									type={type}
									ref={
										id === "emailAuthCode"
											? emailAuthCodeRef
											: id === "password"
											  ? passwordRef
											  : passwordCheckRef
									}
									maxLength={maxLength}
								/>

								{id === "password" && (
									<>
										{passwordShow ? (
											<PasswordShowIcon
												css={passwordIconStyle}
												onClick={() => handleShowPassword(false)}
											/>
										) : (
											<PasswordNotShowIcon
												css={passwordIconStyle}
												onClick={() => handleShowPassword(false)}
											/>
										)}
									</>
								)}

								{id === "passwordCheck" && (
									<>
										{passwordCheckShow ? (
											<PasswordShowIcon
												css={passwordIconStyle}
												onClick={() => handleShowPassword(true)}
											/>
										) : (
											<PasswordNotShowIcon
												css={passwordIconStyle}
												onClick={() => handleShowPassword(true)}
											/>
										)}
									</>
								)}

								{text === "이메일" && <EmailAuth email={email} />}

								{text === "이메일 인증번호" && (
									<EmailVerify
										email={email}
										authCode={emailAuthCode}
										emailAuthComplete={setEmailAuthComplete}
									/>
								)}
							</Flex>

							{text === "비밀번호" && (
								<PasswordValidator password={password} validateComplete={setValidateComplete} />
							)}
						</Flex>
					),
				)}
			</Flex>

			<button css={signUpButtonStyle} onClick={handleSignUp}>
				가입하기
			</button>

			<SocialLogin textSize="small" locate="sign" />
		</Flex>
	);
};

export default SignUpEmail;
