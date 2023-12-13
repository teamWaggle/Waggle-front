import {
	searchStyle,
	inputStyle,
	buttonStyle,
	textStyle,
} from "./Searchbar.style";

import SearchArrowIcon from "@assets/svg/search-arrow.svg?react";
import SearchButtonIcon from "@assets/svg/search-button.svg?react";

import Flex from "@components/common/Flex/Flex";

const Searchbar = () => {
	return (
		<Flex styles={{ align: "center", gap: "30px" }}>
			<Flex styles={{ align: "center", gap: "8px" }}>
				<p css={textStyle}>전체 검색</p>
				<SearchArrowIcon />
			</Flex>
			<div css={searchStyle}>
				<input css={inputStyle} />
				<button css={buttonStyle}>
					<SearchButtonIcon />
				</button>
			</div>
		</Flex>
	);
};

export default Searchbar;
