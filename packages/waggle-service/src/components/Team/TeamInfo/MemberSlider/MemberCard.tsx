import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";

import { Flex } from "@/components/common";

import type { TeamMemberType } from "@/types/team";

import {
  memberCardBoxStyle,
  memberCardImgStyle,
} from "@/components/Team/TeamInfo/MemberSlider/MemberCard.style";

const MemberCard = ({ member }: { member: TeamMemberType }) => {
  return (
    <Flex
      style={{ alignItems: "center", justifyContent: "space-between" }}
      css={memberCardBoxStyle}
    >
      <img css={memberCardImgStyle} src="https://source.unsplash.com/random/32x32" alt="" />
      {member.nickname}
      <KebabMenuIcon />
    </Flex>
  );
};

export default MemberCard;
