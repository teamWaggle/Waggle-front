import { createContext } from "react";

import DatePickerTrigger from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger";

import useCalendar from "@/hooks/useCalendar";
import useModalTrigger from "@/hooks/useModalTrigger";

import type { DatePickerFormatType } from "@/types/planning";
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
	formatType: DatePickerFormatType | undefined;
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
	formatType: undefined,
});
const DatePicker = ({
	selectedDate,
	editSelectedDate,
	children,
	limitDate,
	formatType,
}: {
	selectedDate: Date;
	editSelectedDate: (date: Date) => void;
	children: React.ReactNode;
	limitDate?: Date;
	formatType?: DatePickerFormatType;
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
				formatType,
			}}
		>
			<DatePickerTrigger>{isTrigger && children}</DatePickerTrigger>
		</DatePickerProvider.Provider>
	);
};
export default DatePicker;
