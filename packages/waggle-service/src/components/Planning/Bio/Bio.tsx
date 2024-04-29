import { Flex } from "@/components/common";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Planning/Bio/Bio.style";
import { useCalendarSchedule } from "@/hooks/common/useCalendarSchedules";
import useCalendar from "@/hooks/common/useCalendar";

const Bio = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();
  const scheduleList = useCalendarSchedule(currentDate);
  return (
    <Flex tag="section" css={sectionStyle}>
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
