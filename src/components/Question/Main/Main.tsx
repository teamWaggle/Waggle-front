import { Flex, Box, SearchInput } from "@/components/common";
import { SortButton } from "@/components/Landing";
import { QuestionCard, Sidebar } from "@/components/Question";

import { mainStyle } from "@/components/Question/Main/Main.style";

const Main = () => {
	return (
		<Box css={mainStyle}>
			<Flex styles={{ gap: "65px" }}>
				<section>
					<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
						<SortButton defaultText="해결" />
						<SearchInput onChange={() => {}} width="644px" />
					</Flex>

					<Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
						<QuestionCard />
						<QuestionCard />
						<QuestionCard />
					</Flex>
				</section>
				<Sidebar />
			</Flex>
		</Box>
	);
};

export default Main;
