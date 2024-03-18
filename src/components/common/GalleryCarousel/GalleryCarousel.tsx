// import { createContext, useMemo } from "react";
// import type { PropsWithChildren } from "react";

// import { carouselStyle } from "@/components/common/GalleryCarousel/GalleryCarousel.style";

// export interface GalleryCarouselProps extends PropsWithChildren {
// 	width: number;
// 	height: number;
// 	borderRadius: string;
// 	length: number;
// 	showArrows?: boolean;
// 	showDots?: boolean;
// 	children?: JSX.Element | JSX.Element[];
// }

// export const GalleryCarouselContext = createContext<{
// 	mediaIndex: number;
// 	width: number;
// 	height: number;
// 	itemRef: React.MutableRefObject<HTMLDivElement | null>;
// } | null>(null);

// const GalleryCarousel = ({
// 	width,
// 	height,
// 	borderRadius,
// 	length,
// 	showArrows,
// 	showDots,
// 	children,
// }: GalleryCarouselProps) => {
// 	const context = useMemo(
// 		() => ({
// 			width,
// 			height,
// 			// mediaIndex,
// 			// itemRef,
// 			// carouselBoxRef,
// 			// handleMoveImage,
// 			// handleClickLeft,
// 			// handleClickRight,
// 		}),
// 		[
// 			width,
// 			height,
// 			// mediaIndex,
// 			// itemRef,
// 			// carouselBoxRef,
// 			// handleMoveImage,
// 			// handleClickLeft,
// 			// handleClickRight,
// 		],
// 	);

// 	return (
// 		// <GalleryCarouselContext.Provider value={context}>
// 		<div css={carouselStyle(width, height, borderRadius)}>
// 			<img src={mediaList[mediaIndex]} alt="mediaImg" />

// 		</div>
// 		// </GalleryCarouselContext.Provider>
// 	);
// };

// export default GalleryCarousel;
