import { useContext, useEffect, useMemo } from "react";

import LeftArrow from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrow from "@/assets/svg/sm-right-arrow.svg?react";

import Box from "@/components/common/Box/Box";
import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import DatePickerCalendarCard from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarCard/DatePickerCalendarCard";
import Flex from "@/components/common/Flex/Flex";
import Text from "@/components/common/Text/Text";
import { startOfMonth, addDays, format, getDay, getDaysInMonth } from "date-fns";

import {
	datePickerCalendarBoxStyle,
	datePickerCalendarTitleStyle,
	datePickerModalBoxStyle,
	datePickerModalTitleBoxStyle,
} from "@/components/common/DatePicker/DatePickerModal/DatePickerModal.style";
const weekday = ["일", "월", "화", "수", "목", "금", "토"];

const DatePickerModal = () => {
	useEffect(() => {
		editCurrentMonth(selectedDate);
	}, []);

	const {
		modalClose,
		currentMonth,
		selectedDate,
		handlePrevMonth,
		handleNextMonth,
		editCurrentMonth,
	} = useContext(DatePickerProvider);

	const CalendarDateCards = useMemo(() => {
		const monthStart = startOfMonth(currentMonth);
		const daysInMonth = getDaysInMonth(currentMonth);
		const firstDayOfMonth = getDay(monthStart);

		const calendarArray = Array.from({ length: daysInMonth + firstDayOfMonth }, (_, i) => {
			if (i < firstDayOfMonth) {
				return "";
			}
			return addDays(monthStart, i - firstDayOfMonth);
		});
		return calendarArray.map((day) => {
			return <DatePickerCalendarCard modalClose={modalClose} day={day} />;
		});
	}, [currentMonth]);

	return (
		<Box css={datePickerModalBoxStyle}>
			<Flex css={datePickerModalTitleBoxStyle}>
				<Text css={datePickerCalendarTitleStyle} size="xSmall">
					{format(currentMonth, "yyyy년 M월")}
				</Text>
				<Box>
					<LeftArrow onClick={handlePrevMonth} />
					<RightArrow onClick={handleNextMonth} />
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
		</Box>
	);
};

export default DatePickerModal;
