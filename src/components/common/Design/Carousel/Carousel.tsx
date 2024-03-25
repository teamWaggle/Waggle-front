import { createContext, useMemo, useState, useRef } from "react";
import type { PropsWithChildren } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow.svg?react";

import { Box } from "@/components/common";
import CarouselItem from "@/components/common/Design/Carousel/CarouselItem";
import Dots from "@/components/common/Design/Carousel/Dots";
import Gallery from "@/components/common/Design/Carousel/Gallery/Gallery";

import useCarousel from "@/hooks/useCarousel";
import useClickOutSide from "@/hooks/useClickOutSide";

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
	borderRadius: string;
	length: number;
	showArrows?: boolean;
	showDots?: boolean;
	updateMediaList?: string[];
	setUpdateMediaList?: React.Dispatch<React.SetStateAction<string[]>>;
	hasGallery?: boolean;
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
	borderRadius,
	length,
	showArrows = true,
	showDots = true,
	children,
	updateMediaList,
	setUpdateMediaList,
	hasGallery,
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

	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	const galleryRef = useRef<HTMLDivElement>(null);

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));

	const handleGalleryOpen = () => {
		setIsGalleryOpen((prev) => !prev);
	};

	return (
		<CarouselContext.Provider value={context}>
			<div css={carouselStyle(width, height, borderRadius)} ref={carouselBoxRef}>
				{hasGallery && (
					<Gallery
						isGalleryOpen={isGalleryOpen}
						handleGalleryOpen={handleGalleryOpen}
						galleryRef={galleryRef}
						mediaCurrentIndex={mediaIndex}
						updatedMediaList={updateMediaList}
						setUpdateMediaList={setUpdateMediaList}
						handleMoveImage={handleMoveImage}
					/>
				)}

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

				<Box css={carouselBoxStyle}>{children}</Box>
			</div>
		</CarouselContext.Provider>
	);
};

Carousel.Item = CarouselItem;

export default Carousel;
