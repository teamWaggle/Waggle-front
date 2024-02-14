import { Box, Flex, Text } from "@/components/common";
import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";
import { ScheduleType } from "@/types/planning";

import {
	moreModalContainerStyle,
	moreModalDateStyle,
	moreModalDayStyle,
	moreModalScheduleTextStyle,
	moreModalScheduleBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/Modal/MoreModal/MoreModal.style";

const week = ["일", "월", "화", "수", "목", "금", "토"];
const MoreModal = ({ day, schedules }: { day: Date; schedules: Array<ScheduleType> }) => {
	const schedulesSlice = schedules.slice(MAX_CALENDAR_CONTENT);
	return (
		<Flex css={moreModalContainerStyle}>
			<Text css={moreModalDayStyle}>{week[day.getDay()]}</Text>
			<Text css={moreModalDateStyle}>{day.getDate()}</Text>
			<Box css={moreModalScheduleBoxStyle}>
				{schedulesSlice.map((schedule, i) => (
					<Box key={i} css={moreModalScheduleTextStyle(schedule.color)}>
						{schedule.title}
					</Box>
				))}
			</Box>
		</Flex>
	);
};

export default MoreModal;
