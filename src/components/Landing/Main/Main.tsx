import Flex from "@/components/common/Flex/Flex";
import { Searchbar, Sidebar } from "@/components/Landing";
import { Story } from "@/components/Story";

import { mainStyle } from "@/components/Landing/Main/Main.style";

const Main = () => {
	return (
		<main css={mainStyle}>
			<Flex styles={{ gap: "30px" }}>
				<section>
					<Searchbar defaultText="전체검색" />
					<Story />
				</section>
				<Sidebar />
			</Flex>
		</main>
	);
};

export default Main;
