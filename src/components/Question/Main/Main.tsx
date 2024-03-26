import { Flex, Box, SearchInput } from "@/components/common";
import { SortButton } from "@/components/Landing";
import { QuestionCard, Sidebar } from "@/components/Question";

import { useQuestionListQuery } from "@/hooks/api/question/useQuestionListQuery";

import { mainStyle } from "@/components/Question/Main/Main.style";

const Main = () => {
	const { questionListData } = useQuestionListQuery(0);

	console.log(questionListData);

	return (
		<Box css={mainStyle}>
			<Flex styles={{ gap: "65px" }}>
				<section>
					<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
						<SortButton defaultText="해결" />
						<SearchInput onChange={() => {}} width="644px" />
					</Flex>

					<Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
						{questionListData &&
							questionListData.result.questionList.map((questionInfo) => (
								<QuestionCard key={questionInfo.boardId} />
							))}
					</Flex>
				</section>
				<Sidebar />
			</Flex>
		</Box>
	);
};

export default Main;
