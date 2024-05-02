import { useContext } from "react";

import type { DropdownButtonType } from "@/types/common";
import { DropdownContext } from "@/components/Dropdown/Dropdown";

const DropdownButton = ({ children, ...props }: DropdownButtonType) => {
  const { toggleDropdown } = useContext(DropdownContext);
  return (
    <button {...props} onClick={toggleDropdown}>
      {children}
    </button>
  );
};

export default DropdownButton;
