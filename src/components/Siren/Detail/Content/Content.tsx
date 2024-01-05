import GenderIcon from "@assets/svg/female.svg?react";
import DangerIcon from "@assets/svg/danger-bell.svg?react";

import { Flex, Box, Text, Heading, Divider } from "@components/common";

import {
	textStyle,
	subTextStyle,
	imgStyle,
	contentTextStyle,
	iconBoxStyle,
	headingStyle,
} from "./Content.style";

import SampleImg from "@assets/png/post-sample.png";

const titleData = [
	{
		title: "강아지 실종 장소",
		data: "경상북도 포항시 북구 새천년대로 70",
	},
	{
		title: "강아지 견종",
		data: "래브라도 리트리버",
	},
	{
		title: "강아지 성별",
	},
	{
		title: "강아지 실종 날짜",
		data: "2023.11.15",
	},
	{
		title: "강아지 추정 나이",
		data: "3살",
	},
	{
		title: "강아지 연락처",
		data: "카카오톡 오픈채팅방 https://",
	},
];

const Content = () => {
	return (
		<Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
			<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px" }}>
				{titleData.map((data) => (
					<Flex styles={{ direction: "column", width: "333px" }} key={data.title}>
						<Text size="xLarge" css={textStyle}>
							{data.title}
						</Text>
						{data.data ? (
							<>
								<Text size="large" css={subTextStyle}>
									{data.data}
								</Text>
								<Divider />
							</>
						) : (
							<GenderIcon />
						)}
					</Flex>
				))}
			</Flex>

			<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
				<Box styles={{ width: "536px", height: "466px" }}>
					<img css={imgStyle} src={SampleImg} alt="contentImg" />
				</Box>
				<Box
					styles={{
						width: "536px",
						height: "466px",
						borderRadius: "17px",
						border: "1px solid #d2d2d2",
						padding: "34px 22px",
					}}
				>
					<Text size="xLarge" css={contentTextStyle}>
						딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭 입니다. 딴은 밤을 세워 우는
						벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬
						<br />
						<br />듯 합니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 입니다. 딴은
						밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 입니다. 딴은 밤을 세워 우는 벌레는
						<br />
						<br />
						부끄러운 이름을 슬퍼하는 입니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는
					</Text>
				</Box>
			</Flex>

			<Flex styles={{ align: "center", justify: "center", width: "100%" }}>
				<Flex styles={{ align: "center", gap: "22px" }}>
					<Flex
						styles={{
							align: "center",
							justify: "center",
							direction: "column",
						}}
						css={iconBoxStyle}
					>
						<DangerIcon />
						<Text size="small">DANGER</Text>
					</Flex>
					<Heading size="xxLarge" css={headingStyle}>
						33
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Content;
