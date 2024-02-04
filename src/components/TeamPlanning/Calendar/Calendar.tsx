import { useMemo, useState } from "react";

import {
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	addDays,
	isSameMonth,
	subDays,
	differenceInDays,
	parseISO,
	isSameDay,
	isWithinInterval,
} from "date-fns";

import { Box, Flex } from "@/components/common";
import CalendarCard from "@/components/TeamPlanning/Calendar/CalendarCard/CalendarCard";
import CalendarHeader from "@/components/TeamPlanning/Calendar/CalendarHeader/CalendarHeader";
import { ScheduleType } from "@/types/canlendar";

import { boxStyle, flexStyle } from "@/components/TeamPlanning/Calendar/Calendar.style";

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const schedules: ScheduleType[] = [
		{
			scheduleId: 0,
			teamId: 0,
			title: "string123",
			content: "string",
			startTime: parseISO("2024-01-22T05:21:37.279Z"),
			endTime: parseISO("2024-01-22T05:21:37.279Z"),
			color: "team1",
		},
		{
			scheduleId: 0,
			teamId: 0,
			title: "string424",
			content: "string",
			startTime: parseISO("2024-01-22T05:21:37.279Z"),
			endTime: parseISO("2024-01-22T05:21:37.279Z"),
			color: "team1",
		},
		{
			scheduleId: 0,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-22T05:21:37.279Z"),
			endTime: parseISO("2024-01-22T05:21:37.279Z"),
			color: "team2",
		},
		{
			scheduleId: 0,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-22T05:21:37.279Z"),
			endTime: parseISO("2024-01-22T05:21:37.279Z"),
			color: "team3",
		},
		{
			scheduleId: 0,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-22T05:21:37.279Z"),
			endTime: parseISO("2024-01-25T05:21:37.279Z"),
			color: "team3",
		},
		{
			scheduleId: 1,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-25T05:21:37.279Z"),
			endTime: parseISO("2024-01-28T05:21:37.279Z"),
			color: "team1",
		},
		{
			scheduleId: 1,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-25T05:21:37.279Z"),
			endTime: parseISO("2024-01-28T05:21:37.279Z"),
			color: "team4",
		},
		{
			scheduleId: 1,
			teamId: 0,
			title: "string",
			content: "string",
			startTime: parseISO("2024-01-28T05:21:37.279Z"),
			endTime: parseISO("2024-02-04T05:21:37.279Z"),
			color: "team6",
		},
	];
	const CalendarCards = useMemo(() => {
		const monthStart = startOfMonth(currentMonth);
		const monthEnd = endOfMonth(monthStart);
		const startDate = subDays(startOfWeek(monthStart), -1);
		const endDate = subDays(endOfWeek(monthEnd), -1);

		const dayCount = differenceInDays(endDate, startDate) + 1;
		const days = Array.from({ length: dayCount }, (_, index) => addDays(startDate, index));

		return days.map((day, index) => {
			const daySchedules = schedules.filter(
				(schedule) =>
					isSameDay(schedule.startTime, day) ||
					isSameDay(schedule.endTime, day) ||
					isWithinInterval(day, { start: schedule.startTime, end: schedule.endTime }),
			);

			return (
				<CalendarCard
					index={index}
					isSameMonth={isSameMonth(monthStart, day)}
					day={day}
					schedules={daySchedules}
				/>
			);
		});
	}, [currentMonth]);

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};
	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};
	return (
		<>
			<Flex css={flexStyle}>
				<CalendarHeader
					currentMonth={currentMonth}
					onClickNextMonth={handleNextMonth}
					onClickPrevMonth={handlePrevMonth}
				/>
			</Flex>
			<Box css={boxStyle}>{CalendarCards}</Box>
		</>
	);
};

export default Calendar;
