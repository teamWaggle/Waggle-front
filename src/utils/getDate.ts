import { format } from "date-fns";

export const getDate = () => {
	const getCurrentYear = (date: Date) => date.getFullYear();
	const getCurrentMonth = (date: Date) => date.getMonth() + 1;
	const getTime = (date: Date) => format(date, "HH:mm");
	const getyyyyMMdd = (date: Date) => format(date, "yyyy-MM-dd");
	return { getCurrentYear, getCurrentMonth, getTime, getyyyyMMdd };
};
