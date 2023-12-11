import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SortButton from "../SortButton/SortButton";
import Post from "../Post/Post";

import Flex from "@components/common/Flex/Flex";

import { mainStyle } from "./Main.styles";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex>
				<section>
					<Searchbar />
					<Flex styles={{ justify: "flex-end", margin: "30px 0 92px" }}>
						<SortButton />
					</Flex>
					<Post />
				</section>
				<Sidebar />
			</Flex>
		</div>
	);
};

export default Main;
