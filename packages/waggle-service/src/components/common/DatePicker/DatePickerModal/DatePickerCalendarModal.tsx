import { useContext, useMemo, Fragment } from "react";

import { Flex, Box, Text, ModalContainer } from "waggle-design-system";

import LeftArrow from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrow from "@/assets/svg/sm-right-arrow.svg?react";

import { DatePickerContext } from "@/components/common/DatePicker/DatePicker";
import DatePickerCalendarCard from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarCard/DatePickerCalendarCard";

import { startOfMonth, addDays, format, getDay, getDaysInMonth } from "date-fns";

import { datePickerCalendarBoxStyle } from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarModal.style";

const weekday = ["일", "월", "화", "수", "목", "금", "토"];

const DatePickerCalendarModal = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useContext(DatePickerContext);
  const CalendarDateCards = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getDay(monthStart);
    const calendarArray = Array.from({ length: daysInMonth + firstDayOfMonth }, (_, i) => {
      if (i < firstDayOfMonth) {
        return "";
      }
      return addDays(monthStart, i - firstDayOfMonth);
    });
    return calendarArray.map((day, index) => {
      return (
        <Fragment key={day ? format(day, "yyyymd") : index}>
          <DatePickerCalendarCard day={day} />
        </Fragment>
      );
    });
  }, [currentDate]);

  return (
    <ModalContainer style={{ padding: "12px", width: "286px" }}>
      <Flex styles={{ align: "center", justify: "space-between", margin: "0 0 8px 12px" }}>
        <Text size="xSmall" style={{ fontSize: "14px" }}>
          {format(currentDate, "yyyy년 M월")}
        </Text>
        <Box>
          <LeftArrow onClick={handlePrevDate} />
          <RightArrow onClick={handleNextDate} />
        </Box>
      </Flex>
      <Box css={datePickerCalendarBoxStyle}>
        {weekday.map((day, index) => {
          return (
            <Flex style={{ justifyContent: "center", alignItems: "center" }} key={index}>
              {day}
            </Flex>
          );
        })}
        {CalendarDateCards}
      </Box>
    </ModalContainer>
  );
};

export default DatePickerCalendarModal;
