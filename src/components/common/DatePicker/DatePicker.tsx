import { createContext } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import DatePickerTrigger from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger";

import useCalendar from "@/hooks/useCalendar";
import useModalTrigger from "@/hooks/useModalTrigger";

export const DatePickerContext = createContext<{
	modalClose: () => void;
	selectedDate: Date;
	currentDate: Date;
	handlePrevDate: () => void;
	handleNextDate: () => void;
	editCurrentDate: (date: Date) => void;
	editSelectedDate: (date: Date) => void;
	handleTriggerOnClick: () => void;
	limitDate?: Date;
	name: FieldPath<FieldValues>;
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
	name: "",
});
const DatePicker = ({
	selectedDate,
	editSelectedDate,
	children,
	limitDate,
	name,
}: {
	selectedDate: Date;
	editSelectedDate: (date: Date) => void;
	children: React.ReactNode;
	limitDate?: Date;
	name: FieldPath<FieldValues>;
}) => {
	const { currentDate, editCurrentDate, handlePrevDate, handleNextDate } = useCalendar();
	const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();

	return (
		<DatePickerContext.Provider
			value={{
				name,
				modalClose,
				currentDate,
				editCurrentDate,
				handlePrevDate,
				handleNextDate,
				editSelectedDate,
				selectedDate,
				handleTriggerOnClick,
				limitDate,
			}}
		>
			<DatePickerTrigger>{isTrigger && children}</DatePickerTrigger>
		</DatePickerContext.Provider>
	);
};
export default DatePicker;
