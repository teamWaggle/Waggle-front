import { CALENDAR_COLUNM_SIZE } from "@/constants/calendar";
import { CALENDAR_ROW_SIZE } from "@/constants/calendar";

const generateCalendarPosition = (index: number) => {
  const row = (CALENDAR_ROW_SIZE / 7) * Math.floor(index / 7);
  const column = (CALENDAR_COLUNM_SIZE / 7) * Math.floor(index % 7);
  return { row, column };
};

export default generateCalendarPosition;
