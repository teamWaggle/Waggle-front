import { format, isSameDay } from "date-fns";

import { Box, Flex, Text } from "@/components/common";
import { CalendarCardType } from "@/types/canlendar";

import {
	dateTextStyle,
	flexStyle,
	moreTextStyle,
	scheduleFlexBox,
	scheduleTextStyle,
	weekdayTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/CalendarCard.style";

const weekday = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarCard = ({ index, day, isSameMonth, schedules }: CalendarCardType) => {
	return (
		<Flex css={flexStyle}>
			<Text css={weekdayTextStyle}>{index < 7 ? weekday[index] : ""}</Text>
			<Text css={dateTextStyle(isSameMonth)}>{format(day, "d")}</Text>
			<Flex css={scheduleFlexBox}>
				{schedules.slice(0, 2).map((schedule, i) => (
					<Box
						key={i}
						css={scheduleTextStyle(schedules[i].color, isSameDay(schedule.endTime, day))}
					>
						{isSameDay(schedule.startTime, day) ? schedule.title : ""}
					</Box>
				))}
				<Text css={moreTextStyle}>
					{schedules.length > 2 ? `${schedules.length - 2}개 더보기` : ""}
				</Text>
			</Flex>
		</Flex>
	);
};

export default CalendarCard;
