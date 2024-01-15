import FillPasswordCheckIcon from "@/assets/svg/FillPasswordCheckIcon.svg?react";
import { Flex, Text } from "@/components/common";

import {
	textStyle,
	emailInputStyle,
	buttonStyle,
	buttonTextStyle,
	inputStyle,
	passwordCheckTextStyle,
} from "@/components/SignUp/SignUpForm.style";

const formData = [
	{
		title: "이메일",
		placeholder: "Waggle@email.com",
	},
	{
		title: "이메일 인증번호",
		placeholder: "이메일로 인증받은 번호 4자리를 입력해주세요",
	},
	{
		title: "비밀번호",
		placeholder: "••••••••",
	},
	{
		title: "비밀번호 확인",
		placeholder: "••••••••",
	},
];

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

const SignUpForm = () => {
	return (
		<Flex styles={{ marginTop: "78px" }}>
			<Flex styles={{ direction: "column", gap: "30px" }}>
				{formData.map((data) => (
					<Flex key={data.title} styles={{ direction: "column", gap: "8px" }}>
						<Text css={textStyle}>{data.title}</Text>
						<Flex styles={{ align: "center", gap: "30px" }}>
							<input
								css={data.title === "이메일" ? emailInputStyle : inputStyle}
								placeholder={data.placeholder}
							/>

							{data.title === "이메일" && (
								<Flex
									tag="button"
									styles={{ align: "center", justify: "center" }}
									css={buttonStyle}
								>
									<Text css={buttonTextStyle}>이메일 인증</Text>
								</Flex>
							)}
						</Flex>

						{data.title === "비밀번호" && (
							<Flex styles={{ padding: "0 8px", gap: "10px" }}>
								{passwordCheckData.map((data) => (
									<Flex styles={{ gap: "4px", align: "center" }} key={data.text}>
										{data.icon}
										<Text size="small" css={passwordCheckTextStyle}>
											{data.text}
										</Text>
									</Flex>
								))}
							</Flex>
						)}
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};

export default SignUpForm;
