import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";

import { Box, Flex } from "@/components/common";

import type { TeamMemberType } from "@/types/team";

import {
  memberCardBoxStyle,
  memberCardImgStyle,
  modalPositionBoxStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberCard.style";
import useModal from "@/hooks/useModal";
import OptionModal from "@/components/common/OptionModal/OptionModal";
import OptionModalItem from "@/components/common/OptionModal/OptionModalItem";
import { useContext } from "react";
import { SliderContext } from "@/components/common/Slider/Slider";

const MemberCard = ({ member, index }: { member: TeamMemberType; index: number }) => {
  const { teamInfoModalOpen, teamInfoModalClose } = useModal();
  const { displayCount } = useContext(SliderContext);
  const handleMenuOnclick = () => {
    teamInfoModalOpen({
      key: "MemberOptionDropDown",
      component: () => (
        <Box css={modalPositionBoxStyle(displayCount, index)}>
          <OptionModal closeModal={teamInfoModalClose}>
            <OptionModalItem>팀원 삭제하기</OptionModalItem>
            <OptionModalItem>팀장 권한 위임</OptionModalItem>
          </OptionModal>
        </Box>
      ),
    });
  };
  return (
    <Flex css={memberCardBoxStyle}>
      <img css={memberCardImgStyle} src="https://source.unsplash.com/random/32x32" alt="" />
      {member.nickname}
      <KebabMenuIcon onClick={handleMenuOnclick} />
    </Flex>
  );
};

export default MemberCard;
