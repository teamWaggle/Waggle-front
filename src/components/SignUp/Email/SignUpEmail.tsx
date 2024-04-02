import { Flex, SocialLogin } from "@/components/common";
import PasswordValidator from "@/components/SignUp/Email/PasswordInput/PasswordValidator";

import EmailAuthCodeInput from "./EmailAuthCodeInput/EmailAuthCodeInput";
import EmailInput from "./EmailInput/EmailInput";
import PasswordInput from "./PasswordInput/PasswordInput";

import { passwordFormData } from "@/constants/auth";

import { usePasswordForm } from "@/hooks/auth/usePasswordForm";
import { useSignUpEmailForm } from "@/hooks/auth/useSignUpEmailForm";

import { signUpButtonStyle } from "@/components/SignUp/Email/SignUpEmail.style";

const SignUpEmail = () => {
	const {
		passwordRef,
		passwordCheckRef,
		passwordRequest,
		updateInputValue: updatePasswordInputValue,
		validateComplete,
		handleChangeValidateComplete,
	} = usePasswordForm({});

	const {
		emailRef,
		emailAuthCodeRef,
		handleChangeEmailAuthComplete,
		signUpEmailRequest,
		updateInputValue,
		handleSignUp,
	} = useSignUpEmailForm({
		password: passwordRequest.password,
		passwordCheck: passwordRequest.passwordCheck,
		validateComplete,
		passwordRef,
		passwordCheckRef,
	});

	return (
		<Flex styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{/* 이메일 영역 */}
				<EmailInput
					email={signUpEmailRequest.email}
					updateInputValue={updateInputValue}
					emailRef={emailRef}
				/>

				<EmailAuthCodeInput
					email={signUpEmailRequest.email}
					emailAuthCode={signUpEmailRequest.authCode}
					updateInputValue={updateInputValue}
					handleChangeEmailAuthComplete={handleChangeEmailAuthComplete}
					emailAuthCodeRef={emailAuthCodeRef}
				/>

				{/* 비밀번호 영역 */}
				{passwordFormData.map((data) => (
					<Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
						<PasswordInput
							password={
								data.id === "password" ? passwordRequest.password : passwordRequest.passwordCheck
							}
							valueKey={data.id === "password" ? "password" : "passwordCheck"}
							updatePasswordInputValue={updatePasswordInputValue}
							passwordRef={data.id === "password" ? passwordRef : passwordCheckRef}
							title={data.text}
						/>

						{data.id === "password" && (
							<PasswordValidator
								password={passwordRequest.password}
								validateComplete={handleChangeValidateComplete}
							/>
						)}
					</Flex>
				))}
			</Flex>

			<button css={signUpButtonStyle} onClick={handleSignUp}>
				가입하기
			</button>

			<SocialLogin textSize="small" locate="sign" />
		</Flex>
	);
};

export default SignUpEmail;
