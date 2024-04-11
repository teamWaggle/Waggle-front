import { useContext } from "react";

import type { DropdownButtonType } from "@/types/common";

import { DropdownProvider } from "@/components/Dropdown/Dropdown";

const DropdownButton = ({ children, ...props }: DropdownButtonType) => {
  const { toggleDropdown } = useContext(DropdownProvider);
  return (
    <button {...props} onClick={toggleDropdown}>
      {children}
    </button>
  );
};

export default DropdownButton;
