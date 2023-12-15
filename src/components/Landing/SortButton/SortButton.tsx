import { Theme } from "@/styles/Theme";

import Flex from "@components/common/Flex/Flex";

import { buttonStyle } from "./SortButton.style";

import SortArrowIcon from "@assets/svg/sort-arrow.svg?react";

import { sortButtonType } from "@type/sortButtonType";

const SortButton = ({ defaultText }: sortButtonType) => {
	return (
		<Flex
			styles={{
				align: "center",
				gap: "16px",
				padding: "12px 14px",
				borderRadius: "6px",
				border: `1px solid ${Theme.color.border}`,
			}}
		>
			<button css={buttonStyle}>{defaultText}</button>
			<SortArrowIcon />
		</Flex>
	);
};

export default SortButton;
