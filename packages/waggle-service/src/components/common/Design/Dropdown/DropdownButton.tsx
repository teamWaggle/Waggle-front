import { useContext } from "react";

import { DropdownContext } from "@/components/common/Design/Dropdown/Dropdown";

import type { DropdownButtonType } from "@/types/common";

const DropdownButton = ({ children, ...props }: DropdownButtonType) => {
  const { toggleDropdown } = useContext(DropdownContext);
  return (
    <button {...props} onClick={toggleDropdown}>
      {children}
    </button>
  );
};

export default DropdownButton;
