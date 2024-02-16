import SearchButtonIcon from "@/assets/svg/search-button.svg?react";

import { Flex, Text } from "@/components/common";
import { SortButton } from "@/components/Landing";
import { sortButtonType } from "@/types/common";

import {
	searchStyle,
	inputStyle,
	buttonStyle,
	textStyle,
} from "@/components/Landing/Searchbar/Searchbar.style";

const Searchbar = ({ defaultText }: sortButtonType) => {
	return (
		<Flex styles={{ align: "center", gap: "50px" }}>
			<SortButton defaultText={defaultText} />
			<Flex styles={{ align: "center" }} css={searchStyle}>
				<input css={inputStyle} />
				<Text size="small" css={textStyle}>
					검색어를 입력해주세요
				</Text>
				<button css={buttonStyle}>
					<SearchButtonIcon />
				</button>
			</Flex>
		</Flex>
	);
};

export default Searchbar;
