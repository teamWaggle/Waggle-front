import { createContext, useMemo, useState, useRef } from "react";
import type { PropsWithChildren } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow.svg?react";

import { Box } from "@/components/common";
import Gallery from "@/components/common/GalleryCarousel/Gallery/Gallery";
import GalleryCarouselItem from "@/components/common/GalleryCarousel/GalleryCarouselItem";

import Dots from "../Carousel/Dots";

import useCarousel from "@/hooks/useCarousel";
import useClickOutSide from "@/hooks/useClickOutSide";

import {
	mediaBoxStyle,
	buttonBoxStyle,
	leftButtonStyle,
	rightButtonStyle,
	carouselBoxStyle,
} from "@/components/common/GalleryCarousel/GalleryCarousel.style";

export interface GalleryCarouselProps extends PropsWithChildren {
	width: number;
	height: number;
	borderRadius: string;
	length: number;
	showArrows?: boolean;
	showDots?: boolean;
	updateMediaList: string[];
	setUpdateMediaList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const GalleryCarouselContext = createContext<{
	mediaIndex: number;
	width: number;
	height: number;
	itemRef: React.MutableRefObject<HTMLDivElement | null>;
	borderRadius: string;
} | null>(null);

const GalleryCarousel = ({
	width,
	height,
	borderRadius,
	length,
	children,
	showDots,
	showArrows,
	updateMediaList,
	setUpdateMediaList,
}: GalleryCarouselProps) => {
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
			borderRadius,
			// carouselBoxRef,
			// handleMoveImage,
			// handleClickLeft,
			// handleClickRight,
		}),
		[
			width,
			height,
			mediaIndex,
			itemRef,
			borderRadius,
			// carouselBoxRef,
			// handleMoveImage,
			// handleClickLeft,
			// handleClickRight,
		],
	);

	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [, setMediaCurrentIndex] = useState(0);

	const galleryRef = useRef<HTMLDivElement>(null);

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));

	const handleGalleryOpen = () => {
		setIsGalleryOpen((prev) => !prev);
	};

	return (
		<GalleryCarouselContext.Provider value={context}>
			<div css={mediaBoxStyle(width, height, borderRadius)} ref={carouselBoxRef}>
				<Gallery
					isGalleryOpen={isGalleryOpen}
					handleGalleryOpen={handleGalleryOpen}
					galleryRef={galleryRef}
					mediaCurrentIndex={mediaIndex}
					setMediaCurrentIndex={setMediaCurrentIndex}
					updatedMediaList={updateMediaList}
					setUpdateMediaList={setUpdateMediaList}
					handleMoveImage={handleMoveImage}
				/>

				{showArrows && length !== 1 && (
					<div css={buttonBoxStyle}>
						<button css={leftButtonStyle} onClick={handleClickLeft}>
							<LeftArrowIcon />
						</button>
						<button css={rightButtonStyle} onClick={handleClickRight}>
							<RightArrowIcon />
						</button>
					</div>
				)}

				{showDots && (
					<Dots mediaLength={length} selectMediaNumber={mediaIndex} moveImage={handleMoveImage} />
				)}

				<Box css={carouselBoxStyle}>{children}</Box>
			</div>
		</GalleryCarouselContext.Provider>
	);
};

GalleryCarousel.Item = GalleryCarouselItem;

export default GalleryCarousel;
