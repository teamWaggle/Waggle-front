import { Box, Flex, Heading, Text } from "@/components/common";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { getTeamScheduleStatus } from "@/utils/getTeamScheduleStatus";

import type { TeamScheduleType } from "@/types/schedule";

import {
  addScheduleButtonStyle,
  teamScheduleCardBoxStyle,
  teamScheduleCardHeaderBoxStyle,
  teamScheduleCardStatusBoxStyle,
  teamScheduleOverlapCount,
} from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard.style";

const TeamScheduleCard = ({ teamScheduleData }: { teamScheduleData: TeamScheduleType }) => {
  const { teamColor, title, startDate, endDate, status } = teamScheduleData;
  const scheduleStatusString = getTeamScheduleStatus(status);

  return (
    <Box css={teamScheduleCardBoxStyle}>
      <Flex css={teamScheduleCardHeaderBoxStyle}>
        <Heading style={{ textOverflow: "ellipsis" }} size="xSmall">
          {title}
        </Heading>
        <Flex css={teamScheduleCardStatusBoxStyle(status !== "CLOSING")}>
          {scheduleStatusString}
        </Flex>
      </Flex>
      <Text>
        {format(startDate, "yyyy년 M월 d일")} ~ {format(endDate, "yyyy년 M월 d일")}
      </Text>
      <Text>
        {format(startDate, "a h:mm", { locale: ko })} ~ {format(endDate, "a h:mm", { locale: ko })}
      </Text>
      <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
        {status !== "CLOSING" && (
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
