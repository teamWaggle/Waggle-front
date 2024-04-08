import { Box, Flex, Heading, Text } from "@/components/common";

import type { TeamScheduleType } from "@/types/schedule";

import {
	addScheduleButtonStyle,
	teamScheduleCardBoxStyle,
	teamScheduleCardHeaderBoxStyle,
	teamScheduleCardStatusBoxStyle,
	teamScheduleOverlapCount,
} from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard.style";

const TeamScheduleCard = ({ teamScheduleData }: { teamScheduleData: TeamScheduleType }) => {
	const { teamColor, title, startDate, endDate, status = true } = teamScheduleData;
	return (
		<Box css={teamScheduleCardBoxStyle}>
			<Flex css={teamScheduleCardHeaderBoxStyle}>
				<Heading style={{ textOverflow: "ellipsis" }} size="xSmall">
					{title}
				</Heading>
				<Flex css={teamScheduleCardStatusBoxStyle(true)}>{status ? "진행중" : "마감"}</Flex>
			</Flex>
			<Text>{startDate} ~</Text>
			<Text>{endDate}</Text>
			<Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
				{status && (
					<>
						<Flex style={{ alignItems: "center" }}>
							겹치는 일정 <Text css={teamScheduleOverlapCount(teamColor)}>0</Text>
						</Flex>
						<Flex css={addScheduleButtonStyle("team_1")}>내 일정에 추가</Flex>
					</>
				)}
			</Flex>
		</Box>
	);
};

export default TeamScheduleCard;
