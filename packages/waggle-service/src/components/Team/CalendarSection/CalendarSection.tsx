import { Flex } from "@/components/common";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Team/CalendarSection/CalendarSection.style";

const CalendarSection = () => {
  return (
    <Flex tag="section" css={sectionStyle("team_1")}>
      <Calendar />
    </Flex>
  );
};

export default CalendarSection;
