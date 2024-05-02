import { Flex } from "waggle-design-system";

import type { DropDownItemType } from "@/types/common";

import { dropdownItemStyle } from "@/components/common/Dropdown/Dropdown.style";

const DropdownItem = ({ children, icon, ...props }: DropDownItemType) => {
  return (
    <Flex
      styles={{ align: "center", justify: "center", gap: "4px" }}
      css={dropdownItemStyle}
      {...props}
    >
      {icon}
      {children}
    </Flex>
  );
};

export default DropdownItem;
