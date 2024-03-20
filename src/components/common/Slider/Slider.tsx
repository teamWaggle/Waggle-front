import type { SerializedStyles } from "@emotion/react";

import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";

import { Flex } from "@/components/common";

import { TEAM_INFO } from "@/constants/team";

import useSlider from "@/hooks/useSlider";

import { leftArrowIconStyle, rightArrowIconStyle } from "@/components/common/Slider/Slider.style";

const Slider = ({
	children,
	length,
	displayCount,
	cardBoxstyle,
}: {
	children: React.ReactNode;
	length: number;
	displayCount: number;
	cardBoxstyle: (currentIndex: number) => SerializedStyles;
}) => {
	const { currentIndex, handlePrevOnClick, handleNextOnClick } = useSlider(length, displayCount);
	return (
		<Flex style={{ marginLeft: "40px", position: "relative" }}>
			{currentIndex !== 0 && <LeftArrowIcon onClick={handlePrevOnClick} css={leftArrowIconStyle} />}
			<Flex style={{ overflow: "hidden" }}>
				<Flex css={cardBoxstyle(currentIndex)}>{children}</Flex>
			</Flex>
			{currentIndex <= length - TEAM_INFO.MEMBERS_SLIDER_AMOUNT && (
				<RightArrowIcon onClick={handleNextOnClick} css={rightArrowIconStyle} />
			)}
		</Flex>
	);
};
export default Slider;
