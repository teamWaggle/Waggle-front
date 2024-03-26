import { Flex, Box, Heading, Text } from "@/components/common";
import { QuestionCard } from "@/components/Question";

import {
	sectionStyle,
	boxStyle,
	titleBoxStyle,
	buttonStyle,
} from "@/components/Question/Bio/Bio.style";

const Bio = () => {
	return (
		<Box tag="section" css={sectionStyle}>
			<Flex css={boxStyle}>
				<Flex styles={{ direction: "column", gap: "52px", marginTop: "54px" }}>
					<Flex css={titleBoxStyle}>
						<Heading size="small">물어보고 싶은</Heading>
						<Heading size="small">강아지 관련 궁금증이</Heading>
						<Heading size="small">있나요? Q&A에서</Heading>
						<Heading size="small">답을 찾아보세요!</Heading>
					</Flex>

					<button css={buttonStyle}>
						<Text size="xLarge">글 작성하기</Text>
					</button>
				</Flex>

				<Flex styles={{ direction: "column", gap: "24px" }}>
					<QuestionCard />
					<QuestionCard />
					<QuestionCard />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Bio;
