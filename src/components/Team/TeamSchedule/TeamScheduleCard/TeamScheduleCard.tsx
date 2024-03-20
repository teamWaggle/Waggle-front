import { Box, Flex, Heading, Text } from "@/components/common";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import {
	addScheduleButtonStyle,
	teamScheduleCardBoxStyle,
	teamScheduleCardHeaderBoxStyle,
	teamScheduleCardStatusBoxStyle,
	teamScheduleOverlapCount,
} from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard.style";

const TeamScheduleCard = ({ startDate, isActivate }: { startDate: Date; isActivate: boolean }) => {
	return (
		<Box css={teamScheduleCardBoxStyle}>
			<Flex css={teamScheduleCardHeaderBoxStyle}>
				<Heading style={{ textOverflow: "ellipsis" }} size="xSmall">
					와글 유치원 강아지 수학여행
				</Heading>
				<Flex css={teamScheduleCardStatusBoxStyle(isActivate)}>
					{isActivate ? "진행중" : "마감"}
				</Flex>
			</Flex>
			<Text>{format(startDate, "yyyy년 M월 d일 cccc ", { locale: ko })} ~</Text>
			<Text>{format(startDate, "yyyy년 M월 d일 cccc ", { locale: ko })}</Text>
			<Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
				<Flex style={{ alignItems: "center" }}>
					겹치는 일정 <Text css={teamScheduleOverlapCount("team5")}>0</Text>
				</Flex>
				{isActivate && <Flex css={addScheduleButtonStyle("team1")}>내 일정에 추가</Flex>}
			</Flex>
		</Box>
	);
};

export default TeamScheduleCard;
