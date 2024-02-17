import { CALENDAR_COLUNM_SIZE } from "@/constants/calendar";

export const generatePositionColumn = (index: number) => {
	return (CALENDAR_COLUNM_SIZE / 7) * Math.floor(index % 7);
};
