import { useState } from "react";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow-brand-primary.svg?react";
import { Box, Flex } from "@/components/common";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";
import { TeamCardType } from "@/types/canlendar";

import {
	rightArrowIconStyle,
	leftArrowIconStyle,
	sliderBoxStyle,
} from "@/components/Planning/Main/Slider/Slider.style";

const Slider = ({ items }: { items: TeamCardType[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 4));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex < items.length - 4 ? prevIndex + 1 : 0));
		return;
	};

	return (
		<Box style={{ position: "relative" }}>
			{currentIndex !== 0 && <LeftArrowIcon css={leftArrowIconStyle} onClick={handlePrev} />}
			<Flex style={{ overflow: "hidden" }}>
				<Box css={sliderBoxStyle(currentIndex)}>
					{items.map((item, index) => (
						<TeamCard
							key={index}
							photoUrl="https://source.unsplash.com/random/300x300"
							title={item.title}
							subtitle={item.subtitle}
							groupSize={item.groupSize}
							color={item.color}
							onClick={item.onClick}
						/>
					))}
				</Box>
			</Flex>
			{currentIndex < items.length - 4 && (
				<RightArrowIcon css={rightArrowIconStyle} onClick={handleNext} />
			)}
		</Box>
	);
};

export default Slider;
