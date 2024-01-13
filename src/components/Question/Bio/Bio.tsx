import { Flex } from "@/components/common";
import { QuestionCard } from "@/components/Question";

import {
	sectionStyle,
	boxStyle,
	titleStyle,
	buttonStyle,
} from "@/components/Question/Bio/Bio.style";

const Bio = () => {
	return (
		<section css={sectionStyle}>
			<Flex styles={{ align: "center", gap: "120px" }} css={boxStyle}>
				<Flex styles={{ direction: "column", gap: "52px" }}>
					<Flex styles={{ direction: "column", gap: "10px" }} css={titleStyle}>
						<p>Waggle에서</p>
						<p>위급한 상황을 알리고</p>
						<p>견주들에게 도움을</p>
						<p>요청해보세요!</p>
					</Flex>
					<button css={buttonStyle}>글 작성하기</button>
				</Flex>
				<Flex styles={{ direction: "column", gap: "24px" }}>
					<QuestionCard />
					<QuestionCard />
					<QuestionCard />
				</Flex>
			</Flex>
		</section>
	);
};

export default Bio;
