import type { PropsWithChildren } from "react";

import { Box, Flex, Text } from "@/components/common";
import MoreButton from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreButton";
import MoreModal from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";
import { format, isSameDay } from "date-fns";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import useModal from "@/hooks/useModal";

import type { ScheduleCalendarCardType, ScheduleType } from "@/types/planning";

import {
  dateTextStyle,
  flexStyle,
  scheduleFlexBox,
  scheduleTextStyle,
  weekdayTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/CalendarCard.style";

const weekday = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarCard = ({
  day,
  isSameMonth,
  schedules,
  position,
}: PropsWithChildren<ScheduleCalendarCardType>) => {
  const { index } = position;
  const { openScheduleModal } = useModal();
  const schedulesSlice = schedules.slice(0, MAX_CALENDAR_CONTENT);
  const dayString = format(day, "d");

  const handleScheduleOnclick = (schedule: ScheduleType) => {
    openScheduleModal({
      key: format(day, "d"),
      component: () => <ScheduleModal schedule={schedule} position={position} />,
    });
  };
  return (
    <Flex tag="section" css={flexStyle}>
      <Text css={weekdayTextStyle}>{index < 7 ? weekday[index] : ""}</Text>
      <Text css={dateTextStyle(isSameMonth)}>{format(day, "d")}</Text>
      <Flex css={scheduleFlexBox}>
        {schedulesSlice.map((schedule, i) => (
          <Box
            key={schedule.boardId + dayString}
            css={scheduleTextStyle(schedulesSlice[i].teamColor, isSameDay(schedule.endTime, day))}
            onClick={() => handleScheduleOnclick(schedule)}
          >
            {isSameDay(schedule.startTime, day) ? schedule.title : ""}
          </Box>
        ))}
        {schedules.length > 2 && (
          <MoreButton schedules={schedules}>
            <MoreModal day={day} schedules={schedules} position={position} />
          </MoreButton>
        )}
      </Flex>
    </Flex>
  );
};

export default CalendarCard;
