import { useContext, useEffect, useMemo } from "react";

import LeftArrow from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrow from "@/assets/svg/sm-right-arrow.svg?react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import DatePickerCalendarCard from "@/components/common/DatePicker/DatePickerModal/Calendar/DatePickerCalendarCard/DatePickerCalendarCard";
import ModalContainer from "@/components/common/DatePicker/DatePickerModal/ModalContainer";
import Box from "@/components/common/Design/Box/Box";
import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import { startOfMonth, addDays, format, getDay, getDaysInMonth } from "date-fns";

import {
	datePickerCalendarBoxStyle,
	datePickerCalendarTitleStyle,
	datePickerModalTitleBoxStyle,
} from "@/components/common/DatePicker/DatePickerModal/Calendar/DatePickerCalendarModal.style";

const weekday = ["일", "월", "화", "수", "목", "금", "토"];

const DatePickerCalendarModal = () => {
	useEffect(() => {
		editCurrentMonth(selectedDate);
	}, []);

	const { currentMonth, selectedDate, handlePrevMonth, handleNextMonth, editCurrentMonth } =
		useContext(DatePickerProvider);

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
			return <DatePickerCalendarCard day={day} />;
		});
	}, [currentMonth]);

	return (
		<ModalContainer style={{ padding: "12px", width: "286px" }}>
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
		</ModalContainer>
	);
};

export default DatePickerCalendarModal;
