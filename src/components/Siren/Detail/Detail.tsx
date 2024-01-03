import { Flex, Box, Heading, Text, Divider } from "@components/common";

import {
	layoutStyle,
	tagStyle,
	headingStyle,
	textStyle,
	text2Style,
	text3Style,
} from "./Detail.style";

import GenderIcon from "@assets/svg/female.svg?react";

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

const Detail = () => {
	return (
		<Flex styles={{ direction: "column" }} css={layoutStyle}>
			<Flex styles={{ direction: "column", gap: "12px", marginBottom: "18px" }}>
				<Flex styles={{ justify: "center", align: "center" }} css={tagStyle}>
					<Text>강아지 찾아요</Text>
				</Flex>
				<Heading css={headingStyle}>강아지 찾아요 도와주세요</Heading>
				<Flex styles={{ align: "center", gap: "14px" }}>
					<Box
						styles={{
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							backgroundColor: "#d9d9d9",
						}}
					/>
					<Text css={textStyle}>멍댕멍댕</Text>
					<Text css={textStyle}>조회 129</Text>
					<Text css={textStyle}>23.12.27 20:10</Text>
				</Flex>
			</Flex>

			<Divider />

			<Flex styles={{ align: "center", wrap: "wrap", marginTop: "60px", gap: "58px 72px" }}>
				{titleData.map((data) => (
					<Flex styles={{ direction: "column", width: "333px" }} key={data.title}>
						<Text size="xLarge" css={text2Style}>
							{data.title}
						</Text>
						{data.data ? (
							<>
								<Text size="large" css={text3Style}>
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
		</Flex>
	);
};

export default Detail;
