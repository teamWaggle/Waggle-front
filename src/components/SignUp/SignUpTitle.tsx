import { Dispatch, SetStateAction } from "react";

import { Flex, Heading, Text, Logo } from "@/components/common";

import {
	headingStyle,
	boxStyle,
	getCircleBoxStyle,
	circleNumberStyle,
	getCircleTextStyle,
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

interface SignUpTabType {
	tab: string;
	changeTab: Dispatch<SetStateAction<string>>;
}

const SignUpTitle = ({ tab, changeTab }: SignUpTabType) => {
	return (
		<>
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
						onClick={() => changeTab(data.text)}
					>
						<Flex
							styles={{ justify: "center", align: "center" }}
							css={getCircleBoxStyle(tab === data.text)}
						>
							<Text size="small" css={circleNumberStyle}>
								{data.number}
							</Text>
						</Flex>
						<Text size="small" css={getCircleTextStyle(tab === data.text)}>
							{data.text}
						</Text>
					</Flex>
				))}
			</Flex>
		</>
	);
};

export default SignUpTitle;
