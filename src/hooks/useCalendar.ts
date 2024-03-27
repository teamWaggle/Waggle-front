import { useState } from "react";

import { addMonths, subMonths } from "date-fns";

const useCalendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedStartDate, setSelectedStartDate] = useState(new Date());
	const [selectedEndDate, setSelectedEndDate] = useState(new Date());

	const editSelectedStartDate = (date: Date) => {
		setSelectedStartDate(date);
	};

	const editSelectedEndDate = (date: Date) => {
		setSelectedEndDate(date);
	};

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const editCurrentMonth = (date: Date) => {
		setCurrentMonth(date);
	};
	return {
		currentMonth,
		editCurrentMonth,
		selectedStartDate,
		selectedEndDate,
		handlePrevMonth,
		handleNextMonth,
		editSelectedStartDate,
		editSelectedEndDate,
	};
};
export default useCalendar;
