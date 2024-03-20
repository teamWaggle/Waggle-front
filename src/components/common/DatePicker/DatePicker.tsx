import { createContext } from "react";

import DatePickerTrigger from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger";

import useCalendar from "@/hooks/useCalendar";
import useModalTrigger from "@/hooks/useModalTrigger";
export const DatePickerProvider = createContext<{
	modalClose: () => void;
	selectedDate: Date;
	currentMonth: Date;
	handlePrevMonth: () => void;
	handleNextMonth: () => void;
	editCurrentMonth: (date: Date) => void;
	editSelectedDate: (date: Date) => void;
	handleTriggerOnClick: () => void;
	limitDate?: Date;
}>({
	modalClose: () => {},
	selectedDate: new Date(),
	currentMonth: new Date(),
	handlePrevMonth: () => {},
	handleNextMonth: () => {},
	editCurrentMonth: () => {},
	editSelectedDate: () => {},
	handleTriggerOnClick: () => {},
	limitDate: new Date(),
});
const DatePicker = ({
	selectedDate,
	editSelectedDate,
	children,
	limitDate,
}: {
	selectedDate: Date;
	editSelectedDate: (date: Date) => void;
	children: React.ReactNode;
	limitDate?: Date;
}) => {
	const { currentMonth, editCurrentMonth, handlePrevMonth, handleNextMonth } = useCalendar();
	const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();

	return (
		<DatePickerProvider.Provider
			value={{
				modalClose,
				currentMonth,
				editCurrentMonth,
				handlePrevMonth,
				handleNextMonth,
				editSelectedDate,
				selectedDate,
				handleTriggerOnClick,
				limitDate,
			}}
		>
			<DatePickerTrigger>{isTrigger && children}</DatePickerTrigger>
		</DatePickerProvider.Provider>
	);
};
export default DatePicker;
