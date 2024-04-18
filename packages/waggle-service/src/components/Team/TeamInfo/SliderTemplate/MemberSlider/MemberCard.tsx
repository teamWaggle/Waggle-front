import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";

import { Flex } from "@/components/common";

import type { TeamMemberType } from "@/types/team";

import {
  memberCardBoxStyle,
  memberCardImgStyle,
  modalPositionBoxStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberCard.style";
import useModal from "@/hooks/common/useModal";

import { useContext } from "react";
import { SliderContext } from "@/components/common/Slider/Slider";
import MemberOptionModal from "@/components/Team/TeamInfo/OptionModalTemplate/MemberOptionModal";
import TeamLeaderContainer from "@/components/Team/TeamInfo/TeamLeaderContainer/TeamLeaderContainer";

const MemberCard = ({ member, index }: { member: TeamMemberType; index: number }) => {
  const { teamInfoModalOpen, teamInfoModalClose } = useModal();
  const { displayCount } = useContext(SliderContext);
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
    <Flex css={memberCardBoxStyle}>
      <img css={memberCardImgStyle} src="https://source.unsplash.com/random/32x32" alt="" />
      {member.nickname}
      <TeamLeaderContainer>
        <KebabMenuIcon onClick={handleMenuOnclick} />
      </TeamLeaderContainer>
    </Flex>
  );
};

export default MemberCard;
