import { Flex, Box, Heading, Text } from "@components/common";
import { buttonStyle, boxStyle, titleStyle } from "./Bio.style";

import SirenCard from "../SirenCard/SirenCard";

const Bio = () => {
	return (
		<Box tag="section" css={boxStyle}>
			<Flex styles={{ gap: "50px", marginTop: "82px" }}>
				<Flex styles={{ direction: "column", gap: "50px" }}>
					<Flex styles={{ direction: "column", gap: "10px" }} css={titleStyle}>
						<Heading>Waggle에서</Heading>
						<Heading>위급한 상황을 알리고</Heading>
						<Heading>견주들에게 도움을</Heading>
						<Heading>요청해보세요!</Heading>
					</Flex>
					<Flex tag="button" styles={{ justify: "center", align: "center" }} css={buttonStyle}>
						<Text size="xLarge">글 작성하기</Text>
					</Flex>
				</Flex>
				<Flex styles={{ gap: "12px" }}>
					<SirenCard />
					<SirenCard />
					<SirenCard />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Bio;
