import type { ReactNode } from "react";

import { Dropdown } from "waggle-design-system";

import { dropdownButtonStyle } from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/OptionDropdown/OptionDropdown.style";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

const OptionDropdown = ({
  children,
  handleCancelSchedule,
  handleDeleteSchedule,
  handleEditSchedule,
  scheduleOwnerId,
}: {
  children: ReactNode;
  handleCancelSchedule: () => void;
  handleDeleteSchedule: () => void;
  handleEditSchedule: () => void;
  scheduleOwnerId: number;
}) => {
  const { memberId } = useMemberInfoSaveQuery();
  return (
    <Dropdown>
      <Dropdown.Button css={dropdownButtonStyle}>{children}</Dropdown.Button>
      <Dropdown.List>
        {scheduleOwnerId !== memberId && (
          <Dropdown.Item onClick={handleCancelSchedule}>일정 취소</Dropdown.Item>
        )}
        {scheduleOwnerId === memberId && (
          <>
            <Dropdown.Item onClick={handleDeleteSchedule}>일정 삭제</Dropdown.Item>
            <Dropdown.Item onClick={handleEditSchedule}>일정 수정</Dropdown.Item>
          </>
        )}
      </Dropdown.List>
    </Dropdown>
  );
};

export default OptionDropdown;
