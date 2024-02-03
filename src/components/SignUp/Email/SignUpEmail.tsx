import { useState } from "react";

import { Flex, Text, SocialLogin } from "@/components/common";
import EmaiAuth from "@/components/SignUp/Email/EmaiAuth";
import PasswordValidator from "@/components/SignUp/Email/PasswordValidator";
import { emailFormData } from "@/constants/auth";
import { useSignUpMutation } from "@/hooks/api/useSignUpMutation";

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
}

const SignUpEmail = () => {
	const { mutateSignUp } = useSignUpMutation();

	const [formValue, setFormValue] = useState<formValueType>({
		email: "",
		emailAuthNumber: "",
		password: "",
		passwordCheck: "",
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { email, emailAuthNumber, password, passwordCheck } = formValue;

	const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const request = {
			email,
			username: "string",
			password,
			nickname: "string",
			address: "string",
			phone: "string",
			profileImgUrl: null,
		};

		formData.append("request", JSON.stringify(request));

		mutateSignUp(formData);
	};

	return (
		<Flex
			tag="form"
			onSubmit={handleSubmit}
			styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}
		>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{emailFormData.map(({ id, text, width, placeholder }: emailFormDataType) => (
					<Flex styles={{ direction: "column", gap: "8px" }} key={id}>
						<Text css={getFormTextStyle(true)}>{text}</Text>
						<Flex styles={{ align: "center", gap: "30px" }}>
							<input
								css={getInputStyle(width)}
								placeholder={placeholder}
								name={id}
								value={formValue[id]}
								onChange={handleFormValue}
							/>

							{text === "이메일" && <EmaiAuth />}
						</Flex>

						{text === "비밀번호" && <PasswordValidator password={password} />}
					</Flex>
				))}
			</Flex>

			<button type="submit" css={signUpButtonStyle}>
				가입하기
			</button>

			<SocialLogin textSize="small" locate="sign" />
		</Flex>
	);
};

export default SignUpEmail;
