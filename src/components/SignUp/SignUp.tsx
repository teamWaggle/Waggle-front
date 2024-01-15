import { Flex, Heading, Text, Logo } from "@/components/common";
import SignUpForm from "@/components/SignUp/SignUpForm";

import {
	layoutStyle,
	headingStyle,
	boxStyle,
	circleBoxStyle,
	circleNumberStyle,
	circleTextStyle,
} from "@/components/SignUp/SignUp.style";

const circleData = [
	{
		number: 1,
		text: "이메일 인증",
	},
	{
		number: 2,
		text: "프로필 입력",
	},
	{
		number: 3,
		text: "반려견 등록",
	},
];

const SignUp = () => {
	return (
		<Flex styles={{ direction: "column", align: "center" }} css={layoutStyle}>
			<Logo width={138} height={30} />
			<Heading size="small" css={headingStyle}>
				회원가입
			</Heading>
			<Flex styles={{ align: "center", marginTop: "40px", gap: "160px" }}>
				{circleData.map((data) => (
					<Flex
						styles={{ direction: "column", gap: "6px", align: "center", position: "relative" }}
						css={boxStyle}
						key={data.text}
					>
						<Flex styles={{ justify: "center", align: "center" }} css={circleBoxStyle}>
							<Text size="small" css={circleNumberStyle}>
								{data.number}
							</Text>
						</Flex>
						<Text size="small" css={circleTextStyle}>
							{data.text}
						</Text>
					</Flex>
				))}
			</Flex>
			<SignUpForm />
		</Flex>
	);
};

export default SignUp;
