import { searchStyle, inputStyle, buttonStyle } from "./Searchbar.style";

import SearchButtonIcon from "@assets/svg/search-button.svg?react";

import Flex from "@components/common/Flex/Flex";

import SortButton from "../SortButton/SortButton";

const Searchbar = () => {
	return (
		<Flex styles={{ align: "center", gap: "30px" }}>
			<SortButton defaultText="전체검색" />
			<Flex styles={{ align: "center" }} css={searchStyle}>
				<input css={inputStyle} />
				<button css={buttonStyle}>
					<SearchButtonIcon />
				</button>
			</Flex>
		</Flex>
	);
};

export default Searchbar;
