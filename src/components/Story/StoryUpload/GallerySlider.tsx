import { useState, useRef, useCallback, useEffect } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex } from "@/components/common";

import {
	layoutStyle,
	imgBoxStyle,
	sliderBoxStyle,
	imgStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryUpload/GallerySlider.style";

const GallerySlider = ({ medias }: { medias: string[] }) => {
	const [isShowLeftArrow, setIsShowLeftArrow] = useState<boolean | null>(false);
	const [isShowRightArrow, setIsShowRightArrow] = useState<boolean | null>(true);

	const wrapRef = useRef<HTMLDivElement>(null);

	console.log(medias);

	useEffect(() => {
		if (!wrapRef.current) return;

		if (wrapRef.current.clientWidth === wrapRef.current.scrollWidth) {
			setIsShowLeftArrow(null);
			setIsShowRightArrow(null);
		}
	}, []);

	const handleLeftArrowClick = useCallback(() => {
		const wrap = wrapRef.current;

		if (wrap === null) return;

		wrap.scrollTo({
			left: 0,
			behavior: "smooth",
		});
	}, []);

	const handleRightArrowClick = useCallback(() => {
		const wrap = wrapRef.current;

		if (wrap === null) return;

		wrap.scrollTo({
			left: wrap.scrollWidth,
			behavior: "smooth",
		});
	}, []);

	const galleryScrollHandler = useCallback(() => {
		if (!wrapRef.current) return;

		if (wrapRef.current.scrollLeft === 0) {
			setIsShowLeftArrow(false);
			setIsShowRightArrow(true);
		} else if (
			wrapRef.current.clientWidth ===
			wrapRef.current.scrollWidth - wrapRef.current.scrollLeft
		) {
			setIsShowLeftArrow(true);
			setIsShowRightArrow(false);
		} else {
			setIsShowLeftArrow(false);
			setIsShowRightArrow(false);
		}
	}, []);

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle(medias.length)} ref={wrapRef} onScroll={galleryScrollHandler}>
				<div css={sliderBoxStyle}>
					{medias.map((file, index) => (
						<img key={`${file}${index}`} src={file} css={imgStyle} />
					))}
				</div>
			</div>

			{isShowLeftArrow !== null && isShowLeftArrow && (
				<button css={arrowBoxStyle} className="leftArrow" onClick={handleLeftArrowClick}>
					<LeftArrowIcon width={30} height={30} />
				</button>
			)}

			{isShowRightArrow !== null && isShowRightArrow && (
				<button css={arrowBoxStyle} className="rightArrow" onClick={handleRightArrowClick}>
					<RightArrowIcon width={30} height={30} />
				</button>
			)}
		</Flex>
	);
};

export default GallerySlider;
