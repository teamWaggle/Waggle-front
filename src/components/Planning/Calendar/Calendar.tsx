import { useMemo } from "react";

import { useRecoilValue } from "recoil";

import { Box } from "@/components/common";
import CalendarCard from "@/components/Planning/Calendar/CalendarCard/CalendarCard";
import CalendarHeader from "@/components/Planning/Calendar/CalendarHeader/CalendarHeader";
import {
	startOfMonth,
	startOfWeek,
	addDays,
	isSameMonth,
	subDays,
	isSameDay,
	isWithinInterval,
} from "date-fns";

import useCalendar from "@/hooks/useCalendar";

import { scheduleModalSelector } from "@/recoil/selectors/modalSelector";

import generateCalendarPosition from "@/utils/generateCalendarPosition";

import { boxStyle, containerStyle } from "@/components/Planning/Calendar/Calendar.style";

// const schedules: ScheduleType[] = [
// 	{
// 		boardId: 0,
// 		teamId: 0,
// 		title: "string123",
// 		content: "string",
// 		startTime: parseISO("2024-01-01T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-25T05:21:37.279Z"),
// 		status: "IN_PROGRESS",
// 		createdDate: parseISO("2024-03-29T05:25:12.263Z"),
// 		teamColor: "team1",

// 	},
// 	{
// 		boardId: 1,
// 		teamId: 0,
// 		title: "string424",
// 		content: "string",
// 		startTime: parseISO("2024-01-22T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-22T05:21:37.279Z"),
// 		teamColor: "team1",
// 	},
// 	{
// 		boardId: 2,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-23T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-24T05:21:37.279Z"),
// 		teamColor: "team2",
// 	},
// 	{
// 		boardId: 3,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-22T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-22T05:21:37.279Z"),
// 		teamColor: "team3",
// 	},
// 	{
// 		boardId: 4,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-22T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-25T05:21:37.279Z"),
// 		teamColor: "team3",
// 	},
// 	{
// 		boardId: 5,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-25T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-28T05:21:37.279Z"),
// 		teamColor: "team1",
// 	},
// 	{
// 		boardId: 6,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-25T05:21:37.279Z"),
// 		endTime: parseISO("2024-01-28T05:21:37.279Z"),
// 		teamColor: "team4",
// 	},
// 	{
// 		boardId: 7,
// 		teamId: 0,
// 		title: "string",
// 		content: "string",
// 		startTime: parseISO("2024-01-28T05:21:37.279Z"),
// 		endTime: parseISO("2024-02-11T05:21:37.279Z"),
// 		teamColor: "team6",
// 	},
// ];
const Calendar = () => {
	const { scheduleList, currentDate, handlePrevDate, handleNextDate } = useCalendar();

	const scheduleModals = useRecoilValue(scheduleModalSelector);

	const CalendarCards = useMemo(() => {
		const monthStart = startOfMonth(currentDate);
		const startDate = subDays(startOfWeek(monthStart), -1);
		const days = Array.from({ length: 42 }, (_, index) => addDays(startDate, index));
		return days.map((day, index) => {
			const { row, column } = generateCalendarPosition(index);
			const daySchedules = scheduleList.filter(
				(schedule) =>
					isSameDay(schedule.startTime, day) ||
					isSameDay(schedule.endTime, day) ||
					isWithinInterval(day, { start: schedule.startTime, end: schedule.endTime }),
			);
			const position = {
				row,
				column,
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
	}, [currentDate]);

	return (
		<>
			<CalendarHeader
				currentDate={currentDate}
				onClickNextDate={handleNextDate}
				onClickPrevDate={handlePrevDate}
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
