import { Box, Flex, Text } from "@/components/common";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";
import { format } from "date-fns";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import useModal from "@/hooks/useModal";

import type { MoreModalType } from "@/types/modal";
import type { ScheduleType } from "@/types/planning";

import {
  moreModalContainerStyle,
  moreModalDateStyle,
  moreModalDayStyle,
  moreModalScheduleTextStyle,
  moreModalScheduleBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal.style";

const Week = ["일", "월", "화", "수", "목", "금", "토"];

const MoreModal = ({ day, schedules, position }: MoreModalType) => {
  const { openScheduleModal } = useModal();

  const handleScheduleOnclick = (schedule: ScheduleType) => {
    openScheduleModal({
      key: format(day, "d"),
      component: () => <ScheduleModal schedule={schedule} position={position} />,
    });
  };

  const schedulesSlice = schedules.slice(MAX_CALENDAR_CONTENT);
  return (
    <Flex css={moreModalContainerStyle}>
      <Text css={moreModalDayStyle}>{Week[day.getDay()]}</Text>
      <Text css={moreModalDateStyle}>{day.getDate()}</Text>
      <Box css={moreModalScheduleBoxStyle}>
        {schedulesSlice.map((schedule, i) => (
          <Box
            key={i}
            css={moreModalScheduleTextStyle(schedule.teamColor)}
            onClick={() => handleScheduleOnclick(schedule)}
          >
            {schedule.title}
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default MoreModal;
