import { CALENDAR_ROW_SIZE } from "@/constants/calendar";

export const generateCalendarPositionRow = (index: number) => {
	return (CALENDAR_ROW_SIZE / 7) * Math.floor(index / 7);
};
