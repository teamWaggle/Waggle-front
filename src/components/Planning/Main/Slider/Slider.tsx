import { useState } from "react";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow-brand-primary.svg?react";

import { Box, Flex } from "@/components/common";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";

import type { TeamCardType } from "@/types/planning";

import {
	rightArrowIconStyle,
	leftArrowIconStyle,
	sliderBoxStyle,
} from "@/components/Planning/Main/Slider/Slider.style";

const Slider = ({ items }: { items: TeamCardType[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevOnClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 4));
	};

	const handleNextOnClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex < items.length - 4 ? prevIndex + 1 : 0));
	};

	return (
		<Box style={{ position: "relative" }}>
			{currentIndex !== 0 && <LeftArrowIcon css={leftArrowIconStyle} onClick={handlePrevOnClick} />}
			<Flex style={{ overflow: "hidden" }}>
				<Box css={sliderBoxStyle(currentIndex)}>
					{items.map((data) => (
						<TeamCard key={data.teamId} data={data} />
					))}
				</Box>
			</Flex>
			{currentIndex < items.length - 4 && (
				<RightArrowIcon css={rightArrowIconStyle} onClick={handleNextOnClick} />
			)}
		</Box>
	);
};

export default Slider;
