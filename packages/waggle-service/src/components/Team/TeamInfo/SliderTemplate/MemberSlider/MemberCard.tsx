import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";

import { Flex, Text } from "waggle-design-system";

import type { TeamMemberType } from "@/types/team";

import {
  memberCardBoxStyle,
  memberCardImgStyle,
  modalPositionBoxStyle,
  nicknameStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberCard.style";
import useModal from "@/hooks/common/useModal";

import { useContext } from "react";
import { SliderContext } from "@/components/common/Slider/Slider";
import MemberOptionModal from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/OptionModalTemplate/MemberOptionModal";
import TeamLeaderAuthorizationContainer from "@/components/Team/TeamInfo/TeamLeaderAuthorizationContainer/TeamLeaderAuthorizationContainer";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { useTeamInfo } from "@/hooks/team/useTeamInfo";

const MemberCard = ({ member, index }: { member: TeamMemberType; index: number }) => {
  const { teamInfoModalOpen, teamInfoModalClose } = useModal();
  const { displayCount } = useContext(SliderContext);
  const teamId = useParamsTeamId();
  const { teamLeader } = useTeamInfo(teamId) || {};
  const handleMenuOnclick = () => {
    teamInfoModalOpen({
      key: "MemberOptionDropDown",
      component: () => (
        <MemberOptionModal
          memberId={member.memberId}
          modalPositionBoxStyle={modalPositionBoxStyle(displayCount, index)}
          closeOptionModal={teamInfoModalClose}
        />
      ),
    });
  };
  return (
    <Flex styles={{ align: "center", justify: "space-between" }} css={memberCardBoxStyle}>
      <img css={memberCardImgStyle} src="https://source.unsplash.com/random/32x32" alt="" />
      <Text css={nicknameStyle}>{member.nickname}</Text>
      <TeamLeaderAuthorizationContainer>
        {member.memberId !== teamLeader.memberId && <KebabMenuIcon onClick={handleMenuOnclick} />}
      </TeamLeaderAuthorizationContainer>
    </Flex>
  );
};

export default MemberCard;
