import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";

import { Flex } from "@/components/common";

import {
	memberCardBoxStyle,
	memberCardImgStyle,
} from "@/components/Team/TeamInfo/MemberSlider/MemberCard.style";

const MemberCard = ({ member }: { member: string }) => {
	return (
		<Flex
			style={{ alignItems: "center", justifyContent: "space-between" }}
			css={memberCardBoxStyle}
		>
			<img css={memberCardImgStyle} src="https://source.unsplash.com/random/32x32" alt="" />
			{member}
			<KebabMenuIcon />
		</Flex>
	);
};

export default MemberCard;
