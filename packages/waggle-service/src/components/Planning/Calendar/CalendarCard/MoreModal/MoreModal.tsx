import { Box, Flex, Text } from "waggle-design-system";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import type { MoreModalType } from "@/types/modal";

import {
  moreModalContainerStyle,
  moreModalDateStyle,
  moreModalDayStyle,
  moreModalScheduleBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal.style";
import MoreModalLine from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModalLine";

const Week = ["일", "월", "화", "수", "목", "금", "토"];

const MoreModal = ({ day, schedules, position }: MoreModalType) => {
  const schedulesSlice = schedules.slice(MAX_CALENDAR_CONTENT);
  return (
    <Flex
      styles={{
        position: "absolute",
        align: "center",
        direction: "column",
        width: "200px",
        borderRadius: "10px",
        padding: "0 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      css={moreModalContainerStyle}
    >
      <Text css={moreModalDayStyle}>{Week[day.getDay()]}</Text>
      <Text css={moreModalDateStyle}>{day.getDate()}</Text>
      <Box css={moreModalScheduleBoxStyle}>
        {schedulesSlice.map((schedule, i) => (
          <MoreModalLine
            key={i}
            schedule={schedule}
            modal={<ScheduleModal schedule={schedule} isMoreModal position={position} />}
          />
        ))}
      </Box>
    </Flex>
  );
};

export default MoreModal;
