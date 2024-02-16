import { format } from "date-fns";

import LeftArrowIcon from "@/assets/svg/left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow.svg?react";

import { Flex, Heading } from "@/components/common";

import {
	flexStyle,
	textStyle,
} from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader.style";

const CalendarHeader = ({
	currentMonth,
	onClickPrevMonth,
	onClickNextMonth,
}: {
	currentMonth: Date;
	onClickPrevMonth: () => void;
	onClickNextMonth: () => void;
}) => {
	return (
		<Flex tag={"section"} css={flexStyle}>
			<LeftArrowIcon onClick={onClickPrevMonth} style={{ cursor: "pointer" }} />
			<Heading css={textStyle}>
				{format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
			</Heading>
			<RightArrowIcon onClick={onClickNextMonth} style={{ cursor: "pointer" }} />
		</Flex>
	);
};

export default CalendarHeader;
