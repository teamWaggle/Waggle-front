import { scheduleTextStyle } from "@/components/Planning/Calendar/CalendarCard/CalendarCardLine.style";
import type { ScheduleType } from "@/types/planning";
import { format, isSameDay } from "date-fns";
import { useState } from "react";
import { createContext } from "react";
import { Box } from "waggle-design-system";

export const CalendarCardLineContext = createContext({
  isOpenModal: false,
  closeModal: () => {},
});
const CalendarCardLine = ({
  modal,
  schedule,
  day,
}: {
  modal: React.ReactNode;
  schedule: ScheduleType;
  day: Date;
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dayString = format(day, "d");

  const handleScheduleOnclick = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <CalendarCardLineContext.Provider value={{ isOpenModal, closeModal }}>
      <Box
        key={schedule.boardId + dayString}
        css={scheduleTextStyle(schedule.teamColor, isSameDay(schedule.endDate, day))}
        onClick={() => handleScheduleOnclick()}
      >
        {isSameDay(schedule.startDate, day) ? schedule.title : ""}
      </Box>
      {isOpenModal && modal}
    </CalendarCardLineContext.Provider>
  );
};

export default CalendarCardLine;
