import { Flex, Box, Heading, Text } from "@/components/common";

import { buttonStyle, boxStyle, titleStyle } from "@/components/Siren/Bio/Bio.style";

// import SirenCard from "../SirenCard/SirenCard";

const Bio = () => {
	return (
		<Box tag="section" css={boxStyle}>
			<Flex styles={{ gap: "50px" }}>
				<Flex styles={{ direction: "column", gap: "28px" }}>
					<Flex css={titleStyle}>
						<Heading>위급한 일이 생겼나요?</Heading>
						<Heading>Waggle 견주들과</Heading>
						<Heading>함께 문제를 해결해요</Heading>
					</Flex>

					<button css={buttonStyle}>
						<Text size="xLarge">글 작성하기</Text>
					</button>
				</Flex>

				<Flex styles={{ gap: "12px" }}>
					{/* <SirenCard />
					<SirenCard />
					<SirenCard /> */}
				</Flex>
			</Flex>
		</Box>
	);
};

export default Bio;
