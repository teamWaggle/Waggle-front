import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";

import { Flex } from "@/components/common";
import ParticipationCard from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard";

import { TEAM_INFO } from "@/constants/team";

import useSlider from "@/hooks/useSlider";

import {
	leftArrowIconStyle,
	participationSliderBoxStyle,
	rightArrowIconStyle,
} from "@/components/Team/TeamInfo/ParticipationSlider/participationSlider.style";

const ParticipationSlider = ({ participatingMembers }: { participatingMembers: string[] }) => {
	const { currentIndex, handlePrevOnClick, handleNextOnClick } = useSlider(
		participatingMembers.length,
		TEAM_INFO.PARTICIPATION_SLIDER_AMOUNT,
	);
	return (
		<Flex style={{ marginLeft: "40px", position: "relative" }}>
			{currentIndex !== 0 && <LeftArrowIcon onClick={handlePrevOnClick} css={leftArrowIconStyle} />}
			<Flex style={{ overflow: "hidden" }}>
				<Flex css={participationSliderBoxStyle(currentIndex)}>
					{participatingMembers.map((data) => (
						<ParticipationCard key={data} participatingMember={data} />
					))}
				</Flex>
			</Flex>
			{currentIndex < participatingMembers.length - TEAM_INFO.MEMBERS_SLIDER_AMOUNT && (
				<RightArrowIcon onClick={handleNextOnClick} css={rightArrowIconStyle} />
			)}
		</Flex>
	);
};

export default ParticipationSlider;
