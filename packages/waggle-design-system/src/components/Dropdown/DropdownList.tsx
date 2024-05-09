import { useContext } from "react";

import Box from "@/components/Box/Box";

import type { DropdonwListType } from "@/types/common";
import { DropdownContext } from "@/components/Dropdown/Dropdown";
import { dropdownListStyle } from "@/components/Dropdown/Dropdown.style";

const DropdownList = ({ children, ...props }: DropdonwListType) => {
  const { isDropdownOpen } = useContext(DropdownContext);
  if (!isDropdownOpen) return null;

  return (
    <Box css={dropdownListStyle} {...props}>
      {children}
    </Box>
  );
};

export default DropdownList;
