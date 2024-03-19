import { useContext, useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { GalleryCarouselContext } from "@/components/common/GalleryCarousel/GalleryCarousel";

import { carouselItemStyle } from "@/components/common/GalleryCarousel/GalleryCarousel.style";

export interface GalleryCarouselItemProps extends PropsWithChildren {
	index: number;
}

const GalleryCarouselItem = ({ index, children }: GalleryCarouselItemProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const context = useContext(GalleryCarouselContext);

	if (!context) throw Error("Carousel context error");

	const { width, height, mediaIndex, itemRef, borderRadius } = context;

	useEffect(() => {
		if (ref.current) {
			if (index === mediaIndex) itemRef.current = ref.current;
		}
	}, [mediaIndex]);

	return (
		<div ref={ref} css={carouselItemStyle(width, height, borderRadius)}>
			{children}
		</div>
	);
};

export default GalleryCarouselItem;
