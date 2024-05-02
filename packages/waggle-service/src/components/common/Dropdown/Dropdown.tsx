import type { ReactNode } from "react";
import { useRef } from "react";
import { createContext, useState } from "react";

import useClickOutSide from "@/hooks/common/useClickOutSide";
import DropdownButton from "@/components/common/Dropdown/DropdownButton";
import DropdownList from "@/components/common/Dropdown/DropdownList";
import DropdownItem from "@/components/common/Dropdown/DropdownItem";

export const DropdownContext = createContext<{
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}>({ isDropdownOpen: false, toggleDropdown: () => {} });

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownRef = useRef(null);

  useClickOutSide(dropdownRef, handleCloseDropdown);

  return (
    <section ref={dropdownRef}>
      <DropdownContext.Provider value={{ toggleDropdown, isDropdownOpen }}>
        {children}
      </DropdownContext.Provider>
    </section>
  );
};

export default Dropdown;
Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;
