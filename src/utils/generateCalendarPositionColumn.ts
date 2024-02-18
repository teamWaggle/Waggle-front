import { CALENDAR_COLUNM_SIZE } from "@/constants/calendar";

export const generateCalendarPositionColumn = (index: number) => {
	return (CALENDAR_COLUNM_SIZE / 7) * Math.floor(index % 7);
};
