import { LayoutDiv, FilterDiv, SearchDiv } from "./Searchbar.style";

import SearchArrowIcon from "@assets/svg/search-arrow.svg?react";
import SearchButtonIcon from "@assets/svg/search-button.svg?react";

const Searchbar = () => {
	return (
		<LayoutDiv>
			<FilterDiv>
				<p>전체 검색</p>
				<SearchArrowIcon />
			</FilterDiv>
			<SearchDiv>
				<input />
				<button>
					<SearchButtonIcon />
				</button>
			</SearchDiv>
		</LayoutDiv>
	);
};

export default Searchbar;
