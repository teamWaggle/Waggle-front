import { Flex } from "@/components/common";
import { QuestionCard, Sidebar } from "@/components/Question";

import { mainStyle } from "@/components/Question/Main/Main.style";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex styles={{ gap: "46px" }}>
				<section>
					<Flex styles={{ direction: "column", gap: "24px", marginTop: "24px" }}>
						<QuestionCard />
						<QuestionCard />
						<QuestionCard />
					</Flex>
				</section>
				<Sidebar />
			</Flex>
		</div>
	);
};

export default Main;
