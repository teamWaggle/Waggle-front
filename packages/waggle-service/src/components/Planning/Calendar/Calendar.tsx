import { useMemo } from "react";

import { useRecoilValue } from "recoil";

import { Box } from "@/components/common";
import CalendarCard from "@/components/Planning/Calendar/CalendarCard/CalendarCard";
import CalendarHeader from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader";
import {
  startOfMonth,
  startOfWeek,
  addDays,
  isSameMonth,
  subDays,
  isSameDay,
  isWithinInterval,
} from "date-fns";

import useCalendar from "@/hooks/useCalendar";

import { scheduleModalSelector } from "@/recoil/selectors/modalSelector";

import generateCalendarPosition from "@/utils/generateCalendarPosition";

import { boxStyle, containerStyle } from "@/components/Planning/Calendar/Calendar.style";

const Calendar = () => {
  const { scheduleList, currentDate, handlePrevDate, handleNextDate } = useCalendar();

  const scheduleModals = useRecoilValue(scheduleModalSelector);

  const CalendarCards = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const startDate = subDays(startOfWeek(monthStart), -1);
    const days = Array.from({ length: 42 }, (_, index) => addDays(startDate, index));
    return days.map((day, index) => {
      const { row, column } = generateCalendarPosition(index);
      const daySchedules = scheduleList.filter(
        (schedule) =>
          isSameDay(schedule.startTime, day) ||
          isSameDay(schedule.endTime, day) ||
          isWithinInterval(day, { start: schedule.startTime, end: schedule.endTime })
      );
      const position = {
        row,
        column,
        index,
      };
      const daySchedulesWithPosition = daySchedules.map((schedule) => {
        return schedule;
      });
      return (
        <CalendarCard
          key={day.toString()}
          index={index}
          isSameMonth={isSameMonth(monthStart, day)}
          day={day}
          schedules={daySchedulesWithPosition}
          position={position}
        />
      );
    });
  }, [currentDate]);

  return (
    <>
      <CalendarHeader
        currentDate={currentDate}
        onClickNextDate={handleNextDate}
        onClickPrevDate={handlePrevDate}
      />
      <Box css={containerStyle}>
        <Box tag="main" css={boxStyle}>
          {CalendarCards}
        </Box>
        {scheduleModals.map((modal, index) => {
          const ModalComponent: React.ComponentType = modal.component || (() => null);
          return <ModalComponent key={scheduleModals[index].key} />;
        })}
      </Box>
    </>
  );
};

export default Calendar;
