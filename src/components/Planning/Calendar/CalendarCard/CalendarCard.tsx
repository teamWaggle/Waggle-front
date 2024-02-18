import type { PropsWithChildren } from "react";

import { useRecoilState } from "recoil";

import { format, isSameDay } from "date-fns";

import { Box, Flex, Text } from "@/components/common";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";
import { moreModalSelector } from "@/recoil/selectors/modalSelector";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import useModal from "@/hooks/useModal";

import type { CalendarCardType, ScheduleType } from "@/types/planning";

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

const CalendarCard = ({
	index,
	day,
	isSameMonth,
	schedules,
	children,
	position,
}: PropsWithChildren<CalendarCardType>) => {
	const [isMoreOpen, setIsMoreOpen] = useRecoilState(moreModalSelector);
	const { openScheduleModal } = useModal();
	const schedulesSlice = schedules.slice(0, MAX_CALENDAR_CONTENT);
	const dayString = format(day, "d");

	const handleMoreOnClick = () => {
		setIsMoreOpen({ day: dayString });
	};

	const handleScheduleOnclick = (schedule: ScheduleType) => {
		openScheduleModal({
			key: format(day, "d"),
			component: () => <ScheduleModal schedule={schedule} position={position} />,
		});
	};

	return (
		<Flex tag={"section"} css={flexStyle}>
			<Text css={weekdayTextStyle}>{index < 7 ? weekday[index] : ""}</Text>
			<Text css={dateTextStyle(isSameMonth)}>{format(day, "d")}</Text>
			<Flex css={scheduleFlexBox}>
				{schedulesSlice.map((schedule, i) => (
					<Box
						key={schedule.scheduleId + dayString}
						css={scheduleTextStyle(schedulesSlice[i].color, isSameDay(schedule.endTime, day))}
						onClick={() => handleScheduleOnclick(schedule)}
					>
						{isSameDay(schedule.startTime, day) ? schedule.title : ""}
					</Box>
				))}
				{schedules.length > 2 && (
					<Box css={moreBoxStyle}>
						<Text css={moreTextStyle} size="xSmall" onClick={handleMoreOnClick}>
							{schedules.length - 2}개 더보기
						</Text>
						{isMoreOpen.day === dayString && children}
					</Box>
				)}
			</Flex>
		</Flex>
	);
};

export default CalendarCard;
