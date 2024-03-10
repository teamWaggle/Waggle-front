import { createContext, useMemo } from "react";
import type { PropsWithChildren } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow.svg?react";

import { Box } from "@/components/common";
import CarouselItem from "@/components/common/Carousel/CarouselItem";
import Dots from "@/components/common/Carousel/Dots";

import useCarousel from "@/hooks/useCarousel";

import {
	carouselStyle,
	buttonBoxStyle,
	leftButtonStyle,
	rightButtonStyle,
	carouselBoxStyle,
} from "./Carousel.style";

export interface CarouselProps extends PropsWithChildren {
	width: number;
	height: number;
	length: number;
	showArrows?: boolean;
	showDots?: boolean;
	children?: JSX.Element | JSX.Element[];
}

export const CarouselContext = createContext<{
	mediaIndex: number;
	width: number;
	height: number;
	itemRef: React.MutableRefObject<HTMLDivElement | null>;
} | null>(null);

const Carousel = ({
	width,
	height,
	length,
	showArrows = true,
	showDots = true,
	children,
}: CarouselProps) => {
	const {
		mediaIndex,
		itemRef,
		carouselBoxRef,
		handleMoveImage,
		handleClickLeft,
		handleClickRight,
	} = useCarousel(length);

	const context = useMemo(
		() => ({
			width,
			height,
			mediaIndex,
			itemRef,
			carouselBoxRef,
			handleMoveImage,
			handleClickLeft,
			handleClickRight,
		}),
		[
			width,
			height,
			mediaIndex,
			itemRef,
			carouselBoxRef,
			handleMoveImage,
			handleClickLeft,
			handleClickRight,
		],
	);

	return (
		<CarouselContext.Provider value={context}>
			<div css={carouselStyle(width, height)} ref={carouselBoxRef}>
				{showArrows && length !== 1 && (
					<div css={buttonBoxStyle}>
						<button type="button" css={leftButtonStyle} onClick={handleClickLeft}>
							<LeftArrowIcon />
						</button>
						<button type="button" css={rightButtonStyle} onClick={handleClickRight}>
							<RightArrowIcon />
						</button>
					</div>
				)}

				{showDots && (
					<Dots mediaLength={length} selectMediaNumber={mediaIndex} moveImage={handleMoveImage} />
				)}

				<Box css={carouselBoxStyle(width, height)}>{children}</Box>
			</div>
		</CarouselContext.Provider>
	);
};

Carousel.Item = CarouselItem;

export default Carousel;
