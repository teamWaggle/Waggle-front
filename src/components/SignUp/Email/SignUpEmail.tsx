import { useState, useRef } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text, SocialLogin } from "@/components/common";
import EmailAuth from "@/components/SignUp/Email/EmailAuth";
import PasswordValidator from "@/components/SignUp/Email/PasswordValidator";

import { emailFormData } from "@/constants/auth";

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
	const { mutateSignUp } = useSignUpMutation();

	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);

	const [formValue, setFormValue] = useState<formValueType>({
		email: "",
		emailAuthNumber: "",
		password: "",
		passwordCheck: "",
	});

	const [passwordShow, setPasswordShow] = useState(false);
	const [passwordCheckShow, setPasswordCheckShow] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { email, emailAuthNumber, password, passwordCheck } = formValue;

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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		mutateSignUp({ email, password });
	};

	return (
		<Flex
			tag="form"
			onSubmit={handleSubmit}
			styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}
		>
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
									ref={id === "password" ? passwordRef : passwordCheckRef}
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

								{text === "이메일" && <EmailAuth />}
							</Flex>

							{text === "비밀번호" && <PasswordValidator password={password} />}
						</Flex>
					),
				)}
			</Flex>

			<button type="submit" css={signUpButtonStyle}>
				가입하기
			</button>

			<SocialLogin textSize="small" locate="sign" />
		</Flex>
	);
};

export default SignUpEmail;
