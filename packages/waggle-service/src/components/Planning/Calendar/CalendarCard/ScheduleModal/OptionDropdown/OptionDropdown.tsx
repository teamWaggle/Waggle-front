import type { ReactNode } from "react";

import { Dropdown, DropdownButton, DropdownList, DropdownItem } from "@/components/common";

import { dropdownButtonStyle } from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/OptionDropdown/OptionDropdown.style";

const OptionDropdown = ({ children }: { children: ReactNode }) => {
  return (
    <Dropdown>
      <DropdownButton css={dropdownButtonStyle}>{children}</DropdownButton>
      <DropdownList>
        <DropdownItem onClick={() => {}}>일정 삭제</DropdownItem>
        <DropdownItem>일정 취소</DropdownItem>
        <DropdownItem>일정 수정</DropdownItem>
        <DropdownItem>권한 위임</DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};

export default OptionDropdown;
