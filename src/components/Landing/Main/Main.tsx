import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SortButton from "../SortButton/SortButton";
import Post from "../Post/Post";

import Flex from "@components/common/Flex/Flex";

import { mainStyle, notiStyle } from "./Main.styles";

import NotiIcon from "@assets/svg/notification.svg?react";

const Main = () => {
	return (
		<div css={mainStyle}>
			<Flex styles={{ gap: "46px" }}>
				<section>
					<Searchbar />
					<Flex styles={{ justify: "flex-end", margin: "30px 0 92px" }}>
						<SortButton />
					</Flex>
					<Post />
				</section>
				<Sidebar />
			</Flex>
			<div css={notiStyle}>
				<NotiIcon />
			</div>
		</div>
	);
};

export default Main;
