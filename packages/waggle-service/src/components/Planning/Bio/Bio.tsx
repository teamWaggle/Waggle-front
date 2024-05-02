import { Flex } from "waggle-design-system";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Planning/Bio/Bio.style";
import { useCalendarSchedule } from "@/hooks/common/useCalendarSchedules";
import useCalendar from "@/hooks/common/useCalendar";

const Bio = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();
  const scheduleList = useCalendarSchedule(currentDate);
  return (
    <Flex
      tag="section"
      styles={{ direction: "column", align: "center", position: "relative" }}
      css={sectionStyle}
    >
      <Calendar
        scheduleList={scheduleList}
        currentDate={currentDate}
        handlePrevDate={handlePrevDate}
        handleNextDate={handleNextDate}
      />
    </Flex>
  );
};

export default Bio;
