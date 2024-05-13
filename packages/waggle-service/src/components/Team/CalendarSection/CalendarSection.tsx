import { Flex } from "waggle-design-system";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Team/CalendarSection/CalendarSection.style";
import useCalendar from "@/hooks/common/useCalendar";
import { useCalendarSchedule } from "@/hooks/common/useCalendarSchedules";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const CalendarSection = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();
  const scheduleList = useCalendarSchedule(currentDate);
  const teamId = useParamsTeamId();
  const { teamColor } = useTeamInfo(teamId);
  return (
    <Flex
      tag="section"
      styles={{ position: "relative", direction: "column", align: "center" }}
      css={sectionStyle(teamColor)}
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

export default CalendarSection;
