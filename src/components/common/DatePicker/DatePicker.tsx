import { createContext } from "react";

import DatePickerTrigger from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger";

import useCalendar from "@/hooks/useCalendar";
import useModalTrigger from "@/hooks/useModalTrigger";

import type { DatePickerFormatType } from "@/types/planning";
export const DatePickerProvider = createContext<{
	modalClose: () => void;
	selectedDate: Date;
	currentDate: Date;
	handlePrevDate: () => void;
	handleNextDate: () => void;
	editCurrentDate: (date: Date) => void;
	editSelectedDate: (date: Date) => void;
	handleTriggerOnClick: () => void;
	limitDate?: Date;
	formatType: DatePickerFormatType | undefined;
}>({
	modalClose: () => {},
	selectedDate: new Date(),
	currentDate: new Date(),
	handlePrevDate: () => {},
	handleNextDate: () => {},
	editCurrentDate: () => {},
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
	const { currentDate, editCurrentDate, handlePrevDate, handleNextDate } = useCalendar();
	const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();

	return (
		<DatePickerProvider.Provider
			value={{
				modalClose,
				currentDate,
				editCurrentDate,
				handlePrevDate,
				handleNextDate,
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
