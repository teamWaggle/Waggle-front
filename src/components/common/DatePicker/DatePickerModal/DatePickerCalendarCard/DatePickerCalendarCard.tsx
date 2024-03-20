import { useContext } from "react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Flex/Flex";
import { format, isSameDay } from "date-fns";

import { datePickerCalendarCardStyle } from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarCard/DatePickerCalendarCard.style";

const DatePickerCalendarCard = ({
	day,
	modalClose,
}: {
	day: Date | "";
	modalClose: () => void;
}) => {
	const { editSelectedDate, selectedDate } = useContext(DatePickerProvider);
	const handleOnclick = () => {
		if (day) {
			editSelectedDate(day);
			modalClose();
		}
	};
	const isSelected = isSameDay(day, selectedDate);
	const today = isSameDay(day, new Date());
	return (
		<Flex onClick={handleOnclick} css={datePickerCalendarCardStyle(today, isSelected)}>
			{day && format(day, "d")}
		</Flex>
	);
};

export default DatePickerCalendarCard;
