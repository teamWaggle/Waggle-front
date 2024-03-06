import React, { useState, useRef } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex } from "@/components/common";

// import type { FileProp } from "@/types/upload";

import {
	layoutStyle,
	imgBoxStyle,
	sliderBoxStyle,
	imgStyle,
	arrowBoxStyle,
	imgDotBoxStyle,
	imgDotStyle,
} from "@/components/Story/StoryDetail/StoryImgSlider/StoryImgSlider.style";

const StoryImgSlider = ({
	mediaUrl,
	imgUrls,
	isUpload,
}: {
	mediaUrl?: string[];
	imgUrls?: string[];
	isUpload?: boolean;
}) => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const totalIndex = isUpload ? imgUrls && imgUrls.length - 1 : mediaUrl && mediaUrl.length - 1;

	const wrapRef = useRef<HTMLDivElement>(null);

	const handleLeftArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null) return;
		if (sliderIndex <= 0) return;

		wrap.scrollBy({
			left: -wrap.clientWidth,
			behavior: "smooth",
		});

		detectScroll();
	};

	const handleRightArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null || !totalIndex) return;
		if (sliderIndex >= totalIndex) return;

		wrap.scrollBy({
			left: wrap.clientWidth,
			behavior: "smooth",
		});

		detectScroll();
	};

	const detectScroll = (): undefined => {
		const wrap = wrapRef.current;
		if (wrap === null) return;

		let timer = null;

		if (timer !== null) {
			clearTimeout(timer);
		}

		timer = setTimeout(function () {
			setSliderIndex(Math.round(wrap.scrollLeft / wrap.clientWidth));
		}, 150);
	};

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle} ref={wrapRef} onScroll={detectScroll}>
				{totalIndex && (
					<div css={sliderBoxStyle(`${(totalIndex + 1) * 100}%`)}>
						{isUpload
							? imgUrls &&
							  imgUrls.map((media) => (
									<img key={media} src={media} alt="img" css={imgStyle(isUpload)} />
							  ))
							: mediaUrl &&
							  mediaUrl.map((media) => (
									<img key={media} src={media} alt="img" css={imgStyle(isUpload)} />
							  ))}
					</div>
				)}
			</div>
			<Flex
				css={arrowBoxStyle(sliderIndex === 0)}
				onClick={handleLeftArrowClick}
				className="leftArrow"
			>
				<LeftArrowIcon />
			</Flex>
			<Flex
				css={arrowBoxStyle(sliderIndex === totalIndex)}
				onClick={handleRightArrowClick}
				className="rightArrow"
			>
				<RightArrowIcon />
			</Flex>
			<Flex css={imgDotBoxStyle}>
				{totalIndex &&
					totalIndex > 1 &&
					[...Array(totalIndex + 1)].map((_, index) => (
						<div key={index} css={imgDotStyle(sliderIndex === index)} />
					))}
			</Flex>
		</Flex>
	);
};

export default React.memo(StoryImgSlider);
