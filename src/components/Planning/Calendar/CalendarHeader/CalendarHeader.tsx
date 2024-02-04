import { format } from "date-fns";

import LeftArrowIcon from "@/assets/svg/left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow.svg?react";
import { Heading } from "@/components/common";

import { textStyle } from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader.style";

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
		<>
			<LeftArrowIcon onClick={onClickPrevMonth} style={{ cursor: "pointer" }} />
			<Heading css={textStyle}>
				{format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
			</Heading>
			<RightArrowIcon onClick={onClickNextMonth} style={{ cursor: "pointer" }} />
		</>
	);
};

export default CalendarHeader;
