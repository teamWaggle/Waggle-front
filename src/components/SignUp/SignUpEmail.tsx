import { useState } from "react";

import FillPasswordCheckIcon from "@/assets/svg/FillPasswordCheckIcon.svg?react";
import { Flex, Text, SocialLogin } from "@/components/common";
// import { useEmailAuthSendMutation } from "@/hooks/api/useEmailAuthSendMutation";
// import { useSignUpMutation } from "@/hooks/api/useSignUpMutation";
import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";
import { buttonStyle, signUpButtonStyle } from "@/components/SignUp/SignUpEmail.style";

// const formData = [
// 	{
// 		title: "이메일",
// 		placeholder: "Waggle@email.com",
// 	},
// 	{
// 		title: "이메일 인증번호",
// 		placeholder: "이메일로 인증받은 번호 4자리를 입력해주세요",
// 	},
// 	{
// 		title: "비밀번호",
// 		placeholder: "••••••••",
// 	},
// 	{
// 		title: "비밀번호 확인",
// 		placeholder: "••••••••",
// 	},
// ];

const passwordCheckData = [
	{
		icon: <FillPasswordCheckIcon />,
		text: "영문",
	},
	{
		icon: <FillPasswordCheckIcon />,
		text: "숫자",
	},
	{
		icon: <FillPasswordCheckIcon />,
		text: "특수문자",
	},
	{
		icon: <FillPasswordCheckIcon />,
		text: "8자리 이상",
	},
];

const SignUpEmail = () => {
	// const { mutateSignUp } = useSignUpMutation();
	// const { mutateEmailAuthSend } = useEmailAuthSendMutation();

	// const [email2, setEmail] = useState("");
	const [emailAuthNumber, setEmailAuthNumber] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");

	// const [email, setEMail] = useState("sling0623@gmail.com");

	// console.log(email);

	// const handleEmailSend = () => {
	// 	const test = "sling0623@gmail.com";

	// 	mutateEmailAuthSend({ email });
	// };

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();

	// 	const formData = new FormData();

	// 	const request = {
	// 		email,
	// 		username: "",
	// 		password,
	// 		nickname: "",
	// 		address: "string",
	// 		phone: "string",
	// 		profileImgUrl: null,
	// 	};

	// 	formData.append("request", JSON.stringify(request));

	// 	mutateSignUp(formData);
	// };

	return (
		// <form>
		<Flex styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{/* 이메일 form */}
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={getFormTextStyle(true)}>이메일</Text>
					<Flex styles={{ align: "center", gap: "30px" }}>
						<input
							css={getInputStyle("280px")}
							placeholder="Waggle@email.com"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>

						{/* 이메일 인증 버튼 */}
						<Flex
							tag="button"
							styles={{ align: "center", justify: "center" }}
							css={buttonStyle}
							// onClick={handleEmailSend}
						>
							<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>이메일 인증</Text>
						</Flex>
					</Flex>
				</Flex>

				{/* 이메일 인증 번호 폼 */}
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={getFormTextStyle(true)}>이메일 인증번호</Text>
					<Flex styles={{ align: "center", gap: "30px" }}>
						<input
							css={getInputStyle("412px")}
							placeholder="이메일로 인증받은 번호 4자리를 입력해주세요"
							value={emailAuthNumber}
							onChange={(e) => setEmailAuthNumber(e.target.value)}
						/>
					</Flex>
				</Flex>

				{/* 비밀번호 폼 */}
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={getFormTextStyle(true)}>비밀번호</Text>
					<Flex styles={{ align: "center", gap: "30px" }}>
						<input
							css={getInputStyle("412px")}
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Flex>

					{/* 비밀번호 양식 체크 */}
					<Flex styles={{ padding: "0 8px", gap: "10px" }}>
						{passwordCheckData.map((data) => (
							<Flex styles={{ gap: "4px", align: "center" }} key={data.text}>
								{data.icon}
								<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
									{data.text}
								</Text>
							</Flex>
						))}
					</Flex>
				</Flex>

				{/* 비밀번호 확인 폼 */}
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={getFormTextStyle(true)}>비밀번호 확인</Text>
					<Flex styles={{ align: "center", gap: "30px" }}>
						<input
							css={getInputStyle("412px")}
							placeholder="••••••••"
							value={passwordCheck}
							onChange={(e) => setPasswordCheck(e.target.value)}
						/>
					</Flex>
				</Flex>

				{/* {formData.map((data) => (
					<Flex key={data.title} styles={{ direction: "column", gap: "8px" }}>
						<Text css={getFormTextStyle(true)}>{data.title}</Text>
						<Flex styles={{ align: "center", gap: "30px" }}>
							<input
								css={data.title === "이메일" ? getInputStyle("280px") : getInputStyle("412px")}
								placeholder={data.placeholder}
							/>

							{data.title === "이메일" && (
								<Flex
									tag="button"
									styles={{ align: "center", justify: "center" }}
									css={buttonStyle}
								>
									<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>이메일 인증</Text>
								</Flex>
							)}
						</Flex>

						{data.title === "비밀번호" && (
							<Flex styles={{ padding: "0 8px", gap: "10px" }}>
								{passwordCheckData.map((data) => (
									<Flex styles={{ gap: "4px", align: "center" }} key={data.text}>
										{data.icon}
										<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
											{data.text}
										</Text>
									</Flex>
								))}
							</Flex>
						)}
					</Flex>
				))} */}
			</Flex>

			<button type="submit" css={signUpButtonStyle}>
				가입하기
			</button>

			<SocialLogin textSize="small" locate="sign" />
		</Flex>
		// </form>
	);
};

export default SignUpEmail;
