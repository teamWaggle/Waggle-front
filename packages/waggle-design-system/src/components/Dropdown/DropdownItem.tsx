import type { DropDownItemType } from "@/types/common";

import { dropdownItemStyle } from "@/components/Dropdown/Dropdown.style";
import Flex from "@/components/Flex/Flex";

const DropdownItem = ({ children, icon, ...props }: DropDownItemType) => {
  return (
    <Flex
      css={dropdownItemStyle}
      styles={{ gap: "4px", align: "center", justify: "center" }}
      {...props}
    >
      {icon}
      {children}
    </Flex>
  );
};

export default DropdownItem;
