import { useContext } from "react";

import Box from "@/components/common/Box/Box";
import { DropdownProvider } from "@/components/common/Dropdown/Dropdown";

import type { DropdonwListType } from "@/types/common";

import { dropdownListStyle } from "@/components/common/Dropdown/Dropdown.style";

const DropdownList = ({ children, ...props }: DropdonwListType) => {
	const { isDropdownOpen } = useContext(DropdownProvider);
	if (!isDropdownOpen) return null;

	return (
		<Box css={dropdownListStyle} {...props}>
			{children}
		</Box>
	);
};

export default DropdownList;
