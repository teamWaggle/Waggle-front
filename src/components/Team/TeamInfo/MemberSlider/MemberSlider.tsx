import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";

import { Flex } from "@/components/common";
import MemberCard from "@/components/Team/TeamInfo/MemberSlider/MemberCard";

import { TEAM_INFO } from "@/constants/team";

import useSlider from "@/hooks/useSlider";

import {
	leftArrowIconStyle,
	MemberSliderBoxStyle,
	rightArrowIconStyle,
} from "@/components/Team/TeamInfo/MemberSlider/MemberSlider.style";

const MemberSlider = ({ members }: { members: Array<string> }) => {
	const { currentIndex, handlePrevOnClick, handleNextOnClick } = useSlider(
		members.length,
		TEAM_INFO.MEMBERS_SLIDER_AMOUNT,
	);
	return (
		<Flex style={{ marginLeft: "40px", position: "relative" }}>
			{currentIndex !== 0 && <LeftArrowIcon onClick={handlePrevOnClick} css={leftArrowIconStyle} />}
			<Flex style={{ overflow: "hidden" }}>
				<Flex css={MemberSliderBoxStyle(currentIndex)}>
					{members.map((data) => (
						<MemberCard key={data} member={data} />
					))}
				</Flex>
			</Flex>
			{currentIndex < members.length - TEAM_INFO.MEMBERS_SLIDER_AMOUNT && (
				<RightArrowIcon onClick={handleNextOnClick} css={rightArrowIconStyle} />
			)}
		</Flex>
	);
};

export default MemberSlider;
