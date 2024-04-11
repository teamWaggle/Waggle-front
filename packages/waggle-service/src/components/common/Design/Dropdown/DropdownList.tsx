import { useContext } from "react";

import Box from "@/components/common/Design/Box/Box";
import { DropdownProvider } from "@/components/common/Design/Dropdown/Dropdown";

import type { DropdonwListType } from "@/types/common";

import { dropdownListStyle } from "@/components/common/Design/Dropdown/Dropdown.style";

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
