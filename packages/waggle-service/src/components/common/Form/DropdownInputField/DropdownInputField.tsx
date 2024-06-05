import type { FieldPath, FieldValues } from "react-hook-form";
import { Box } from "waggle-design-system";
import { useControlledForm } from "@/hooks/common/useControlledForm";
import { useState, useMemo, useRef } from "react";
import useClickOutSide from "@/hooks/common/useClickOutSide";

import {
  dropdownBoxStyle,
  dropdownButtonStyle,
  dropdownItemDescriptionStyle,
  dropdownItemStyle,
  dropdownItemTextStyle,
  dropdownItemTitleStyle,
  dropdownListStyle,
  dropdownSelectedItemStyle,
} from "@/components/common/Form/DropdownInputField/DropdownInputField.style";
import DownArrowIcon from "@/assets/svg/downArrow.svg?react";

export interface TeamOptionType {
  name: string;
  value: boolean;
  icon: React.ReactNode;
  description: string;
}

const DropdownInputField = ({
  name,
  options,
}: {
  name: FieldPath<FieldValues>;
  options: TeamOptionType[];
}) => {
  const { field } = useControlledForm(name);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const getVisibilityOption = useMemo(() => {
    const option = options.find((option) => option.value === field.value);
    return option;
  }, [field.value]);

  useClickOutSide(ref, () => setIsOpen(false));

  const handleOptionToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (item: TeamOptionType) => {
    field.onChange({ target: { value: item.value } });
    setIsOpen(false);
  };

  return (
    <Box css={dropdownBoxStyle} ref={ref}>
      <Box
        css={dropdownButtonStyle}
        onClick={handleOptionToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-list"
      >
        {getVisibilityOption?.icon}
        {getVisibilityOption?.name}
        <DownArrowIcon />
      </Box>
      {isOpen && (
        <Box css={dropdownListStyle} id="dropdown-list" role="listbox">
          {options.map((option) => (
            <Box
              role="option"
              key={option.name}
              css={dropdownItemStyle}
              onClick={() => handleOptionClick(option)}
              aria-selected={field.value === option.value}
            >
              <Box key={option.name} css={dropdownItemTitleStyle}>
                <Box css={dropdownItemTextStyle}>
                  {option.icon}
                  {option.name}
                </Box>
                <Box css={dropdownItemDescriptionStyle}>{option.description}</Box>
              </Box>
              <Box css={dropdownSelectedItemStyle(field.value === option.value)} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default DropdownInputField;
