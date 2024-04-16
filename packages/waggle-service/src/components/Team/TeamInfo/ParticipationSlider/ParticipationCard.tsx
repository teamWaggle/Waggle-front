import { Flex, Text } from "@/components/common";

import {
  approveButtonStyle,
  participationCardBoxStyle,
  participationCardImgStyle,
  participationCardNameStyle,
  participationCardTextStyle,
  rejectButtonStyle,
} from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard.style";
import type { TeamMemberType } from "@/types/team";
import { useNavigate } from "react-router-dom";

const ParticipationCard = ({ participatingMember }: { participatingMember: TeamMemberType }) => {
  const { nickname, userUrl, profileImgUrl } = participatingMember;
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
      <Flex css={approveButtonStyle}>승인</Flex>
      <Flex css={rejectButtonStyle}>거절</Flex>
    </Flex>
  );
};
export default ParticipationCard;
