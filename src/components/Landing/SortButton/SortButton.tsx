import { LayoutDiv } from "./SortButton.style";

import SortArrowIcon from "@assets/svg/sort-arrow.svg?react";

const SortButton = () => {
	return (
		<LayoutDiv>
			<p>인기순</p>
			<SortArrowIcon />
		</LayoutDiv>
	);
};

export default SortButton;
