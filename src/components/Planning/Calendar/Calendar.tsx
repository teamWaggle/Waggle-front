import { useMemo, useState } from "react";

import { useRecoilValue } from "recoil";

import { Box } from "@/components/common";
import CalendarCard from "@/components/Planning/Calendar/CalendarCard/CalendarCard";
import CalendarHeader from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader";
import {
	addMonths,
	subMonths,
	startOfMonth,
	startOfWeek,
	addDays,
	isSameMonth,
	subDays,
	parseISO,
	isSameDay,
	isWithinInterval,
} from "date-fns";

import { scheduleModalSelector } from "@/recoil/selectors/modalSelector";

import { generateCalendarPositionColumn } from "@/utils/generateCalendarPositionColumn";
import { generateCalendarPositionRow } from "@/utils/generateCalendarPositionRow";

import type { ScheduleType } from "@/types/planning";

import { boxStyle, containerStyle } from "@/components/Planning/Calendar/Calendar.style";

const schedules: ScheduleType[] = [
	{
		scheduleId: 0,
		teamId: 0,
		title: "string123",
		content: "string",
		startTime: parseISO("2024-01-01T05:21:37.279Z"),
		endTime: parseISO("2024-01-25T05:21:37.279Z"),
		color: "team1",
	},
	{
		scheduleId: 1,
		teamId: 0,
		title: "string424",
		content: "string",
		startTime: parseISO("2024-01-22T05:21:37.279Z"),
		endTime: parseISO("2024-01-22T05:21:37.279Z"),
		color: "team1",
	},
	{
		scheduleId: 2,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-23T05:21:37.279Z"),
		endTime: parseISO("2024-01-24T05:21:37.279Z"),
		color: "team2",
	},
	{
		scheduleId: 3,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-22T05:21:37.279Z"),
		endTime: parseISO("2024-01-22T05:21:37.279Z"),
		color: "team3",
	},
	{
		scheduleId: 4,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-22T05:21:37.279Z"),
		endTime: parseISO("2024-01-25T05:21:37.279Z"),
		color: "team3",
	},
	{
		scheduleId: 5,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-25T05:21:37.279Z"),
		endTime: parseISO("2024-01-28T05:21:37.279Z"),
		color: "team1",
	},
	{
		scheduleId: 6,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-25T05:21:37.279Z"),
		endTime: parseISO("2024-01-28T05:21:37.279Z"),
		color: "team4",
	},
	{
		scheduleId: 7,
		teamId: 0,
		title: "string",
		content: "string",
		startTime: parseISO("2024-01-28T05:21:37.279Z"),
		endTime: parseISO("2024-02-11T05:21:37.279Z"),
		color: "team6",
	},
];
const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const scheduleModals = useRecoilValue(scheduleModalSelector);
	const monthStart = startOfMonth(currentMonth);
	const startDate = subDays(startOfWeek(monthStart), -1);
	const days = Array.from({ length: 42 }, (_, index) => addDays(startDate, index));

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const CalendarCards = useMemo(() => {
		return days.map((day, index) => {
			const daySchedules = schedules.filter(
				(schedule) =>
					isSameDay(schedule.startTime, day) ||
					isSameDay(schedule.endTime, day) ||
					isWithinInterval(day, { start: schedule.startTime, end: schedule.endTime }),
			);
			const position = {
				row: generateCalendarPositionRow(index),
				column: generateCalendarPositionColumn(index),
				index,
			};
			const daySchedulesWithPosition = daySchedules.map((schedule) => {
				return schedule;
			});
			return (
				<CalendarCard
					key={day.toString()}
					index={index}
					isSameMonth={isSameMonth(monthStart, day)}
					day={day}
					schedules={daySchedulesWithPosition}
					position={position}
				/>
			);
		});
	}, [currentMonth]);

	return (
		<>
			<CalendarHeader
				currentMonth={currentMonth}
				onClickNextMonth={handleNextMonth}
				onClickPrevMonth={handlePrevMonth}
			/>
			<Box css={containerStyle}>
				<Box tag="main" css={boxStyle}>
					{CalendarCards}
				</Box>
				{scheduleModals.map((modal, index) => {
					const ModalComponent: React.ComponentType = modal.component || (() => null);
					return <ModalComponent key={scheduleModals[index].key} />;
				})}
			</Box>
		</>
	);
};

export default Calendar;
