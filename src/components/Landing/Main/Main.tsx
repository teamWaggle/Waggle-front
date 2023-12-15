import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SortButton from "../SortButton/SortButton";
import Post from "../Post/Post";

import Flex from "@components/common/Flex/Flex";

import { mainStyle } from "./Main.styles";

import Notification from "@components/common/Notification/Notification";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex styles={{ gap: "46px" }}>
				<section>
					<Searchbar defaultText="전체검색" />
					<Flex styles={{ justify: "flex-end", margin: "30px 0 92px" }}>
						<SortButton defaultText="인기순" />
					</Flex>
					<Post />
				</section>
				<Sidebar />
			</Flex>
			<Notification />
		</div>
	);
};

export default Main;
