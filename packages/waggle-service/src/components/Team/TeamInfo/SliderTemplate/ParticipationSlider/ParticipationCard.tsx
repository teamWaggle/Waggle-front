import { Flex, Text } from "waggle-design-system";

import {
  approveButtonStyle,
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
    <Flex styles={{ gap: "4px" }}>
      <Flex
        styles={{ align: "center", justify: "space-between" }}
        css={participationCardNameStyle}
        onClick={handleOnclickCard}
      >
        <img css={participationCardImgStyle} src={profileImgUrl} alt="" />
        <Text css={participationCardTextStyle}>{nickname}</Text>
      </Flex>
      <Flex
        styles={{ justify: "center", align: "center" }}
        css={approveButtonStyle}
        onClick={handleAccept}
      >
        승인
      </Flex>
      <Flex
        styles={{ justify: "center", align: "center" }}
        css={rejectButtonStyle}
        onClick={handleReject}
      >
        거절
      </Flex>
    </Flex>
  );
};
export default ParticipationCard;
