import { useNavigate } from "react-router-dom";

import LockIcon from "@/assets/svg/lock.svg?react";

import { Button, Flex, Text } from "waggle-design-system";
import { PATH } from "@/constants/path";
import type { TeamColorType } from "@/types/team";
import { lockButtonStyle, textTitleStyle } from "@/components/Team/TeamSchedule/Lock/Lock.style";
import { useRequestTeamParticipation } from "@/hooks/api/team/useRequestTeamParticipation";

const Lock = ({
  teamId,
  teamColor,
  teamName,
}: {
  teamId: number;
  teamColor: TeamColorType;
  teamName: string;
}) => {
  const navigate = useNavigate();
  const handleOtherTeam = () => {
    navigate(PATH.PLANNING);
  };
  const { mutate: requestTeamParticipation } = useRequestTeamParticipation();
  const handleRequestTeamParticipation = () => {
    requestTeamParticipation(teamId);
  };
  return (
    <Flex styles={{ direction: "column", align: "center", width: "100%", padding: "100px" }}>
      <LockIcon />
      <Text size="xLarge" css={textTitleStyle}>
        {teamName}의 멤버만 일정을 볼 수 있어요!
      </Text>
      <Flex styles={{ gap: "12px", direction: "column" }}>
        <Button
          size="large"
          css={lockButtonStyle(teamColor)}
          onClick={handleRequestTeamParticipation}
        >
          가입 신청하기
        </Button>
        <Button variant="disabled" size="large" onClick={handleOtherTeam}>
          다른 팀 보기
        </Button>
      </Flex>
    </Flex>
  );
};
export default Lock;
