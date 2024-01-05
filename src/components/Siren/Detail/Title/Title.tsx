import { Flex, Box, Heading, Text } from "@components/common";

import { tagStyle, headingStyle, textStyle } from "./Title.style";

const Title = () => {
	return (
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
	);
};

export default Title;
