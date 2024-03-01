import { Flex, SearchInput } from "@/components/common";
import { Sidebar, SortButton } from "@/components/Landing";
import { Story } from "@/components/Story";

import { mainStyle } from "@/components/Landing/Main/Main.style";

const Main = () => {
	return (
		<main css={mainStyle}>
			<Flex styles={{ justify: "space-between" }}>
				<Flex tag="section" styles={{ direction: "column", gap: "62px", width: "814px" }}>
					<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
						<SortButton defaultText="전체 검색" />
						<SearchInput onChange={() => {}} width="644px" />
					</Flex>
					<Story />
				</Flex>
				<Sidebar />
			</Flex>
		</main>
	);
};

export default Main;
