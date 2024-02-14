import { format, isSameDay } from "date-fns";

import { Box, Flex, Text } from "@/components/common";
import MoreModal from "@/components/Planning/Calendar/CalendarCard/Modal/MoreModal/MoreModal";
import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";
import { CalendarCardType } from "@/types/planning";

import {
	dateTextStyle,
	flexStyle,
	moreBoxStyle,
	moreTextStyle,
	scheduleFlexBox,
	scheduleTextStyle,
	weekdayTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/CalendarCard.style";

const weekday = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarCard = ({ index, day, isSameMonth, schedules }: CalendarCardType) => {
	const handleMoreOnClick = () => {};
	const schedulesSlice = schedules.slice(0, MAX_CALENDAR_CONTENT);
	return (
		<Flex css={flexStyle}>
			<Text css={weekdayTextStyle}>{index < 7 ? weekday[index] : ""}</Text>
			<Text css={dateTextStyle(isSameMonth)}>{format(day, "d")}</Text>
			<Flex css={scheduleFlexBox}>
				{schedulesSlice.map((schedule, i) => (
					<Box
						key={i}
						css={scheduleTextStyle(schedulesSlice[i].color, isSameDay(schedule.endTime, day))}
					>
						{isSameDay(schedule.startTime, day) ? schedule.title : ""}
					</Box>
				))}
				{schedules.length > 2 && (
					<>
						<Box css={moreBoxStyle} onClick={handleMoreOnClick}>
							<Text css={moreTextStyle} size="xSmall">
								{schedules.length - 2}개 더보기
							</Text>
							<MoreModal day={day} schedules={schedules} />
						</Box>
					</>
				)}
			</Flex>
		</Flex>
	);
};

export default CalendarCard;
