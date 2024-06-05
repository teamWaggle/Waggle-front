import { ScheduleModalContext } from "@/components/Planning/Calendar/CalendarCard/context/ScheduleModalContext";
import { moreModalScheduleTextStyle } from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal.style";

import type { ScheduleType } from "@/types/planning";
import { useState } from "react";
import { Box } from "waggle-design-system";

const MoreModalLine = ({ schedule, modal }: { schedule: ScheduleType; modal: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleScheduleOnclick = () => {
    setIsOpenModal(true);
  };

  return (
    <ScheduleModalContext.Provider value={{ isOpenModal, closeModal }}>
      <Box onClick={handleScheduleOnclick} css={moreModalScheduleTextStyle(schedule.teamColor)}>
        {schedule.title}
      </Box>
      {isOpenModal && modal}
    </ScheduleModalContext.Provider>
  );
};

export default MoreModalLine;
