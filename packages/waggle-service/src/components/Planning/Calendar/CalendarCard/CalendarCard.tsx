import type { PropsWithChildren } from "react";

import { Flex, Text } from "waggle-design-system";
import MoreButton from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreButton";
import MoreModal from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";
import { format } from "date-fns";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import type { ScheduleCalendarCardType } from "@/types/planning";

import {
  dateTextStyle,
  flexStyle,
  weekdayTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/CalendarCard.style";
import CalendarCardLine from "@/components/Planning/Calendar/CalendarCard/CalendarCardLine";

const weekday = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarCard = ({
  day,
  isSameMonth,
  schedules,
  position,
}: PropsWithChildren<ScheduleCalendarCardType>) => {
  const { index } = position;
  const schedulesSlice = schedules.slice(0, MAX_CALENDAR_CONTENT);
  const dayString = format(day, "d");

  return (
    <Flex
      tag="section"
      styles={{ align: "center", direction: "column", height: "100%" }}
      css={flexStyle}
    >
      <Text css={weekdayTextStyle}>{index < 7 ? weekday[index] : ""}</Text>
      <Text css={dateTextStyle(isSameMonth)}>{format(day, "d")}</Text>
      <Flex styles={{ direction: "column", width: "100%", height: "100%", border: "none" }}>
        {schedulesSlice.map((schedule) => (
          <CalendarCardLine
            key={schedule.boardId + dayString}
            day={day}
            schedule={schedule}
            modal={<ScheduleModal schedule={schedule} position={position} />}
          />
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
