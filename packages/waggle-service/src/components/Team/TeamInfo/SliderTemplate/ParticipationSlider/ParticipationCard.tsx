import { Flex, Text } from "@/components/common";

import {
  approveButtonStyle,
  participationCardBoxStyle,
  participationCardImgStyle,
  participationCardNameStyle,
  participationCardTextStyle,
  rejectButtonStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationCard.style";
import { useTeamParticipationAccept } from "@/hooks/api/team/useTeamParticipationAccept";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import type { TeamMemberType } from "@/types/team";
import { useNavigate } from "react-router-dom";

const ParticipationCard = ({ participatingMember }: { participatingMember: TeamMemberType }) => {
  console.log(participatingMember);
  const { nickname, userUrl, profileImgUrl, memberId } = participatingMember;
  const teamId = useParamsTeamId();

  const { mutate: accectOrRefuseParticipationMutate } = useTeamParticipationAccept(
    teamId,
    memberId
  );
  const handleAccept = () => {
    accectOrRefuseParticipationMutate(true);
  };
  const handleReject = () => {
    accectOrRefuseParticipationMutate(false);
  };
  const navigate = useNavigate();
  const handleOnclickCard = () => {
    navigate(userUrl);
  };
  return (
    <Flex css={participationCardBoxStyle}>
      <Flex css={participationCardNameStyle} onClick={handleOnclickCard}>
        <img css={participationCardImgStyle} src={profileImgUrl} alt="" />
        <Text css={participationCardTextStyle}>{nickname}</Text>
      </Flex>
      <Flex css={approveButtonStyle} onClick={handleAccept}>
        승인
      </Flex>
      <Flex css={rejectButtonStyle} onClick={handleReject}>
        거절
      </Flex>
    </Flex>
  );
};
export default ParticipationCard;
