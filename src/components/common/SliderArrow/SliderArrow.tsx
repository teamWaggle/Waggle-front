import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex } from "@/components/common";

import {
	arrowBoxStyle,
	imgDotBoxStyle,
	imgDotStyle,
} from "@/components/common/SliderArrow/SliderArrow.style";

const SliderArrow = ({
	sliderIndex,
	totalIndex,
	handleLeftArrow,
	handleRightArrow,
}: {
	sliderIndex: number;
	totalIndex: number;
	handleLeftArrow: () => void;
	handleRightArrow: () => void;
}) => {
	return (
		<>
			<Flex css={arrowBoxStyle(sliderIndex === 0)} onClick={handleLeftArrow} className="leftArrow">
				<LeftArrowIcon />
			</Flex>
			<Flex
				css={arrowBoxStyle(sliderIndex === totalIndex - 1)}
				onClick={handleRightArrow}
				className="rightArrow"
			>
				<RightArrowIcon />
			</Flex>
			<Flex css={imgDotBoxStyle}>
				{totalIndex > 1 &&
					[...Array(totalIndex)].map((_, index) => (
						<div key={index} css={imgDotStyle(sliderIndex === index)} />
					))}
			</Flex>
		</>
	);
};

export default SliderArrow;
