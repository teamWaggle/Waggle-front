import { useState } from "react";

import AddIcon from "@/assets/svg/add-icon.svg?react";

import { Box, Flex, Heading, Text, DatePicker, DatePickerCalendarModal } from "@/components/common";
import Lock from "@/components/Team/TeamSchedule/Lock/Lock";
import AddTeamScheduleModal from "@/components/Team/TeamSchedule/Modal/AddTeamScheduleModal";
import TeamScheduleCard from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard";

import useCalendar from "@/hooks/useCalendar";
import useModal from "@/hooks/useModal";

import {
	teamScheduleAddButtonStyle,
	teamScheduleBoxStyle,
	teamScheduleGridBoxStyle,
	teamScheduleSearchButtonStyle,
	teamScheduleTitleStyle,
} from "@/components/Team/TeamSchedule/TeamSchedule.style";

const TeamSchedule = () => {
	const { openModal } = useModal();
	const [isMember] = useState(true);
	const { selectedStartDate, selectedEndDate, editSelectedStartDate, editSelectedEndDate } =
		useCalendar();
	const handleAddSchedule = () => {
		openModal({
			key: "AddSchedule",
			component: () => <AddTeamScheduleModal />,
			isWhiteIcon: true,
			isOutsideClose: false,
		});
	};

	return (
		<>
			{isMember ? (
				<>
					<Flex css={teamScheduleBoxStyle}>
						<Flex style={{ alignItems: "center", gap: "16px" }}>
							<Heading size="xLarge" css={teamScheduleTitleStyle}>
								TEAM SCHEDULE
							</Heading>
							<Flex style={{ gap: "4px", alignItems: "center" }}>
								<DatePicker
									selectedDate={selectedStartDate}
									editSelectedDate={editSelectedStartDate}
								>
									<DatePickerCalendarModal />
								</DatePicker>
								~
								<DatePicker selectedDate={selectedEndDate} editSelectedDate={editSelectedEndDate}>
									<DatePickerCalendarModal />
								</DatePicker>
								<Flex tag="button" css={teamScheduleSearchButtonStyle}>
									<Text size="xSmall">일정 검색</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							onClick={handleAddSchedule}
							tag="button"
							css={teamScheduleAddButtonStyle("team1")}
						>
							<Text size="xSmall">일정 추가</Text>
							<AddIcon />
						</Flex>
					</Flex>
					<Box css={teamScheduleGridBoxStyle}>
						<TeamScheduleCard isActivate={true} startDate={new Date()} />
						<TeamScheduleCard isActivate={false} startDate={new Date()} />
						<TeamScheduleCard isActivate={true} startDate={new Date()} />
						<TeamScheduleCard isActivate={true} startDate={new Date()} />
						<TeamScheduleCard isActivate={false} startDate={new Date()} />
						<TeamScheduleCard isActivate={true} startDate={new Date()} />
					</Box>
				</>
			) : (
				<Lock />
			)}
		</>
	);
};
export default TeamSchedule;
