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
import { useAddTeamScheduleToMySchedule } from "@/hooks/api/schedule/useAddTeamScheduleToMySchedule";

const TeamScheduleCard = ({ teamScheduleData }: { teamScheduleData: TeamScheduleType }) => {
  const { teamColor, title, startDate, endDate, status, boardId, overlappedScheduleCount } =
    teamScheduleData;
  const scheduleStatusString = getTeamScheduleStatus(status);
  const { mutate: addToMySchedule } = useAddTeamScheduleToMySchedule(startDate, endDate);
  const handleAddToMySchedule = () => {
    addToMySchedule(boardId);
  };
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
              겹치는 일정{" "}
              <Text css={teamScheduleOverlapCount(teamColor)}>{overlappedScheduleCount}</Text>
            </Flex>
            <Flex onClick={handleAddToMySchedule} css={addScheduleButtonStyle(teamColor)}>
              내 일정에 추가
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default TeamScheduleCard;
