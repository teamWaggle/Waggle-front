import { Searchbar, Sidebar, Post } from "@components/Landing";

import Flex from "@components/common/Flex/Flex";
import { mainStyle } from "@components/Landing/Main/Main.styles";

const Main = () => {
	return (
		<main css={mainStyle}>
			<Flex styles={{ gap: "30px" }}>
				<section>
					<Searchbar defaultText="전체검색" />
					<Post />
				</section>
				<Sidebar />
			</Flex>
		</main>
	);
};

export default Main;
