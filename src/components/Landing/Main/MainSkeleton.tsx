import { Flex, SearchInput } from "@/components/common";
import { Sidebar, SortButton } from "@/components/Landing";
import StorySkeleton from "@/components/Story/StorySkeleton";

import { mainStyle } from "@/components/Landing/Main/Main.style";

const MainSkeleton = () => {
	return (
		<main css={mainStyle}>
			<Flex styles={{ justify: "space-between" }}>
				<Flex tag="section" styles={{ direction: "column", gap: "62px", width: "814px" }}>
					<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
						<SortButton defaultText="전체 검색" />
						<SearchInput onChange={() => {}} width="644px" />
					</Flex>
					<StorySkeleton />
				</Flex>
				<Sidebar />
			</Flex>
		</main>
	);
};

export default MainSkeleton;
