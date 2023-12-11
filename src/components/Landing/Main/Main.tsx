import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SortButton from "../SortButton/SortButton";

import Flex from "@components/common/Flex/Flex";

import { mainStyle } from "./Main.styles";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex>
				<section>
					<Searchbar />
					<Flex styles={{ justify: "flex-end", marginTop: "30px" }}>
						<SortButton />
					</Flex>
				</section>
				<Sidebar />
			</Flex>
		</div>
	);
};

export default Main;
