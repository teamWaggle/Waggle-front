import type { ReactNode } from "react";

import { Dropdown } from "@/components/common";

import { dropdownButtonStyle } from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/OptionDropdown/OptionDropdown.style";

const OptionDropdown = ({
  children,
  handleCancelSchedule,
  handleDeleteSchedule,
  handleEditSchedule,
}: {
  children: ReactNode;
  handleCancelSchedule: () => void;
  handleDeleteSchedule: () => void;
  handleEditSchedule: () => void;
}) => {
  return (
    <Dropdown>
      <Dropdown.Button css={dropdownButtonStyle}>{children}</Dropdown.Button>
      <Dropdown.List>
        <Dropdown.Item onClick={handleDeleteSchedule}>일정 삭제</Dropdown.Item>
        <Dropdown.Item onClick={handleCancelSchedule}>일정 취소</Dropdown.Item>
        <Dropdown.Item onClick={handleEditSchedule}>일정 수정</Dropdown.Item>
        <Dropdown.Item>권한 위임</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default OptionDropdown;
