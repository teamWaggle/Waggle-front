import Flex from "@/components/common/Design/Flex/Flex";

import type { DropDownItemType } from "@/types/common";

import { dropdownItemStyle } from "@/components/common/Design/Dropdown/Dropdown.style";

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
