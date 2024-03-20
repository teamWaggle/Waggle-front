import { useState } from "react";

import AddIcon from "@/assets/svg/add-icon.svg?react";

import { Box, Flex, Heading, Text, DatePicker, DatePickerModal } from "@/components/common";
import TeamScheduleCard from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard";

import {
	teamScheduleAddButtonStyle,
	teamScheduleBoxStyle,
	teamScheduleGridBoxStyle,
	teamScheduleSearchButtonStyle,
	teamScheduleTitleStyle,
} from "@/components/Team/TeamSchedule/TeamSchedule.style";

const TeamSchedule = () => {
	const [selectedStartDate, setSelectedStartDate] = useState(new Date());
	const [selectedEndDate, setSelectedEndDate] = useState(new Date());

	const editSelectedStartDate = (date: Date) => {
		setSelectedStartDate(date);
	};
	const editSelectedEndDate = (date: Date) => {
		setSelectedEndDate(date);
	};
	return (
		<>
			<Flex css={teamScheduleBoxStyle}>
				<Flex style={{ alignItems: "center", gap: "16px" }}>
					<Heading size="xLarge" css={teamScheduleTitleStyle}>
						TEAM SCHEDULE
					</Heading>
					<Flex style={{ gap: "4px", alignItems: "center" }}>
						<DatePicker selectedDate={selectedStartDate} editSelectedDate={editSelectedStartDate}>
							<DatePickerModal />
						</DatePicker>
						~
						<DatePicker selectedDate={selectedEndDate} editSelectedDate={editSelectedEndDate}>
							<DatePickerModal />
						</DatePicker>
						<Flex tag="button" css={teamScheduleSearchButtonStyle}>
							<Text size="xSmall">일정 검색</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex tag="button" css={teamScheduleAddButtonStyle("team1")}>
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
	);
};
export default TeamSchedule;
