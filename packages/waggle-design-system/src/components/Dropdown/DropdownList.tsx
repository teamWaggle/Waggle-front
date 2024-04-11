import { useContext } from "react";

import type { DropdonwListType } from "@/types/common";

import Box from "@/components/Box/Box";
import { DropdownProvider } from "@/components/Dropdown/Dropdown";
import { dropdownListStyle } from "@/components/Dropdown/Dropdown.style";

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
