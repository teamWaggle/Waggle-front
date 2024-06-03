import { ScheduleModalContext } from "@/components/Planning/Calendar/CalendarCard/context/ScheduleModalContext";
import { moreModalScheduleTextStyle } from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal.style";
import type { ScheduleType } from "@/types/planning";
import { useState } from "react";
import { Box } from "waggle-design-system";

const MoreModalLine = ({ modal, schedule }: { modal: React.ReactNode; schedule: ScheduleType }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleScheduleOnclick = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <ScheduleModalContext.Provider value={{ isOpenModal, closeModal }}>
      <Box css={moreModalScheduleTextStyle(schedule.teamColor)} onClick={handleScheduleOnclick}>
        {schedule.title}
      </Box>
      {isOpenModal && modal}
    </ScheduleModalContext.Provider>
  );
};

export default MoreModalLine;
