import { Flex } from "@/components/common";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Team/CalendarSection/CalendarSection.style";
import useCalendar from "@/hooks/common/useCalendar";
import { useCalendarSchedule } from "@/hooks/common/useCalendarSchedules";

const CalendarSection = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();
  const scheduleList = useCalendarSchedule(currentDate);
  return (
    <Flex tag="section" css={sectionStyle("team_1")}>
      <Calendar
        scheduleList={scheduleList}
        currentDate={currentDate}
        handlePrevDate={handlePrevDate}
        handleNextDate={handleNextDate}
      />
    </Flex>
  );
};

export default CalendarSection;
