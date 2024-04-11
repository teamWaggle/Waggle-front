import type { ReactNode } from "react";
import { useRef } from "react";
import { createContext, useState } from "react";

import useClickOutSide from "@/hooks/useClickOutSide";

export const DropdownProvider = createContext<{
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
      <DropdownProvider.Provider value={{ toggleDropdown, isDropdownOpen }}>
        {children}
      </DropdownProvider.Provider>
    </section>
  );
};

export default Dropdown;
