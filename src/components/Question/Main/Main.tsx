import Flex from "@components/common/Flex/Flex";

import Searchbar from "@components/Landing/Searchbar/Searchbar";

import { mainStyle } from "./Main.style";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex styles={{ gap: "46px" }}>
				<section>
					<Searchbar />
				</section>
			</Flex>
		</div>
	);
};

export default Main;
