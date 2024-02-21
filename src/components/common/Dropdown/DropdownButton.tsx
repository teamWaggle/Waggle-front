import { useContext } from "react";

import { DropdownProvider } from "@/components/common/Dropdown/Dropdown";

import type { DropdownButtonType } from "@/types/common";

const DropdownButton = ({ children, ...props }: DropdownButtonType) => {
	const { toggleDropdown } = useContext(DropdownProvider);
	return (
		<button {...props} onClick={toggleDropdown}>
			{children}
		</button>
	);
};

export default DropdownButton;
