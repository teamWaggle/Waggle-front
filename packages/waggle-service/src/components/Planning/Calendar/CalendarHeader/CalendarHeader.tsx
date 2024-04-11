import LeftArrowIcon from "@/assets/svg/left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow.svg?react";

import { Flex, Heading } from "@/components/common";
import { format } from "date-fns";

import {
  flexStyle,
  textStyle,
} from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader.style";

const CalendarHeader = ({
  currentDate,
  onClickPrevDate,
  onClickNextDate,
}: {
  currentDate: Date;
  onClickPrevDate: () => void;
  onClickNextDate: () => void;
}) => {
  return (
    <Flex tag="section" css={flexStyle}>
      <LeftArrowIcon onClick={onClickPrevDate} style={{ cursor: "pointer" }} />
      <Heading css={textStyle}>
        {format(currentDate, "yyyy")}년 {format(currentDate, "M")}월
      </Heading>
      <RightArrowIcon onClick={onClickNextDate} style={{ cursor: "pointer" }} />
    </Flex>
  );
};

export default CalendarHeader;
