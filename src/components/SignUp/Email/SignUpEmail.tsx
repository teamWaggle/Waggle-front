import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Flex, SocialLogin } from "@/components/common";
import { Email, EmailAuthCode, Password } from "@/components/SignUp/Email/EmailForm";
import PasswordValidator from "@/components/SignUp/Email/PasswordValidator";

import { passwordFormData } from "@/constants/auth";
import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useCheckEmailMutation } from "@/hooks/api/useCheckEmailMutation";
import { useLogInMutation } from "@/hooks/api/useLogInMutation";
import { useSignUpMutation } from "@/hooks/api/useSignUpMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import { signUpButtonStyle } from "@/components/SignUp/Email/SignUpEmail.style";

const SignUpEmail = () => {
	const { mutateLogIn } = useLogInMutation();
	const signUpMutation = useSignUpMutation();
	const checkEmailMutation = useCheckEmailMutation();

	const navigate = useNavigate();

	const emailRef = useRef<HTMLInputElement>(null);
	const emailAuthCodeRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);

	const [email, setEmail] = useState("");
	const [emailAuthCode, setEmailAuthCode] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");

	const [validateComplete, setValidateComplete] = useState(false);
	const [emailAuthComplete, setEmailAuthComplete] = useState(false);

	const validateForm = () => {
		if (
			useValidateForm(email, emailRef, "이메일을 입력해주세요") === false ||
			useValidateForm(emailAuthCode, emailAuthCodeRef, "이메일 인증 번호를 입력해주세요.") ===
				false ||
			useValidateForm(
				emailAuthComplete,
				emailAuthCodeRef,
				"이메일 인증 번호가 일치하지 않습니다. 다시 입력해주세요.",
			) === false ||
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

	const handleSignUp = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		checkEmailMutation.mutate(email, {
			onSuccess: () => {
				signUpMutation.mutate(
					{ email, password },
					{
						onSuccess: () => {
							mutateLogIn({ email, password });

							navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PROFILE}`);
						},
						onError: () => {
							toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
						},
					},
				);
			},
			onError: () => {
				toast.error("중복된 이메일입니다");
			},
		});
	};

	return (
		<Flex styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{/* 이메일 영역 */}
				<Email email={email} changeEmail={setEmail} emailRef={emailRef} />

				{/* 이메일 인증코드 영역 */}
				<EmailAuthCode
					email={email}
					emailAuthCode={emailAuthCode}
					changeEmailAuthCode={setEmailAuthCode}
					emailAuthComplete={setEmailAuthComplete}
					emailAuthCodeRef={emailAuthCodeRef}
				/>

				{/* 비밀번호 영역 */}
				{passwordFormData.map((data) => (
					<Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
						<Password
							password={data.id === "password" ? password : passwordCheck}
							changePassword={data.id === "password" ? setPassword : setPasswordCheck}
							passwordRef={data.id === "password" ? passwordRef : passwordCheckRef}
							title={data.text}
						/>

						{data.id === "password" && (
							<PasswordValidator password={password} validateComplete={setValidateComplete} />
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
