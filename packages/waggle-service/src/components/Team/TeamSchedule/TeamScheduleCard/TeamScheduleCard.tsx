import { Box, Flex, Heading, Text } from "waggle-design-system";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { getTeamScheduleStatus } from "@/utils/getTeamScheduleStatus";

import type { TeamScheduleType } from "@/types/schedule";

import {
  addScheduleButtonStyle,
  teamScheduleCardBoxStyle,
  teamScheduleCardStatusBoxStyle,
} from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard.style";
import { useAddTeamScheduleToMySchedule } from "@/hooks/api/schedule/useAddTeamScheduleToMySchedule";
import OverlapScheduleButton from "@/components/Team/TeamSchedule/TeamScheduleCard/OverlapScheduleButton/OverlapScheduleButton";

const TeamScheduleCard = ({ teamScheduleData }: { teamScheduleData: TeamScheduleType }) => {
  const {
    teamColor,
    title,
    startDate,
    endDate,
    status,
    boardId,
    overlappedScheduleCount,
    isScheduled,
  } = teamScheduleData;
  const scheduleStatusString = getTeamScheduleStatus(status);
  const { mutate: addToMySchedule } = useAddTeamScheduleToMySchedule();
  const handleAddToMySchedule = () => {
    addToMySchedule(boardId);
  };
  return (
    <Box css={teamScheduleCardBoxStyle}>
      <Flex styles={{ justify: "space-between", marginBottom: "20px" }}>
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
        {status !== "CLOSING" && !isScheduled && (
          <>
            <OverlapScheduleButton
              overlappedScheduleCount={overlappedScheduleCount}
              teamColor={teamColor}
              scheduleId={boardId}
            />
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
