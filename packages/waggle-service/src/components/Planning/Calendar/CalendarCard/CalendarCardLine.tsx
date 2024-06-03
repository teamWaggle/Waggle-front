import { scheduleTextStyle } from "@/components/Planning/Calendar/CalendarCard/CalendarCardLine.style";
import { ScheduleModalContext } from "@/components/Planning/Calendar/CalendarCard/context/ScheduleModalContext";
import type { ScheduleType } from "@/types/planning";
import { format, isSameDay } from "date-fns";
import { useState } from "react";
import { Box } from "waggle-design-system";

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
    <ScheduleModalContext.Provider value={{ isOpenModal, closeModal }}>
      <Box
        key={schedule.boardId + dayString}
        css={scheduleTextStyle(schedule.teamColor, isSameDay(schedule.endDate, day))}
        onClick={() => handleScheduleOnclick()}
      >
        {isSameDay(schedule.startDate, day) ? schedule.title : ""}
      </Box>
      {isOpenModal && modal}
    </ScheduleModalContext.Provider>
  );
};

export default CalendarCardLine;
