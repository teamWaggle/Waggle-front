import { Flex } from "@/components/common";
import Calendar from "@/components/Planning/Calendar/Calendar";

import { sectionStyle } from "@/components/Planning/Bio/Bio.style";

const Bio = () => {
  return (
    <Flex tag="section" css={sectionStyle}>
      <Calendar />
    </Flex>
  );
};

export default Bio;
