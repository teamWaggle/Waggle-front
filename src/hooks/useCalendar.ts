import { useState } from "react";

import { addMonths, subMonths } from "date-fns";

const useCalendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const editCurrentMonth = (date: Date) => {
		setCurrentMonth(date);
	};
	return { currentMonth, editCurrentMonth, handlePrevMonth, handleNextMonth };
};
export default useCalendar;
