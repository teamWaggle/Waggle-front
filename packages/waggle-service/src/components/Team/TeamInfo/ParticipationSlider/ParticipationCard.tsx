import { Flex, Text } from "@/components/common";

import {
  approveButtonStyle,
  participationCardBoxStyle,
  participationCardImgStyle,
  participationCardNameStyle,
  participationCardTextStyle,
  rejectButtonStyle,
} from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard.style";

const ParticipationCard = ({ participatingMember }: { participatingMember: string }) => {
  return (
    <Flex css={participationCardBoxStyle}>
      <Flex css={participationCardNameStyle}>
        <img
          css={participationCardImgStyle}
          src="https://source.unsplash.com/random/32x32"
          alt=""
        />
        <Text css={participationCardTextStyle}>{participatingMember}</Text>
      </Flex>
      <Flex css={approveButtonStyle}>승인</Flex>
      <Flex css={rejectButtonStyle}>거절</Flex>
    </Flex>
  );
};
export default ParticipationCard;
