import { useContext } from "react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Design/Flex/Flex";
import { format, isSameDay } from "date-fns";

import { datePickerCalendarCardStyle } from "@/components/common/DatePicker/DatePickerModal/Calendar/DatePickerCalendarCard/DatePickerCalendarCard.style";

const DatePickerCalendarCard = ({ day }: { day: Date | "" }) => {
	const { editSelectedDate, selectedDate, modalClose } = useContext(DatePickerProvider);
	const handleOnclick = () => {
		if (day) {
			editSelectedDate(day);
			modalClose();
		}
	};
	const isSelected = isSameDay(day, selectedDate);
	return (
		<Flex onClick={handleOnclick} css={datePickerCalendarCardStyle(day, isSelected)}>
			{day && format(day, "d")}
		</Flex>
	);
};

export default DatePickerCalendarCard;
