import { useState } from "react";
import {
  overlapScheduleModal,
  overlapScheduleModalScheduleTitleStyle,
  overlapScheduleModalTeamNameStyle,
  overlapTransparentBackground,
  pointer,
  pointerBorder,
  teamScheduleOverlapCount,
} from "@/components/Team/TeamSchedule/TeamScheduleCard/OverlapScheduleButton/OverlapScheduleButton.style";
import type { TeamColorType } from "@/types/team";
import { Box, Flex, Text } from "waggle-design-system";
import { useOverlapSchedules } from "@/hooks/api/schedule/useOverlapSchedules";

const OverlapScheduleButton = ({
  teamColor,
  overlappedScheduleCount,
  scheduleId,
}: {
  teamColor: TeamColorType;
  overlappedScheduleCount: number;
  scheduleId: number;
}) => {
  const [isOpenOverlapSchedule, setIsOpenOverlapSchedule] = useState(false);
  const overlapSchedulesData = useOverlapSchedules(scheduleId);

  const handleOverlapScheduleModalHover = () => {
    setIsOpenOverlapSchedule(true);
  };
  const handleOverlapScheduleModalLeave = () => {
    setIsOpenOverlapSchedule(false);
  };
  return (
    <>
      <Flex
        onMouseOver={handleOverlapScheduleModalHover}
        onMouseLeave={handleOverlapScheduleModalLeave}
        style={{ alignItems: "center", position: "relative" }}
      >
        <Text>겹치는 일정</Text>
        <Text css={teamScheduleOverlapCount(teamColor)}>{overlappedScheduleCount}</Text>
        {isOpenOverlapSchedule && (
          <>
            <Box css={overlapTransparentBackground} />
            <Flex
              styles={{ position: "absolute", direction: "column", padding: "8px 12px" }}
              css={overlapScheduleModal}
            >
              <Box css={pointer}></Box>
              <Box css={pointerBorder}></Box>
              {overlapSchedulesData.map((overlapSchedule) => (
                <Flex styles={{ align: "center", position: "relative" }}>
                  <Text css={overlapScheduleModalTeamNameStyle(teamColor)}>
                    {overlapSchedule.teamName}
                  </Text>
                  <Text size="large" css={overlapScheduleModalScheduleTitleStyle}>
                    {overlapSchedule.scheduleTitle}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};

export default OverlapScheduleButton;
